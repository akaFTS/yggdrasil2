import React from 'react'
import PropTypes from 'prop-types'
import ReportClasse from './ReportClasse'

const ReportSection = ({
  title,
  classesFinished,
  classesOngoing,
  credits,
  totalCredits,
  shouldHideCredits,
}) => {
  return (
    <section className="mt5">
      <div className="b f6 mb1">{title}:</div>
      <div className="flex flex-wrap">
        {classesFinished.map(code => (
          <ReportClasse key={code} code={code} />
        ))}
        {classesOngoing.map(code => (
          <ReportClasse ongoing key={code} code={code} />
        ))}
      </div>
      {!shouldHideCredits && (
        <div className="f6 mt1">
          <span className="b">Total de Créditos: </span>
          {credits}/{totalCredits}
        </div>
      )}
    </section>
  )
}

ReportSection.propTypes = {
  title: PropTypes.string.isRequired,
  classesFinished: PropTypes.array.isRequired,
  classesOngoing: PropTypes.array.isRequired,
  credits: PropTypes.number,
  totalCredits: PropTypes.number,
  shouldHideCredits: PropTypes.bool,
}

export default ReportSection
