import React from 'react'
import SideBySide from '../side-by-side'
import EmojisBackground from '../emojis-background'
import EmojiMapTable from '../emoji-map-table'
import preloaderExample from './webpack-preloader-example.txt'

export default function LandingPage () {
  return <div>
    <div className='background-emojis' dangerouslySetInnerHTML={EmojisBackground()} />
    <div className='content-wrapper'>
      <div className='content'>
        <h2>Try it out!</h2>
        <SideBySide />
        <div className='instructions'>
          <section>
            <h2>Keywords map</h2>
            <EmojiMapTable />
          </section>
          <section>
            <h2>Standalone</h2>
            <code>npm install -g mog-script</code>
          </section>
          <section>
            <h2>Webpack loader</h2>
            <p>If you like how the emojified code looks, keep it and let webpack transpile it into standard JavaScript. Install the webpack loader.</p>
            <code>npm install mog-script-loader</code>
            <p>Add it as preloader in your webpack configuration and ship the emojis :)</p>
            <textarea disabled className='preloader-example'>{preloaderExample}</textarea>
          </section>
          <section>
            <h2>Atom package</h2>
            <p>
              This package <a href='https://atom.io/packages/mog-script-snippets' target='_blank'>mog-script-snippets</a> will enable you to write emojified javascript faster as well as toggle between emojis and keywords.
              Install it from the atom package manager or from terminal
            </p>
            <code>apm install atom-mog-script-snippets</code>
            <h3>JS 👉 Emoji</h3>
            <code>ctrl+alt+e</code>
            <h3>Emoji 👉 JS</h3>
            <code>ctrl+alt+k</code>
          </section>
        </div>
      </div>
    </div>
  </div>
}
