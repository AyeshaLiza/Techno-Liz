import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../Config/Firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
 const [user, setUser] = useState(null)
 const [loading, setLoading] = useState(true)

const signUp = (email, password) =>{
 setLoading(true)
 return createUserWithEmailAndPassword(auth, email, password)
}
 const googleSignIn = (value) => {
   return signInWithPopup(auth, googleProvider)
 };

 const signIn = (email, password) =>{
  setLoading(true)
  return signInWithEmailAndPassword(auth, email, password)
 } 

useEffect(() =>{
const unsubscribe =  onAuthStateChanged(auth, currentUser =>{
  const userEmail = currentUser?.email  ||  user?.email
  const loggedEmail = {email: userEmail}
  setUser(currentUser);
  // console.log('current user', currentUser);
  setLoading(false)
 })
 return () =>{
  return unsubscribe();
 } 
} ,[])


const logOut = async() => {
  setLoading(true)
  return signOut(auth);
}
// 
const profileInfo = (name, photo)=>{
  return updateProfile(auth.currentUser,{
    displayName: name,
    photoURL: photo
  })
}

 const authInfo ={
  signUp, loading, user, signIn, logOut, profileInfo, googleSignIn
 }
 return (
  <AuthContext.Provider value={authInfo}>
   {children}
  </AuthContext.Provider>
 );
};

export default AuthProvider;