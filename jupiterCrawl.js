require = require('esm')(module)
const fs = require('fs')
const phantom = require('phantom')
const cheerioAdv = require('cheerio-advanced-selectors')
const cheerio = cheerioAdv.wrap(require('cheerio'))

const geral = require('./src/tracks/geral').default
const teoria = require('./src/tracks/teoria').default
const escience = require('./src/tracks/escience').default
const sistemas = require('./src/tracks/sistemas').default
const ia = require('./src/tracks/ia').default

const grabClassesFromBoxes = boxes =>
  boxes.reduce((acc, cur) => [...acc, ...cur.classes], [])

const grabClassesFromTrack = track => [
  ...grabClassesFromBoxes(track.boxes.left),
  ...grabClassesFromBoxes(track.boxes.right),
]
;(async function() {
  const allClasses = Array.from(
    new Set([
      ...grabClassesFromTrack(geral),
      ...grabClassesFromTrack(teoria),
      ...grabClassesFromTrack(escience),
      ...grabClassesFromTrack(sistemas),
      ...grabClassesFromTrack(ia),
    ])
  )

  const fullClasses = await Promise.all(
    allClasses.map(async code => {
      console.log(`Buscando matéria ${code}...`)
      const instance = await phantom.create()
      const page = await instance.createPage()

      await page.open(
        `https://uspdigital.usp.br/jupiterweb/obterDisciplina?sgldis=${code}`
      )
      const content = await page.property('content')
      const $ = cheerio.load(content)
      const headerTable = $(
        '#layout_conteudo form[name=form1] table tr table:eq(2)'
      )
      const name = $('tr:eq(4)', headerTable)
        .text()
        .split('-')[1]
        .trim()

      const creditsTable = $(
        '#layout_conteudo form[name=form1] table tr table:eq(3)'
      )
      const credits = $('tr:eq(0)', creditsTable)
        .text()
        .replace(/\D/g, '')
      const wcredits = $('tr:eq(1)', creditsTable)
        .text()
        .replace(/\D/g, '')

      let summaryTable = $(
        '#layout_conteudo form[name=form1] table tr table:eq(5)'
      )
      if (
        $('tr:eq(0)', summaryTable)
          .text()
          .includes('Docente')
      ) {
        summaryTable = summaryTable.next('table')
      }
      const summaryRow = $('tr', summaryTable).filter(
        (_, el) =>
          $(el)
            .text()
            .trim() === 'Programa'
      )
      const summary = summaryRow
        .next('tr')
        .text()
        .trim()

      const dependencies = await fetchDependencies(page, code)

      await instance.exit()
      return { code, name, credits, wcredits, summary, dependencies }
    })
  )
  fs.writeFileSync(
    './src/definitions/allclasses.json',
    JSON.stringify(fullClasses)
  )
})()

const fetchDependencies = async (page, code) => {
  await page.open(
    `https://uspdigital.usp.br/jupiterweb/listarCursosRequisitos?coddis=${code}`
  )
  const content = await page.property('content')
  const $ = cheerio.load(content)
  const dependencies = []

  if (
    $('#web_mensagem')
      .text()
      .includes('Disciplina não tem requisitos')
  )
    return dependencies

  const depsTable = $('#layout_conteudo form[name=form1] table table:eq(2)')

  let depsRow = $('tr', depsTable).filter((_, el) =>
    $(el)
      .text()
      .trim()
      .includes('45052')
  )

  if (!depsRow.length) return dependencies

  while ((depsRow = depsRow.next('tr')).text().trim() !== '') {
    if (
      depsRow
        .last('td')
        .text()
        .includes('fraco')
    )
      continue

    dependencies.push(
      depsRow
        .first('td')
        .text()
        .split('-')[0]
        .trim()
    )
  }

  return dependencies
}
