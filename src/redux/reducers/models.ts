import { AppStates } from './app/models'
import { UserStates } from './user/models'

export interface ReducersStates {
  app: AppStates
  user: UserStates
}
