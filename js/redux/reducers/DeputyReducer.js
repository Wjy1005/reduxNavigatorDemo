/**
 * Created by git-wangjianying on 2017/12/29.
 * @flow
 */

'use strict';

import { combineReducers ,createStore} from 'redux'
import { ADD_TODO, CHANGE_TODO } from '../Action/MainAction'

const dodos = (state = [], action)=> {
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

const gogos = (state = [], action)=> {
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

const DeputyReducer = combineReducers({
    dodos,
    gogos
})

export default DeputyReducer

