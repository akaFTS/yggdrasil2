import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'

const ReportButton = ({ handleReportClick, isCourseFinished }) => {
  return isCourseFinished ? (
    <div className="bg-washed-yellow pa3 br4">
      <div className="tc fw6 dark-blue mb2 f4">Você concluiu o curso!</div>
      <Button
        text="Gerar Relatório"
        icon={faGraduationCap}
        onClick={handleReportClick}
      />
    </div>
  ) : (
    <div
      className="db w-100 b--solid bw2 br3 fw6 pv2 ph2 f5 bg-light-gray b--light-gray moon-gray tc"
      style={{ cursor: 'not-allowed' }}
    >
      <FontAwesomeIcon icon={faGraduationCap} className="mr2" />
      <span>Relatório de Conclusão</span>
    </div>
  )
}

ReportButton.propTypes = {
  handleReportClick: PropTypes.func.isRequired,
  isCourseFinished: PropTypes.bool.isRequired,
}

export default ReportButton
