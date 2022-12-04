import { signInWithGooglePopup, createUserDocFromAuth } from '../../utils/firebase/firebase.utils'

const SignIn = () =>
{
    const logGoogleUser = async () =>
    {
        const { user } = await signInWithGooglePopup();
        console.log(user);
        const userDocRef = await createUserDocFromAuth(user);
    }
    return (
        <div>
            <h1>Sign in page</h1>
            <button onClick={logGoogleUser}>Sign in With Google</button>
        </div>
    )
}

export default SignIn;