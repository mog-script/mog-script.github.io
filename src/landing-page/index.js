import React from 'react'
import SideBySide from '../side-by-side'

export default function LandingPage () {
  return <div>
    <h2>Try it out!</h2>
    <SideBySide />

    <h2>Standalone</h2>
    <code>npm install -g mog-script</code>

    <h2>Webpack loader</h2>
    <code>npm install mog-script-loader</code>

    <h2>Atom plugin</h2>
    <code>apm install atom-mog-script-snippets</code>
    <img className='mog-script-gif'
      src='https://raw.githubusercontent.com/mog-script/atom-mog-script-snippets/master/_images/mog-script-snippets-example.gif'
    />
  </div>
}
