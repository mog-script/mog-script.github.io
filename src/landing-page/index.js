import React from 'react'
import SideBySide from '../side-by-side'
import EmojisBackground from '../emojis-background'
import EmojiMapTable from '../emoji-map-table'
import StandaloneInstructions from '../instructions/standalone'
import AtomPackageInstructions from '../instructions/atom-package'
import WebpackLoaderInstructions from '../instructions/webpack-loader'

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
            <h2>Atom package</h2>
            <AtomPackageInstructions />
          </section>
          <section>
            <h2>Webpack loader</h2>
            <WebpackLoaderInstructions />
          </section>
          <section>
            <h2>Standalone</h2>
            <StandaloneInstructions />
          </section>
          <p className='disclamer-note'>🚨 DISCLAMER 🚨<br />Do not use this package on production code! We are not responsible if your boss or colleagues gets 😱 angry 😡 when they see emojis in your JS code 😀 🙃</p>
        </div>
      </div>
    </div>
  </div>
}
