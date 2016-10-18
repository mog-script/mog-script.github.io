import React from 'react'
import logo from './mog-script-logo.png'

export default function LandingPage () {
  return <main>
    <img className='logo' src={logo} />
    <h2>Standalone</h2>
    <code>npm install -g mog-script</code>

    <h2>Webpack loader</h2>
    <code>npm install mog-script-loader</code>

    <h2>Atom plugin</h2>
    <code>apm install atom-mog-script-snippets</code>
    <img
      src='https://raw.githubusercontent.com/mog-script/atom-mog-script-snippets/master/_images/mog-script-snippets-example.gif'
    />
  </main>
}
