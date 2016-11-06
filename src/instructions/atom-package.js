import React from 'react'
import Codemirror from 'react-codemirror'
import 'codemirror/mode/shell/shell'

const codeSnippetConfig = {
  mode: 'shell',
  theme: 'base16-dark',
  readOnly: true
}

export default function () {
  return (
    <div>
      <p>
        This package <a href='https://atom.io/packages/mog-script-snippets' target='_blank'>mog-script-snippets</a> will enable you to write emojified javascript faster as well as toggle between emojis and keywords.
        Install it from the atom package manager or from terminal
      </p>
      <Codemirror className='code-sample' options={codeSnippetConfig} value='apm install atom-mog-script-snippets' />
      <h3>JS 👉 Emoji</h3>
      <Codemirror className='code-sample' options={codeSnippetConfig} value='ctrl+alt+e' />
      <h3>Emoji 👉 JS</h3>
      <Codemirror className='code-sample' options={codeSnippetConfig} value='ctrl+alt+k' />
    </div>
  )
}
