import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from '../Button'
import { faFileUpload, faFileDownload } from '@fortawesome/free-solid-svg-icons'
import withClasses from '../providers/withClasses'
import withElectives from '../providers/withElectives'
import withEvolution from '../providers/withEvolution'
import { saveAs } from 'file-saver/FileSaver'

class IOManager extends Component {
  constructor(props) {
    super(props)
    this.fileUploader = React.createRef()
  }

  exportData = () => {
    const { exportClasses, exportElectives, exportEvolution } = this.props
    const payload = {
      evolution: exportEvolution(),
      classes: exportClasses(),
      electives: exportElectives(),
    }
    const blob = new Blob([JSON.stringify(payload)], {
      type: 'text/plain;charset=utf-8',
    })
    saveAs(blob, 'bcc_export.ygg')
  }

  importData = rawData => {
    try {
      const { importClasses, importElectives, importEvolution } = this.props
      const payload = JSON.parse(rawData)

      importClasses(payload.classes)
      importElectives(payload.electives)
      importEvolution(payload.evolution)
    } catch (e) {}
  }

  openPicker = () => {
    this.fileUploader.current.click()
  }

  handleFileSelect = evt => {
    const files = evt.target.files
    if (!files.length) return

    const file = files[0]
    const reader = new FileReader()
    reader.onload = e => {
      this.importData(e.target.result)
    }
    reader.readAsText(file)
  }

  render() {
    return (
      <div className="flex">
        <div className="mr2 w-100">
          <Button
            text="Importar"
            icon={faFileUpload}
            onClick={this.openPicker}
          />
        </div>
        <div className="ml2 w-100">
          <Button
            text="Exportar"
            icon={faFileDownload}
            onClick={this.exportData}
          />
        </div>
        <input
          className="dn"
          ref={this.fileUploader}
          type="file"
          onChange={this.handleFileSelect}
        />
      </div>
    )
  }
}

IOManager.propTypes = {
  importClasses: PropTypes.func.isRequired,
  exportClasses: PropTypes.func.isRequired,
  importEvolution: PropTypes.func.isRequired,
  exportEvolution: PropTypes.func.isRequired,
  importElectives: PropTypes.func.isRequired,
  exportElectives: PropTypes.func.isRequired,
}

export default withEvolution(withElectives(withClasses(IOManager)))
