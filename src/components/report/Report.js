import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import CreditsManager from '../credits/CreditsManager'
import ReportSection from './ReportSection'
import '../../opensans.css'
import ReportSpecialSection from './ReportSpecialSection'
import ReportTracks from './ReportTracks'

const Report = ({ name, nusp, obs, doneClasses }) => {
  return (
    <div className="pa4 opensans">
      <h1 className="tc f5 near-black b">Relatório de Conclusão de Curso</h1>
      <h3 className="tc f6 normal">Bacharelado em Ciência da Computação</h3>
      <div className="flex flex-wrap justify-between mt4 f6">
        <span>
          <span className="b">Nome: </span>
          {name}
        </span>
        <span>
          <span className="b">NUSP: </span>
          {nusp}
        </span>
        <span className="w-100 mt1">
          <span className="b">Data de Geração do Relatório: </span>
          {moment().format('DD/MM/YYYY')}
        </span>
      </div>
      <CreditsManager doneClasses={doneClasses}>
        {({
          statisticsOptative,
          scienceOptative,
          mandatoryDone,
          mandatoryCredits,
          electiveDone,
          electiveCredits,
          freeDone,
          freeCredits,
        }) => (
          <React.Fragment>
            <ReportSection
              title="Disciplinas Obrigatórias"
              classes={mandatoryDone}
              credits={mandatoryCredits}
              totalCredits={111}
            />
            <ReportSection
              title="Disciplinas Optativas Eletivas"
              classes={electiveDone}
              credits={electiveCredits}
              totalCredits={52}
            />
            <ReportSection
              title="Disciplinas Optativas Livres"
              classes={freeDone}
              credits={freeCredits}
              totalCredits={24}
            />
            <ReportSpecialSection
              title="Optativa de Estatística"
              classe={statisticsOptative}
            />
            <ReportSpecialSection
              title="Optativa de Ciências"
              classe={scienceOptative}
            />
          </React.Fragment>
        )}
      </CreditsManager>
      <div className="mt5">
        <ReportTracks />
      </div>
      <div className="mt5 mb3 f6 lh-title">
        <span className="b">Observações: </span>
        {obs}
      </div>
      <span className="f7 gray">Relatório gerado pelo sistema Yggdrasil2</span>
    </div>
  )
}

Report.propTypes = {
  name: PropTypes.string.isRequired,
  nusp: PropTypes.string.isRequired,
  obs: PropTypes.string,
  doneClasses: PropTypes.array.isRequired,
}

export default Report
