
import output from './reducer'
import { combineReducers, createStore } from 'redux'

const ADD = 'add'

export const addOutput = (cmd) => ({type: ADD, cmd})

const reducer =  function(state = [], action) {
  switch(action.type){
    case ADD:
      return [...state, action.cmd]
    default:
      return state
  }
}

export default createStore(reducer)
