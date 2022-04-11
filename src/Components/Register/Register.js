import React from 'react';
import './Register.css'

const Register = () => {
    return (
        <div>
            <p>Please Register</p>
            <form >
                <input type="text" name="" id="" placeholder='Your Name'/>
                <br />
                <input type="email" name="" id="" placeholder='Input Your Email'/>
                <br />
                <input type="password" name="" id="" placeholder='Input Your Password'/>
                <br />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;