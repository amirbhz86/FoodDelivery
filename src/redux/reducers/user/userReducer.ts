import {
  USER_CHANGE_DATA,
  USER_INSERT_DATA,
  USER_RESET_DATA,
} from '../../actions/user/actionType'
import { UserStates } from './models'
// import { }
const INITIAL_STATE: any = {
  subPriceFoods : 0 ,
  foodSelected : [] ,
  username: '',
  gender: '2',
  email: '',
  fields_lst: [],
  userProfile: '',
  id: '',
  avatar: null,
  fullName: '',
  mobile: '',
  myCoach: {
    id: null,
    bio: '',
    activity_time: '',
    cert: '',
    code: '',
    education: '',
    user_obj: {
      username: '',
      email: '',
      first_name: '',
      profile: ''
    },
    whatsapp_number: '',
    fields_lst: '',
    rating: 0,
  }
}

export default (
  state = INITIAL_STATE,
  action: { type: string; value?: UserStates },
) => {
  switch (action.type) {
    case USER_CHANGE_DATA:
      return { ...state, ...action.value }

    case USER_INSERT_DATA:
      return { ...state, ...action.value }

    case USER_RESET_DATA:
      return INITIAL_STATE
    default:
      return state
  }
}
