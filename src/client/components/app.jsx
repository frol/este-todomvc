import DocumentTitle from 'react-document-title'
import React from 'react'
import state from '../state'
import {RouteHandler} from 'react-router'
import {addHundredTodos} from '../todos/actions'

// Leverage webpack require goodness for feature toggle based dead code removal.
require('../../../assets/css/app.styl')

export default React.createClass({
  componentDidMount() {
    state.on('change', () => {
      // Try hundreds todos with and without PureRenderMixin.
      console.time('whole app re-rendered')
      this.forceUpdate(() => {
        console.timeEnd('whole app re-rendered')
      })
    })

    // For Om-like app state persistence. Press shift+ctrl+s to save app state
    // and shift+ctrl+l to load.
    document.addEventListener('keypress', e => {
      if (!e.shiftKey || !e.ctrlKey) return
      switch (e.keyCode) {
        case 19: /* s */
          window._appState = state.save()
          window._appStateString = JSON.stringify(window._appState)
          console.log('app state saved')
          console.log('copy the state to your clipboard by calling copy(_appStateString)')          
          console.log('for dev type _appState and press enter')
          break
        case 12: /* l */
          const stateStr = window.prompt('Path the serialized state into the input')
          const newState = JSON.parse(stateStr)
          if (!newState) return
          state.load(newState)
          break
      }
    })
  },

  render() {
    return (
      <DocumentTitle title={'Este.js • TodoMVC'}>
        <div className="page">
          <RouteHandler />
          <footer id="info">
            <p>Double-click to edit a todo</p>
            <p>Written by <a href="https://twitter.com/steida">Daniel Steigerwald</a></p>
            <p>Part of <a href="https://github.com/steida/este">Este.js</a></p>
          </footer>
          <div className="playground">
            <p>
              This TodoMVC demo was slightly improved to demonstrate some
              advanced features. Open console and enjoy.
            </p>
            <ul>
              <li>
                App is isomorphic. Check server rendered HTML and routing.
              </li>
              <li>
                App is über-fast. Check <a href="http://facebook.github.io/immutable-js">immutable.js</a>{' '}
                with <a href="http://facebook.github.io/react/docs/pure-render-mixin.html">
                PureRenderMixin</a> usage. Add hundreds todos, then play with
                app. Run app with <b>gulp -p</b> to get React production mode
                performance.
              </li>
              <li>
                Global Om-like app state. Check <a href="https://www.youtube.com/watch?v=5yHFTN-_mOo">
                video</a>. Then try <b>shift+ctrl+s</b> to save app state and <b>
                shift+ctrl+l</b> to load.
              </li>
            </ul>
            <button onClick={addHundredTodos}>Add Hundred Todos</button>
            <button
              disabled={!state.canUndo}
              onClick={() => state.undo()}
            >Undo</button>
            <button 
              disabled={!state.canRedo}
              onClick={() => state.redo()}
            >Redo</button>
          </div>
        </div>
      </DocumentTitle>
    )
  }
})
