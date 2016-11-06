import React from 'react'
import Codemirror from 'react-codemirror'
import 'codemirror/mode/shell/shell'
import preloaderExample from './webpack-preloader-example.txt'

const codeSnippetConfig = {
  mode: 'shell',
  theme: 'base16-dark',
  readOnly: true
}

export default function () {
  return (
    <div>
      <p>If you like how the emojified code looks, keep it and let webpack transpile it into standard JavaScript. Install the webpack loader.</p>
      <Codemirror className='code-sample' options={codeSnippetConfig} value='npm install mog-script-loader' />
      <p>Add it as preloader in your webpack configuration and ship the emojis :)</p>
      <Codemirror className='code-sample' options={codeSnippetConfig} value={preloaderExample} />
    </div>
  )
}
