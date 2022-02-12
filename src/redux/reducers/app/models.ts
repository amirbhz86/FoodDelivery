export interface AppStates {
    stopwatchStatus?: 'stop' | 'start' | 'reset'
    currentStack?: 'Splash' | 'Initial' | 'App' | ''
    addToProgramModal?: boolean
    hideTabbar?: boolean | undefined
    version?: string
    selectedLevel?: any
    connection?: boolean | null
    isInternetReachable?: boolean
    unreachable?: boolean
    selectedDayOfWeek?: number | string
    uploadAvatarModal?: boolean
    remindPhoneAndPass?: boolean
    athleteField?: string | number
    selectedExercises?: object
    addAthleteModal?: boolean
    addSelectedExerciseToAthlete?: number
    tokens?: {
        access: string
        refresh: string
    }
    trainerField?: string | number
    createExercise?: number
    message?: {
        visible?: boolean
        desc?: string
        cancelable?: boolean
        iconName?: 'check' | 'warning'
        buttonTitle?: string
        onButtonPressed?: () => void
    }
}
