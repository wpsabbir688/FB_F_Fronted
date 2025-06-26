import React from 'react'
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

import LoginPage from './page/LoginPage';
import Star from './page/Star';


function App() {


    const router = createBrowserRouter(
    createRoutesFromElements(
      <Route >
        <Route path='/' element={<Star/>}/>
        <Route path='/login' element={<LoginPage/>}/>

      </Route>
    )
  );


  return (
    <RouterProvider router={router}/>
  )
}

export default App
