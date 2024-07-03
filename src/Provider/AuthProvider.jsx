import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import auth from '../config/Firebase.config'
import axios from 'axios';

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {

      const [user, setUser] = useState(null);
      const [loading, setLoading] = useState(true);

      // Create user
      const createUser = (email, password) => {
            setLoading(true)
            return createUserWithEmailAndPassword(auth, email, password)
      }

      // update user
      const userUpdate = (name, photoUrl) => {
            setLoading(true)
            return updateProfile(auth.currentUser, {
                  displayName: name,
                  photoURL: photoUrl
            })
      }

      // sign in
      const logIn = (email, password) => {
            setLoading(true)
            return signInWithEmailAndPassword(auth, email, password)
      }

      // log in with google
      const googleLogin = () => {
            setLoading(true)
            return signInWithPopup(auth, googleProvider)
      }

      // log in with github
      const githubLogin = () => {
            setLoading(true)
            return signInWithPopup(auth, gitHubProvider)
      }

      // log out
      const logOut = () => {
            setLoading(true)
            setUser(null)
            return signOut(auth)
      }

      useEffect(() => {
            const unSubscribe = onAuthStateChanged(auth, currentUser => {

                  const loggedUser = { email: currentUser?.email || user?.email }

                  console.log('Logged in user', currentUser);
                  setUser(currentUser)
                  setLoading(false)

                  if (currentUser) {
                        axios.post('http://localhost:5000/jwt', loggedUser, { withCredentials: true })
                              .then(res => {
                                    console.log(res.data);
                              })
                  }
                  else {
                        axios.post('http://localhost:5000/logout', loggedUser, { withCredentials: true })
                              .then(res => {
                                    console.log(res.data);
                              })
                  }
            })

            return () => {
                  unSubscribe()
            }
      }, [])

      const authInfo = {
            user,
            createUser,
            userUpdate,
            logIn,
            googleLogin,
            githubLogin,
            logOut,
            loading,
            setLoading
      }

      return (
            <AuthContext.Provider value={authInfo}>
                  {children}
            </AuthContext.Provider>
      );
};

AuthProvider.propTypes = {
      children: PropTypes.node
};

export default AuthProvider;