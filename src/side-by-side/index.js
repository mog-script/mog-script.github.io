import React, {Component} from 'react'
import {compile, decompile} from 'mog-script'
import example from './example.txt'

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
      <textarea
        onKeyDown={handleKeyDown.bind(this)}
        onChange={(e) => this.setState({
          javascript: e.target.value,
          mogscript: decompile(e.target.value)
        })}
        value={javascript}
      />
      <textarea
        disabled
        onChange={(e) => this.setState({
          javascript: compile(e.target.value),
          mogscript: e.target.value
        })}
        value={mogscript}
      />
    </div>
  }
}

function handleKeyDown (e) {
  if (e.keyCode !== 9) {
    return
  }
  e.preventDefault()

  const target = e.target

  // get caret position/selection
  const start = target.selectionStart
  const end = target.selectionEnd
  const currentValue = target.value

  target.value = `${currentValue.substring(0, start)}  ${currentValue.substring(end)}`

  // put caret at right position again (add one for the tab)
  target.selectionStart = target.selectionEnd = start + 2
}
