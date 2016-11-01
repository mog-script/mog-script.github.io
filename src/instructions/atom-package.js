import React from 'react'
import Highlight from 'react-highlight'

export default function () {
  return (
    <div>
      <p>
        This package <a href='https://atom.io/packages/mog-script-snippets' target='_blank'>mog-script-snippets</a> will enable you to write emojified javascript faster as well as toggle between emojis and keywords.
        Install it from the atom package manager or from terminal
      </p>
      <Highlight className='javascript'>apm install atom-mog-script-snippets</Highlight>
      <h3>JS 👉 Emoji</h3>
      <Highlight className='javascript'>ctrl+alt+e</Highlight>
      <h3>Emoji 👉 JS</h3>
      <Highlight className='javascript'>ctrl+alt+k</Highlight>
    </div>
  )
}
