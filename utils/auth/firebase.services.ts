import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getAuth, isSignInWithEmailLink, signInWithEmailLink } from "firebase/auth";
import { firebaseConfig } from "./firebase";
import { useRouter } from 'next/router';


export const signInEmailLink = async (email: string, actionUrl: string): Promise<any> => {
    const actionCodeSettings = {
        url: actionUrl,
        handleCodeInApp: true
    };
    const dataModel = {
        error: false,
        success: false,
    }
    try {
        const data = await firebase.auth().sendSignInLinkToEmail(email, actionCodeSettings)
        window.localStorage.setItem('emailForSignIn', email);
        dataModel.success = true;
        return dataModel;
    } catch (e) {
        console.error('Error sending email link:', e);
        dataModel.error = true;
        return dataModel;
    }

}


export const checkSignInWithEmailLink = () => {
    const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
    const auth: any = getAuth(app);
    if (isSignInWithEmailLink(auth, window.location.href)) {
        // Additional state parameters can also be passed via URL.
        // This can be used to continue the user's intended action before triggering
        // the sign-in operation.
        // Get the email if available. This should be available if the user completes
        // the flow on the same device where they started it.
        let email: any = window.localStorage.getItem('emailForSignIn');
        if (!email) {
            // User opened the link on a different device. To prevent session fixation
            // attacks, ask the user to provide the associated email again. For example:
            email = window.prompt('Please provide your email for confirmation');
        }
        // The client SDK will parse the code from the link for you.
        signInWithEmailLink(auth, email, window.location.href)
            .then((result) => {
                // Clear email from storage.
                window.localStorage.removeItem('emailForSignIn');
                window.location.href = "http://localhost:3001/creator/create/post"
                // You can access the new user via result.user
                // Additional user info profile not available via:
                // result.additionalUserInfo.profile == null
                // You can check if the user is new or existing:
                // result.additionalUserInfo.isNewUser
            })
            .catch((error) => {
                // Some error occurred, you can inspect the code: error.code
                // Common errors could be invalid email and invalid or expired OTPs.

                console.error(error);
            });
    }
}

export const SignOut = () => {
    const router = useRouter();
    firebase.auth().signOut().then((result) => {
        router.push("/auth")
    }).catch((error) => {
        // Build a global error handler
        console.error(error);
    })
}