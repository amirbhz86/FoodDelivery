import { Dispatch } from 'react'

export interface Action {
  type: string
  payload: Object
}

export type ReducerType = (state: Object, action: Action) => object

export type BindedAction = (value: Object) => void

export interface ObjectOfBindedActions {
  [x: string]: BindedAction
}

export type ActionFunction = (dispatch: Dispatch<Action>) => BindedAction

export interface ObjectOfActions {
  [x: string]: ActionFunction
}
