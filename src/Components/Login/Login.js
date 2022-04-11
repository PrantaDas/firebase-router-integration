import React from 'react';
import useFirebase from '../../Hooks/useFirebase';

const Login = () => {

    const {signInWithGoogle}=useFirebase();

    return (
        <div>
            <p>Please Login</p>
            <div style={{margin:'20px'}}>
                <button onClick={signInWithGoogle}>Login With Google</button>
            </div>
            <form >
                <input type="email" name="" id="" placeholder='Input Your Email'/>
                <br />
                <input type="password" name="" id="" placeholder='Input Your Password'/>
                <br />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;