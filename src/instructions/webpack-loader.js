import React from 'react'
import Highlight from 'react-highlight'
import preloaderExample from './webpack-preloader-example.txt'

export default function () {
  return (
    <div>
      <p>If you like how the emojified code looks, keep it and let webpack transpile it into standard JavaScript. Install the webpack loader.</p>
      <Highlight className='javascript'>
      npm install mog-script-loader
      </Highlight>
      <p>Add it as preloader in your webpack configuration and ship the emojis :)</p>
      <Highlight className='javascript'>
        {preloaderExample}
      </Highlight>
    </div>
  )
}
