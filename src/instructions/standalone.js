import React from 'react'
import Codemirror from 'react-codemirror'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/shell/shell'
import standaloneExample from './standalone-example.txt'

const codeSnippetConfig = {
  mode: 'javascript',
  theme: 'base16-dark',
  readOnly: true
}

export default function () {
  return (
    <div>
      <Codemirror className='code-sample' options={{ ...codeSnippetConfig, mode: 'shell' }} value='npm install -g mog-script' />
      <p>Say you have a M.O.G. file named <code>🍧.💎</code> that contains:</p>
      <Codemirror className='code-sample' options={codeSnippetConfig} value={standaloneExample} />
      <p>You can run it from the terminal with: <code>💎 🍧.💎</code></p>
    </div>
  )
}
