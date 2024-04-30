
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  
} from "firebase/auth";
import app from "../../../firebase/firebase.config"
import { createContext, useEffect, useState } from "react";


export const AuthContext = createContext(null);


const AuthProvider = ({ children }) => {

  const auth = getAuth(app);

  const [loading,setLoading]= useState(true)


  const [user, setUser] = useState(null);

 

  const signInUser = (email, password) => {

    setLoading(true)

    return signInWithEmailAndPassword(auth, email, password)
   
  };
  const signUpUser = (email, password) => {
    setLoading(true)

    return createUserWithEmailAndPassword(auth, email, password)
   
  };
  const logOut = () => {

    setLoading(true)

    return signOut(auth)
   
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, user => {
  
      
        setUser(user);

        setLoading(false);
      
    });
    
    return () => {
        unSubscribe();
      };
    }, []);
  
      if(loading)
      {
        return <span className="loading loading-spinner loading-lg"></span>
      }
  const authInfo = { user , signUpUser ,signInUser , logOut ,loading ,setLoading};

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
