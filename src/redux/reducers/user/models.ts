export interface UserStates {
  exerciseObject?: object
  profileId?: any,
  allExerciseObject?: object
  id?: number | string
  notifications ?: any ,
  createExerciseData?: any
  gender?: '0' | '1' | '2'
  exerciseFile?: any
  newNotif : boolean ,
  userProfile?: any
  email?: string
  myField : any 
  userType ?: 'Athlete' | 'Trainer' 
  exercisesOfDay?: any
  avatar?: string | null
  fields_lst?: object
  savedExercise?: any
  username?: string
  fullName?: string
  mobile?: string
  myCoach?: {
    id?: string | null,
    bio?: string,
    activity_time?: string,
    cert?: string,
    code?: string,
    education?: string,
    user_obj?: {
      username?: string,
      email?: string,
      first_name?: string,
      profile?: string
    },
    whatsapp_number?: string,
    rating?: number,
    fields_lst?: string,
  }
}
