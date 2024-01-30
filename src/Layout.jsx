import React from 'react'
import {Outlet} from 'react-router-dom' // for creating constant components eg header & footer and inside having different sections
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

const Layout = () => {
  return (
    <>
    <Header />
    <Outlet/>
    <Footer />
    </>
  )
}

export default Layout
