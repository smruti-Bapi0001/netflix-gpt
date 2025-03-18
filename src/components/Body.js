import React, { useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Browse from './Browse';

import { useDispatch } from 'react-redux';
import Login from './Login';


const Body = () => {
  const dispatch = useDispatch();
  
  const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Login />
    },
    {
        path: "/browse",
        element: <Browse />
    }
  ]);

  // useEffect(()=> {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       // User is signed in, see docs for a list of available properties
  //       // https://firebase.google.com/docs/reference/js/auth.user
  //       const {uid, email, displayName, photoURL} = user.uid;
  //       dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}));        
  //     } else {
  //       dispatch(removeUser());        
  //     }
  //   });
  // }, []);

  return (
    <div>
        <RouterProvider router={appRouter} />
    </div>
  );
}

export default Body