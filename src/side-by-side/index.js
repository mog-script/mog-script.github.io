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
        onChange={(e) => this.setState({
          javascript: compile(e.target.value),
          mogscript: e.target.value
        })}
        value={mogscript}
      />
      <textarea
        onChange={(e) => this.setState({
          javascript: e.target.value,
          mogscript: decompile(e.target.value)
        })}
        value={javascript}
      />
    </div>
  }
}
