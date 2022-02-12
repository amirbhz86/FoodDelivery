
import { ms } from '../../helper/sizing'
import { getTabBarHeight } from '../../helper/statusBarHeight'
import React from 'react'
import { Dimensions, Image, Platform , StatusBar } from 'react-native'
import { strings } from '../languages/index'

export const screenH = Dimensions.get('screen').height
export const screenW = Dimensions.get('screen').width
export const windowH =  Dimensions.get('window').height - StatusBar.currentHeight
export const windowW = Dimensions.get('window').width

export const KEYS = {
  STORAGE: {
    TOKENS: '@tokens',
    BADGE: '@badge_count',
    AUTH_INFO: '@auth_info',
    ATHLETE_FIELD: '@athlete_field',
    TRAINER_FIELD: '@trainer_field',
  },
}

export const OS = Platform.OS
export const FONT_NAME = 'Lato'
export const FONT_TYPE = {
  light: `${FONT_NAME}-Light`,
  medium: `${FONT_NAME}-Medium`,
  Regular: `${FONT_NAME}-Regular`,
  bold: `${FONT_NAME}-Bold`,
}

export const FONT_SIZES: {
  headingLargeTitle: number
  headingTitle: number
  heading: number
  large: number
  medium: number
  small: number
  xSmall: number
  xxSmall: number
} = {
  headingLargeTitle: 30,
  headingTitle: 25,
  heading: 20,
  large: 18,
  medium: 16,
  small: 14,
  xSmall: 12,
  xxSmall: 10,
}


export const specialItems = [{
  id : 1 ,
  name: 'Pizza Margheritta',
  price: '5.6',
  description: 'extra cheese',
  image: require('../../assets/images/pizza4.png'),
}, {
  id : 2 ,
  name: 'Pizza Margheritta',
  price: '5.6',
  description: 'extra cheese',
  image: require('../../assets/images/pizza6.png'),
}, {
  id : 3 ,
  name: 'Pizza Margheritta',
  price: '5.6',
  description: 'extra cheese',
  image: require('../../assets/images/pizza1.png'),
}, {
  id : 4 ,
  name: 'Pizza Margheritta',
  price: '5.6',
  description: 'extra cheese',
  image: require('../../assets/images/pizza8.png'),
}]

export const burgerItems = [{
  id : 5 ,
  name: 'Pizza Margheritta',
  price: '5.6',
  description: 'extra cheese',
  image: require('../../assets/images/burger1.png'),
}, {
  id : 6 ,
  name: 'Pizza Margheritta',
  price: '5.6',
  description: 'extra cheese',
  image: require('../../assets/images/burger2.png'),
}, {
  id : 7 ,
  name: 'Pizza Margheritta',
  price: '5.6',
  description: 'extra cheese',
  image: require('../../assets/images/burger3.png'),
}]

export const chitckenItems = [{
  id : 8 ,
  name: 'Pizza Margheritta',
  price: '5.6',
  description: 'extra cheese',
  image: require('../../assets/images/chicken1.png'),
}, {
  id : 9 ,
  name: 'Pizza Margheritta',
  price: '5.6',
  description: 'extra cheese',
  image: require('../../assets/images/chicken2.png'),
}, {
  id : 10 ,
  name: 'Pizza Margheritta',
  price: '5.6',
  description: 'extra cheese',
  image: require('../../assets/images/chicken3.png'),
}]

export const sandwitchItems = [{
  id : 11 ,
  name: 'Pizza Margheritta',
  price: '5.6',
  description: 'extra cheese',
  image: require('../../assets/images/sandwitch1.png'),
}, {
  id : 12 ,
  name: 'Pizza Margheritta',
  price: '5.6',
  description: 'extra cheese',
  image: require('../../assets/images/sandwitch2.png'),
}, {
  id : 13 ,
  name: 'Pizza Margheritta',
  price: '5.6',
  description: 'extra cheese',
  image: require('../../assets/images/sandwitch3.png'),
}]


export const countryArray = [{
  value: '2',
  label: 'Russia'
}, {
  value: '3',
  label: 'Germany'
}, {
  value: '4',
  label: 'France'
}, {
  value: '5',
  label: 'Italy'
},
{
  value: '6',
  label: 'Spain'
}]

export const LANGUAGES_LIST = [
  {
    label: 'English',
    value: 'en',
  },
  {
    label: 'Persian',
    value: 'fa',
  },
]

export const FIELDS_LENGTH = {
  email: {
    minLength: 10,
    maxLength: 50,
  },
}

const APP_STORE = {
  link: 'https://apps.apple.com/ca/app/',
}
const PLAY_STORE = {
  link:
    'https://play.google.com/store/apps/details?id=com.supercell.clashofclans',
}
export const STORES = OS === 'android' ? PLAY_STORE : APP_STORE

export const bottomSheetSnapPoint = windowH - 587 - getTabBarHeight()

export const persianDigits = '۰۱۲۳۴۵۶۷۸۹'

export const persianMap = persianDigits.split('')

export const CONFIGURATION_REFRESH_TOKEN = {
  grant_type: 'refresh_token',
  client_secret: 'web',
  client_id: 'web',
}

export const onlyStringRegex = /^[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z\]+[' ']+[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z-_]*$/g

export const genderDropdownData = [
  { value: strings.male } ,
  { value: strings.female }
]


export const CUSTOM_PATH =
  'file:///storage/emulated/0/Android/data/com.sporty/files/Pictures/'





export const talksCardsData = [
  {
    name: '',
    title: strings.championAndMemberOfTheNationalTeam,
  },
  {
    name: '',
    title: strings.championAndMemberOfTheNationalTeam,
  },
  {
    name: '',
    title: strings.championAndMemberOfTheNationalTeam,
  },
  {
    name: '',
    title: strings.championAndMemberOfTheNationalTeam,
  },
  {
    name: '',
    title: strings.championAndMemberOfTheNationalTeam,
  },
  {
    name: '',
    title: strings.championAndMemberOfTheNationalTeam,
  },
]

export const sportsList = [
  'select',
  'volleyball',
  'shooting',
  'badminton',
  'running',
  'taekwondo',
]

export const sportsDropdown = [
  'volleyball',
  'shooting',
  'badminton',
  'running',
  'taekwondo',
]

export const daysOfWeek = [
  'Friday',
  'Tursday',
  'Wednsday',
  'Tuesday',
  'Monday',
  'Sunday',
  'Saturday',
]

export const completedExercises = [
  {
    title: strings.exerciseTitle,
    bottomTitle: 'ق.ظ۹:۳۹',
    type: 'completed',
  },
]

export const exercises = [
  {
    title: strings.exerciseTitle,
    bottomTitle: '15 دقیقه',
    type: 'completed',
  },
  {
    title: strings.exerciseTitle,
    bottomTitle: '15 دقیقه',
    type: 'normal',
  },
  {
    title: strings.exerciseTitle,
    bottomTitle: '15 دقیقه',
    type: 'saved',
  },
  {
    title: strings.exerciseTitle,
    bottomTitle: '15 دقیقه',
    type: 'saved',
  },
  {
    title: strings.exerciseTitle,
    bottomTitle: '15 دقیقه',
    type: 'saved',
  },
]


export const exercisePrograms = [
  {
    title: strings.exerciseTitle,
    bottomTitle: '15 دقیقه',
    type: 'checkbox',
  },
  {
    title: strings.exerciseTitle,
    bottomTitle: '15 دقیقه',
    type: 'checkbox',
  },
  {
    title: strings.exerciseTitle,
    bottomTitle: '15 دقیقه',
    type: 'checkbox',
  },
  {
    title: strings.exerciseTitle,
    bottomTitle: '15 دقیقه',
    type: 'checkbox',
  },
  {
    title: strings.exerciseTitle,
    bottomTitle: '15 دقیقه',
    type: 'checkbox',
  },
]

export const myProgram = [
  {
    title: strings.exerciseTitle,
    bottomTitle: '15 دقیقه',
    type: 'program',
  },
  {
    title: strings.exerciseTitle,
    bottomTitle: '15 دقیقه',
    type: 'program',
  },
  {
    title: strings.exerciseTitle,
    bottomTitle: '15 دقیقه',
    type: 'program',
  },
  {
    title: strings.exerciseTitle,
    bottomTitle: '15 دقیقه',
    type: 'program',
  },
  {
    title: strings.exerciseTitle,
    bottomTitle: '15 دقیقه',
    type: 'program',
  },
]

export const markedExercises = [
  {
    title: strings.exerciseTitle,
    bottomTitle: '15 دقیقه' ,
    type: 'markedExercises' ,
  },
  {
    title: strings.exerciseTitle,
    bottomTitle: '15 دقیقه',
    type: 'markedExercises',
  },
  {
    title: strings.exerciseTitle ,
    bottomTitle: '15 دقیقه',
    type: 'markedExercises',
  },
]

export const dropdownUserType = [
  { value: strings.athlete },
  { value: strings.trainer }
]

export const periodTimeDropdown = [
  {
    value: strings.Aweek,
  },
  {
    value: strings.Ayear,
  },
  {
    value: strings.Amonth,
  },
]

export const exerciseLevels = [
  {
    value: strings.simple,
  },
  {
    value: strings.medium,
  },
  {
    value: strings.hard,
  },
]

export const notifications = [
  {
    title: 'لورم ایپسوم ساختگی',
    date: '2020/07/08',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation'
  },
  {
    title: 'لورم ایپسوم ساختگی',
    date: '2020/06/05',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation'
  },
  {
    title: 'لورم ایپسوم ساختگی',
    date: '2020/04/21',
    text:
       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation'
  },
  {
    title: 'لورم ایپسوم ساختگی',
    date: '2020/04/20',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation'
  },
]

export const records = [
  {
    recordValue: '۳۴:۱۲',
    date: '۹۹/۰۹/۲۶',
    detail:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.چاپگر ها و متون بلکه روزنامه و مجله در ستون و سطر آنچنان لازم استو و برای شرایط فعلی',
  },
  {
    recordValue: '۳۴:۱۲',
    date: '۹۹/۰۹/۲۶',
    detail:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.چاپگر ها و متون بلکه روزنامه و مجله در ستون و سطر آنچنان لازم استو و برای شرایط فعلی',
  },
  {
    recordValue: '۳۴:۱۲',
    date: '۹۹/۰۹/۲۶',
    detail:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.چاپگر ها و متون بلکه روزنامه و مجله در ستون و سطر آنچنان لازم استو و برای شرایط فعلی',
  },
]

export const exerciseFiles = [
  {
    time: '۳ دقیقه',
    name: 'فایل صوتی ارسال شده ',
  },
  {
    time: '۳ دقیقه',
    name: 'فایل صوتی ارسال شده ',
  },
  {
    time: '۳ دقیقه',
    name: 'فایل صوتی ارسال شده ',
  },
]

export const readMoreOlympici =
  'با اپلیکیشن "المپیکی"، همواره احساسی نو و متفاوت از هدف گذاری و برنامه ریزی را بصورت حرفه ای و هوشمند تجربه خواهید کرد زیرا همه چیز بر پایه رسیدن به هدف شما طراحی و برنامه ریزی شده است. گرافیک اپلیکیشن المپیکی با حفظ ارتباط معنادار با عناصر طبيعی، دسترسی آسان به تمامی امکانات، داشبود شخصی، پرداخت های مالی و بخش نمودار های ارزیابی تمرینات و مسابقات بصورت حرفه ای، حفظ کامل حریم شخصی کاربر و بالاتر از همه، ارائه خدمات عالی توسط مربیان خانم و آقا بصورت حرفه ای، در جهت شکوفایی استعداد ورزشکاران، انتقال تجربیات مربیان و ایجاد رابطه ای پایدار بین مربیان و ورزشکارن گرامی است.'

export const DEFAULT_LOGIN_CONFIG = {
  client_id: 'web',
  client_secret: 'web',
  grant_type: 'password',
}
