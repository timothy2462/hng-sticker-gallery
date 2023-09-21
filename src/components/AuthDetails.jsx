import React, {useEffect, useState} from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase-config'

const AuthDetails = () => {
    const [authUser,setAuthUser] = useState(null)
    useEffect(()=>{
        const listen = onAuthStateChanged(auth, (user)=>{
            if(user){
                setAuthUser(user)
            } else {
                setAuthUser(null)
            }
        })
    }, [])
  return (
    <div>
      {authUser ? <p>Signed in </p>  : <p>Signed out</p>}
    </div>
  )
}

export default AuthDetails
