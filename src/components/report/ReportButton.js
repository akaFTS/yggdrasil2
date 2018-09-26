import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import Button from '../Button'

class ReportButton extends Component {
  constructor(props) {
    super(props)
    this.state = { isShowingTip: false }
  }

  hideTip = () => this.setState({ isShowingTip: false })

  showTip = () => this.setState({ isShowingTip: true })

  render() {
    const { handleReportClick, isLikelyGraduate } = this.props
    const { isShowingTip } = this.state
    return isLikelyGraduate ? (
      <Button
        variation="important"
        text="Provável Formando"
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
          <span>Provável Formando</span>
        </div>
        {isShowingTip && (
          <div className="tc f7 silver mt1 ph2 absolute">
            Para ser provável formando, você precisa estar terminando o curso
            neste semestre.
          </div>
        )}
      </div>
    )
  }
}

ReportButton.propTypes = {
  handleReportClick: PropTypes.func.isRequired,
  isLikelyGraduate: PropTypes.bool,
}

export default ReportButton
