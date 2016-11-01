import React from 'react'
import Highlight from 'react-highlight'

export default function () {
  return (
    <div>
      <Highlight className='javascript'>
        npm install -g mog-script
      </Highlight>
      Say you have a M.O.G. file named <code>🍧.💎</code> that contains:
      <Highlight className='javascript'>
        {`💎 { createStore } = require('redux')

        💎 reducer = ⚙️ (state, action) {
          🚦 (action.type) {
            💼 'INCREMENT':
              🎁 state + action.payload

            💼 'DECREMENT':
              🎁 state - action.payload
          }
        }

        💎 initialState = 0

        💎 store = createStore(reducer, initialState)

        store.subscribe(⚙️ () { console.log('New value is \${store.getState()}') }

        process.stdin.on('data', ⚙️ (chunk) {
          ❓ (chunk[0] === '-') {
            store.dispatch({ type: 'DECREMENT', payload: chunk.slice(1) })
          } ❗️ {
            store.dispatch({ type: 'INCREMENT', payload: chunk })
          }
        })`}
      </Highlight>
      You can run it from the terminal with: <code>💎 🍧.💎</code>
    </div>
  )
}
