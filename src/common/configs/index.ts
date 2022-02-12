import { ms } from '../../helper/index'

export const firebaseConfig = {
  android: {
    appId: '1:1015801589496:android:56b250bb80e9a13cb6150d',
    projectId: 'twall-6cf58',
    apiKey: 'AIzaSyBSDzkQF844TusYZ5WCq9UHNCthbRj8H9k',
    storageBucket: 'gs://twall-6cf58.appspot.com',
    messagingSenderId: '1015801589496',
  },
  ios: {
    appId: '1:1015801589496:ios:c99c3963110bb012b6150d',
    projectId: 'twall-6cf58',
    apiKey: 'AIzaSyBSDzkQF844TusYZ5WCq9UHNCthbRj8H9k',
    storageBucket: 'gs://twall-6cf58.appspot.com',
    messagingSenderId: '1233.firebase.storage.com',
  },
}

export const stopwatchOptions = {
  container: {
    borderRadius: 5,
  },
  text: {
    fontSize: ms(18),
    color: '#FFF',
  },
}
