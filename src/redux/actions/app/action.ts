import { AppStates } from '../../../redux/reducers/app/models'
import { APP_CHANGE_DATA, APP_INSERT_DATA, APP_RESET_DATA } from './actionType'

export const appChangeData = (input: AppStates) => {
  return {
    type: APP_CHANGE_DATA,
    value: input,
  }
}

export const appInsertData = (input: object) => {
  return {
    type: APP_INSERT_DATA,
    value: input,
  }
}

export const appResetData = () => {
  return {
    type: APP_RESET_DATA,
  }
}
