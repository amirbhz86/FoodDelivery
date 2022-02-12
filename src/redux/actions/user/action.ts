import { UserStates } from '../../../redux/reducers/user/models'
import {
  USER_CHANGE_DATA,
  USER_INSERT_DATA,
  USER_RESET_DATA,
} from './actionType'

export const userChangeData = (input: UserStates) => {
  return {
    type: USER_CHANGE_DATA,
    value: input,
  }
}

export const userInsertData = (input: object) => {
  return {
    type: USER_INSERT_DATA,
    value: input,
  }
}

export const userResetData = () => {
  return {
    type: USER_RESET_DATA,
  }
}
