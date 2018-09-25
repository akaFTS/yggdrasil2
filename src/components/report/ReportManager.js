import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-responsive-modal'
import { PDFExport } from '@progress/kendo-react-pdf'
import withEvolution from '../providers/withEvolution'
import Button from '../Button'
import { faGraduationCap, faFileAlt } from '@fortawesome/free-solid-svg-icons'
import Report from './Report'

class ReportManager extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isModalOpen: false,
      isShowingReport: false,
      name: '',
      nusp: '',
      obs: '',
    }
  }

  openModal = () => {
    this.setState({ isModalOpen: true })
  }

  handleCloseModal = () => {
    this.setState({ isModalOpen: false })
  }

  showReport = () => {
    this.setState({ isShowingReport: true })
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  exportPDF = () => {
    this.resume.save()
  }

  render() {
    const { isModalOpen, isShowingReport, name, nusp, obs } = this.state
    const { doneClasses } = this.props

    return (
      <div className="bg-washed-yellow pa3 br4">
        <div className="tc fw6 dark-blue mb2 f4">Você concluiu o curso!</div>
        <Button
          text="Gerar Relatório"
          icon={faGraduationCap}
          onClick={this.openModal}
        />
        <Modal
          center
          open={isModalOpen}
          onClose={this.handleCloseModal}
          classNames={{ modal: 'br4 w-100 w-70-l' }}
        >
          <div className="montserrat">
            <div className="f4 fw6 mb4 dark-blue">
              Relatório de Conclusão do Curso
            </div>
            {isShowingReport ? (
              <React.Fragment>
                <div className="mb3 w-50 center">
                  <Button
                    text="Salvar Relatório"
                    onClick={this.exportPDF}
                    icon={faFileAlt}
                  />
                </div>
                <div className="br4 ba b--moon-gray pa3 ">
                  <PDFExport
                    paperSize={'A4'}
                    fileName="relatorioConclusaoBCC.pdf"
                    ref={r => (this.resume = r)}
                    keepTogether="section"
                  >
                    <Report
                      name={name}
                      nusp={nusp}
                      obs={obs}
                      doneClasses={doneClasses}
                    />
                  </PDFExport>
                </div>
                <div className="pv2 bg-moon-gray br--bottom br4 w-90 center mb4" />
              </React.Fragment>
            ) : (
              <div className="w-100 w-75-ns center">
                <div className="flex flex-column mb3">
                  <label className="fw5 mb1">Nome</label>
                  <input
                    className="br3 ba b--moon-gray mid-gray pa2 outline-0"
                    name="name"
                    value={name}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="flex flex-column mb3 w-50">
                  <label className="fw5 mb1">Nº USP</label>
                  <input
                    className="br3 ba b--moon-gray mid-gray pa2 outline-0"
                    name="nusp"
                    value={nusp}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="flex flex-column mb4">
                  <label className="fw5 mb1">Observações</label>
                  <textarea
                    className="br3 ba b--moon-gray mid-gray pa2 outline-0"
                    rows={5}
                    name="obs"
                    placeholder="Utilize este espaço para falar de equivalências ou outros pontos da sua graduação que o Yggdrasil não cobre automaticamente"
                    value={obs}
                    onChange={this.handleChange}
                  />
                </div>
                <Button text="Gerar Relatório" onClick={this.showReport} />
              </div>
            )}
          </div>
        </Modal>
      </div>
    )
  }
}

ReportManager.propTypes = {
  doneClasses: PropTypes.array.isRequired,
}

export default withEvolution(ReportManager)
