import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../../../firebase.init'; 

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

const googleProvider = new GoogleAuthProvider()
const signInWithGoogle = ()=>{
    return signInWithPopup(auth, googleProvider)
}

  const signInUser = (email, password)=>{
    return signInWithEmailAndPassword(auth, email, password)
  }

  const updateUser = (updatedUser)=>{
    return updateProfile(auth.currentUser, updatedUser)
  }



const logOutUser = ()=>{
    return signOut(auth)
}

useEffect( ()=>{
const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
setUser(currentUser)

return ()=>{
    unsubscribe();
}

})


},[])


  const authInfo = {
    user,
    setUser,
    createUser,
    signInWithGoogle,
    signInUser,
    updateUser,
    logOutUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
