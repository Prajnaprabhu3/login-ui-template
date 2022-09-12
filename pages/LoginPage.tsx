import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import LoginPageComponent from '../components/LoginPageComponent'

const LoginPage = () => {
  return (
   <div className="bg-gray-50">
    <Header/>

    <LoginPageComponent/>

    <Footer/>
   </div>
  )
}

export default LoginPage