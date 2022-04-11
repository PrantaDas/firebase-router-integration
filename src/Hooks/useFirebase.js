import { useEffect, useState } from "react"
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase.init";
import { useNavigate } from "react-router-dom";


const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();


const useFirebase = () => {

    const navigate = useNavigate();


    const [user, setUser] = useState({});


    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                setUser(user);
                console.log(user);
                navigate('/');
            })
            .catch((error) => {
                console.log(user);
            })
    }

    const handleSignout = () => {
        signOut(auth)
            .then(() => {
                setUser('');
                navigate("/");
            })
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user);
        })
    }, [])


    return { user, signInWithGoogle, handleSignout };

}

export default useFirebase;