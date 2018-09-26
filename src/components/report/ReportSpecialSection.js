import React from 'react'
import PropTypes from 'prop-types'
import ReportSection from './ReportSection'

const ReportSpecialSection = ({ title, classe, ongoing }) => {
  const classesFinished = ongoing ? [] : [classe]
  const classesOngoing = ongoing ? [classe] : []

  return (
    <ReportSection
      title={title}
      classesFinished={classesFinished}
      classesOngoing={classesOngoing}
      shouldHideCredits
    />
  )
}

ReportSpecialSection.propTypes = {
  title: PropTypes.string.isRequired,
  classe: PropTypes.string,
  ongoing: PropTypes.bool,
}

export default ReportSpecialSection
