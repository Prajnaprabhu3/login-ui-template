import React from 'react'
import Footer from '../components/Footer'
import HTwo from '../components/HTwo'
import LoginPageComponent from '../components/LoginPageComponent'

const LoginPage = () => {
  return (
   <div className="bg-gray-50">
    <HTwo/>

    <LoginPageComponent/>

    <Footer/>
   </div>
  )
}

export default LoginPage