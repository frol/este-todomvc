import State from '../lib/state'
import {OrderedMap} from 'immutable'

// Initial app state, can be isomorphic. Check example in github.com/steida/este.
// const initialState = process.env.IS_BROWSER
//   ? window._appState
//   : require('../server/initialstate')

const state = new State({
  newTodo: {
    title: ''
  },
  todos: OrderedMap()
})

export default state
export const newTodoCursor = state.cursor(['newTodo'])
export const todosCursor = state.cursor(['todos'])
