//@ts-nocheck
import { appChangeData, appResetData } from '../redux/actions/app/action'
import { userChangeData, userResetData } from '../redux/actions/user/action'
import { AppStates } from '../redux/reducers/app/models'
import { ReducersStates } from '../redux/reducers/models'
import { UserStates } from '../redux/reducers/user/models'
import { useDispatch, useSelector } from 'react-redux'

const useRedux = () => {
  const dispatch = useDispatch()
  const Get = () => {
    const { user, app } = useSelector(
      (state: ReducersStates) => state,
    ) as ReducersStates
    return { user, app }
  }
  const Save = (data: UserStates | AppStates, statesType: 'user' | 'app') => {
    switch (statesType) {
      case 'app':
        data = data as AppStates
        dispatch(appChangeData(data))
        break
      case 'user':
        data = data as UserStates
        dispatch(userChangeData(data))
        break
    }
  }
  const Reset = (statesType: 'app' | 'user') => {
    switch (statesType) {
      case 'app':
        dispatch(appResetData())
        break
      case 'user':
        dispatch(userResetData())
        break
    }
  }
  return { Save, Reset, Get }
}

export default useRedux
