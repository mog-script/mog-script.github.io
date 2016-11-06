import React, {Component} from 'react'
import {decompile} from 'mog-script'
import Codemirror from 'react-codemirror'
import 'codemirror/mode/javascript/javascript'
import example from './example.txt'

const codeEditorConfig = {
  mode: 'javascript',
  theme: 'base16-dark',
  readOnly: true,
  tabSize: 2
}

export default class SideBySide extends Component {
  constructor () {
    super()

    this.state = {
      mogscript: decompile(example),
      javascript: example
    }
  }

  render () {
    const {javascript, mogscript} = this.state

    return <div>
      <Codemirror
        className='code-editor'
        options={{ ...codeEditorConfig, readOnly: false }}
        value={javascript}
        onChange={handleChange.bind(this)}
      />
      <Codemirror
        className='code-editor'
        options={codeEditorConfig}
        value={mogscript}
        onChange={handleChange.bind(this)}
      />
    </div>
  }
}

function handleChange (newCode) {
  this.setState({
    javascript: newCode,
    mogscript: decompile(newCode)
  })
}
