import React from 'react'
import PropTypes from 'prop-types'
import ReportClasse from './ReportClasse'

const ReportSection = ({
  title,
  classes,
  credits,
  totalCredits,
  shouldHideCredits,
}) => {
  return (
    <section className="mt5">
      <div className="b f6 mb1">{title}:</div>
      <div className="flex flex-wrap">
        {classes.map(code => (
          <ReportClasse key={code} code={code} />
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
  classes: PropTypes.array.isRequired,
  credits: PropTypes.number,
  totalCredits: PropTypes.number,
  shouldHideCredits: PropTypes.bool,
}

export default ReportSection
