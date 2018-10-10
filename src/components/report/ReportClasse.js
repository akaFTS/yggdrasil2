import React from 'react'
import PropTypes from 'prop-types'
import withClasses from '../providers/withClasses'

const Report = ({ code, ongoing, allClasses }) => {
  const classe = allClasses.find(classe => classe.code === code)

  if (!classe) {
    console.warn(
      `Disciplina ${code} não encontrada, remova-a do seu arquivo e reimporte.`
    )
    return null
  }

  const creditsChanged =
    classe.oldCredits && classe.oldCredits !== classe.credits
  const wcreditsChanged =
    classe.oldWCredits && classe.oldWCredits !== classe.wcredits

  return (
    <div
      className={`ba pa3 w4 tc ${
        ongoing ? 'bg-washed-yellow' : 'bg-washed-green'
      }`}
    >
      <div className="f6 b">{classe.code}</div>
      <div className="f6 mt1">
        {creditsChanged ? (
          <span>
            ({classe.oldCredits})<span className="fw6">{classe.credits}</span>
          </span>
        ) : (
          <span>{classe.credits}</span>
        )}
        +
        {wcreditsChanged ? (
          <span>
            <span className="fw6">{classe.wcredits}</span>({classe.oldWCredits})
          </span>
        ) : (
          <span>{classe.wcredits}</span>
        )}
      </div>
    </div>
  )
}

Report.propTypes = {
  code: PropTypes.string.isRequired,
  ongoing: PropTypes.bool,
  allClasses: PropTypes.array.isRequired,
}

export default withClasses(Report)
