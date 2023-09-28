import React, { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { app } from '../firebase'
const auth = getAuth(app);
const Login = () => {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const signin = () => {
        signInWithEmailAndPassword(auth,email,password).then(()=>alert("User signed in successfully")).catch(()=>console.log("Key does not match"))
    };
    return (
        <>
        <br></br>
            <label>Enter Email Address</label>
            <input value={email} onChange={e => setemail(e.target.value)} type="email" />
            <label>Enter Password</label>
            <input value={password} onChange={e => setpassword(e.target.value)} type="password" />
            <button onClick={signin}>Log In</button>
        </>
    )
}

export default Login
