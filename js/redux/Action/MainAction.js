/**
 * Created by git-wangjianying on 2017/12/29.
 *
 * @flow
 */

'use strict'

export const ADD_TODO = 'ADD_TODO'
export const CHANGE_TODO = 'CHANGE_TODO'
export const OTHER_TYPE = 'OTHER_TYPE'

export const addTodo = (text)=> {
    return {type: ADD_TODO, text}
}

export const changeTodo = (text)=> {
    return {type: CHANGE_TODO, text}
}

export const addGos = (text)=> {
    return {type: ADD_TODO, text}
}

export const otherType = (text)=> {
    return {type: OTHER_TYPE, text}
}

