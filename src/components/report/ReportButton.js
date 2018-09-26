import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'

class ReportButton extends Component {
  constructor(props) {
    super(props)
    this.state = { isShowingTip: false }
  }

  hideTip = () => this.setState({ isShowingTip: false })

  showTip = () => this.setState({ isShowingTip: true })

  render() {
    const { handleReportClick, isCourseFinished } = this.props
    const { isShowingTip } = this.state
    return isCourseFinished ? (
      <Button
        text="Relatório de Conclusão"
        icon={faGraduationCap}
        onClick={handleReportClick}
      />
    ) : (
      <div className="relative">
        <div
          className="db w-100 b--solid bw2 br3 fw6 pv2 ph2 f5 bg-light-gray b--light-gray moon-gray tc"
          onMouseEnter={this.showTip}
          onMouseLeave={this.hideTip}
        >
          <FontAwesomeIcon icon={faGraduationCap} className="mr2" />
          <span>Relatório de Conclusão</span>
        </div>
        {isShowingTip && (
          <div className="tc f7 silver mt1 ph2 absolute">
            Termine o curso para poder gerar seu relatório de provável formando.
          </div>
        )}
      </div>
    )
  }
}

ReportButton.propTypes = {
  handleReportClick: PropTypes.func.isRequired,
  isCourseFinished: PropTypes.bool,
}

export default ReportButton
