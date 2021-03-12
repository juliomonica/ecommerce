import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBgXf-bPQqBZYIpNMmqxlzm-IARp6w-Dlk",
    authDomain: "ecommerce-db-cae91.firebaseapp.com",
    projectId: "ecommerce-db-cae91",
    storageBucket: "ecommerce-db-cae91.appspot.com",
    messagingSenderId: "664050184835",
    appId: "1:664050184835:web:dbd2c3725d2fff4500a1b6",
    measurementId: "G-BLBYZQSP21"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    
    if(!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creatign user', error.message);
        }
    }
    return userRef;
};


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;