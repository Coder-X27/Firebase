import React, { useState } from 'react'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import { app } from '../firebase'
const auth = getAuth(app);

const Signup = () => {
    const signupUser = () => {
        createUserWithEmailAndPassword(
            auth,
            email,
            password
        ).then(()=>alert('sucess'))
    };
    const [email, setemail] = useState();
    const [password, setpassword] = useState();
    return (
        <>
            <label>Enter Email Address</label>
            <input value={email} onChange={e => setemail(e.target.value)} type="email" />
            <label>Enter Password</label>
            <input value={password} onChange={e => setpassword(e.target.value)} type="password" />
            <button onClick={signupUser}>Submit</button>
        </>
    )
}

export default Signup
