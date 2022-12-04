import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

import
{
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyA_z-60SSX3Ca5maASfe8eYFJ14BUejqTM",
    authDomain: "crown-clothing-db-99020.firebaseapp.com",
    projectId: "crown-clothing-db-99020",
    storageBucket: "crown-clothing-db-99020.appspot.com",
    messagingSenderId: "138759834682",
    appId: "1:138759834682:web:549ef89cb33310d9af7903"
};


const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocFromAuth = async (userAuth) =>
{
    const { uid, displayName, email } = userAuth;
    console.log('called')
    const userDocRef = doc(db, 'users', uid);
    console.log(userDocRef);
    const userSnapshot = await getDoc(userDocRef);
    if (!userSnapshot.exists())
    {
        try
        {
            const createdDate = new Date();
            await setDoc(userDocRef, { displayName, email, createdDate });
        } catch (error)
        {
            console.log('Error' + error)
        }
    }
    return userDocRef;
}