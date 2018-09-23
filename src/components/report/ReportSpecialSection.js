import React from 'react'
import PropTypes from 'prop-types'
import ReportSection from './ReportSection'

const ReportSpecialSection = ({ title, classe }) => {
  const classes = classe ? [classe] : []
  return <ReportSection title={title} classes={classes} shouldHideCredits />
}

ReportSpecialSection.propTypes = {
  title: PropTypes.string.isRequired,
  classe: PropTypes.string,
}

export default ReportSpecialSection
