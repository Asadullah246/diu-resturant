import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import React, { createContext, useState, useEffect } from 'react';
import { useSignInWithGoogle, useSignOut } from 'react-firebase-hooks/auth';
import app from '../firebase.init';





export const AuthContext = createContext()
const auth = getAuth(app)

const UserContext = ({children}) => {
    const [signInWithGoogle, gUser, gSignInLoading, gSignInError] = useSignInWithGoogle(auth);  
    const [signOut, gSignOutLoading, gSignOutError] = useSignOut(auth);
    const [user, setUser] = useState({})


    const createUser = (email, password) => {
        // setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });;
      };
      const updateUser = (userInfo) => {
        // setLoading(true);
          return updateProfile(auth.currentUser, userInfo);
      }

      function signIn (email,password){
        signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
       // Signed in 
         const user = userCredential.user;
                // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          });

      }

    const handleSignOutWithGoogle =async () => {
        await signOut()
        setUser(false)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (createUser) => {
          setUser(createUser);
        });
        return () => unsubscribe();
      }, []);

    

    const props = {
        user,
        createUser,
        updateUser,
        signInWithGoogle,
        handleSignOutWithGoogle,
        auth,
        signIn
    }
    return <AuthContext.Provider value = {props}>
        {children}
    </AuthContext.Provider>
};

export default UserContext;
