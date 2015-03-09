import State from '../lib/state'
import {OrderedMap} from 'immutable'

const state = new State({
  newTodo: {
    title: ''
  },
  todos: OrderedMap()
})

export default state
export const newTodoCursor = state.cursor(['newTodo'])
export const todosCursor = state.cursor(['todos'])
