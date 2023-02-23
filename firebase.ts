// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA29GA0L1u7du_NBjgu0_YvaeELZCeBhM8",
    authDomain: "netflix-clone-9325f.firebaseapp.com",
    projectId: "netflix-clone-9325f",
    storageBucket: "netflix-clone-9325f.appspot.com",
    messagingSenderId: "656107705020",
    appId: "1:656107705020:web:a65b1a52d433390a38f6b9"
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }