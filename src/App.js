import React, { useEffect, useState } from 'react'
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { app } from './firebase';

const auth=getAuth(app)

function App() {
  const [usr, setuser] = useState(null)
  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      if(user){
        console.log("Hello ",user)
        setuser(user)
      }
      else{
        console.log("You are Logged out")
        setuser(null)
      }
    })
  },[])
  return (
    <>
    { !usr?<>
      <Signup/>
      <Login/>
    </>:
    <>
    <h1>Hello {usr.email}</h1>
    <button onClick={()=>signOut(auth)}>Sign Out</button>
    </>
    }
    </>
  )
}

export default App