import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const authDomain = process.env.NEXT_PUBLIC_AUTH_DOMAIN;
const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;
const storageBucket = process.env.NEXT_PUBLIC_STORAGE_BUCKET;
const messagingSenderId = process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID;
const appId = process.env.NEXT_PUBLIC_APP_ID;
const measurementId = process.env.NEXT_PUBLIC_MEASUREMENT_ID;


export const firebaseConfig = {
    apiKey,
    authDomain,
    projectId,
    storageBucket,
    messagingSenderId,
    appId,
    measurementId
};

// Initialize Firebase
export default function initFirebase() {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
}