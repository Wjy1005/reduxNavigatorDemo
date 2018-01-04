/**
 * Created by git-wangjianying on 2017/12/29.
 * @flow
 */

'use strict';

import { combineReducers ,createStore} from 'redux'
import { ADD_TODO, CHANGE_TODO } from '../Action/MainAction'

const initState = {

}

const todos = (state = initState, action)=> {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                title: action.text,
                completed: false
            }
        case CHANGE_TODO:
            return {
                ...state,
                title: action.text,
                completed: false
            }
        default:
            return state
    }
}

const gos = (state = initState, action)=> {
    switch (action.type) {
        case ADD_TODO:
            return Object.assign({},state,{
                ...state,
                title: action.text,
                completed: false
            });
        case CHANGE_TODO:
            return Object.assign({},state,{
                ...state,
                title: action.text,
                completed: false
            });
        default:
            return state
    }
}

const MainReducer = combineReducers({
    todos,
    gos
})

export default MainReducer

