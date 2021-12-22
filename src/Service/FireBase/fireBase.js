import * as initializeApp from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyB8khUTIhmfO4ZKAPJBCPNxXYfckl_sJZ0",
    authDomain: "app-allblack.firebaseapp.com",
    projectId: "app-allblack",
    storageBucket: "app-allblack.appspot.com",
    messagingSenderId: "445890956258",
    appId: "1:445890956258:web:7c786d06e355db4c4107bb"
  };

  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app)