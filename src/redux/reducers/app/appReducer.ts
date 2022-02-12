// @ts-ignore
import { version } from '../../../../package.json'
import { strings } from '../../../common/index'
import {
  APP_CHANGE_DATA,
  APP_INSERT_DATA,
  APP_RESET_DATA,
} from '../../actions/app/actionType'
import { AppStates } from './models'

const INITIAL_STATE: any = {
 
  version,
  remindPhoneAndPass: false,
  connection: true,
  isInternetReachable: false,
  unreachable: false,
  tokens: {
    access: '',
    refresh: '',
  },
  message: {
    visible: false,
    iconName: undefined,
    cancelable: false,
    desc: undefined,
    buttonTitle: undefined,
    onButtonPressed: () => null,
  },
}

export default (
  state = INITIAL_STATE,
  action: { type: string; value?: AppStates },
) => {
  switch (action.type) {
    case APP_CHANGE_DATA:
      return { ...state, ...action.value }
    case APP_INSERT_DATA:
      return { ...state, ...action.value }
    case APP_RESET_DATA:
      return INITIAL_STATE
    default:
      return state
  }
}
