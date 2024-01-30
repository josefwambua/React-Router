import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'

import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contactus from './components/Contact/Contactus.jsx'
import User from './components/User/User.jsx'
import Github,{githubInfoLoader} from './components/Github/Github.jsx'

// using router to direct different routes to different component files
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}> // provides the constant layouts i.e header & footer 
      <Route path='' element={<Home />}/> // defining the home root.. the path is empty to allow navigations of other pages
      <Route path='about' element={<About />}/> //path having about to allow navigation to about page
      <Route path='Contact' element={<Contactus />}/>
      <Route path='user/' element={<User />}>
        <Route path=':userid' element={<User />} />     </Route>
    <Route path='*' element={<div>Not Found</div>} /> //404 PAGE
    <Route 
    loader={githubInfoLoader}
    path='github' element={<Github />}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
