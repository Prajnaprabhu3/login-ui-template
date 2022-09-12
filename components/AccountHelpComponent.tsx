import Link from 'next/link'
import React from 'react'
import styles from '../styles/VerifyEmailComponent.module.scss'

const AccountHelpComponent = () => {
  return (
    <div className="flex justify-center items-center max-h-4xl text-center py-24">
  
   <div className="flex-col justify-evenly bg-white drop-shadow-sm max-w-sm h-full py-8 px-10 rounded-lg">

    <div className=" flex-colm-1 mb-6">
    <h2 className="text-2xl font-semibold mb-1">Need help with your Account?</h2>
    <p className={`text-sm text-gray-500 font-light w-6/7 min-w-7xl mx-auto mt-2 ${styles.help}`}>Enter the email address associated with your account and we will send you a link to reset your password. </p>
    </div>

    <div className="flex w-6/7 justify-evenly text-center mb-8">
    <input type="text" className="bg-white border border-gray-300 text-white-100 text-md font-light rounded-lg w-5/6 px-3 py-2" placeholder="Username or Email" required />
       
    </div>

 
    <Link href="/LoginPage">
       <div className="flex justify-center cursor-pointer bg-blue-700 text-white w-6/7  px-14 py-3 mx-auto rounded-lg font-medium text-sm ">
       Send Link
      </div>
      </Link> 

    <div className="font-medium text-sm mt-5">
        Forgot your email?
    </div>


   </div>


<div>

</div>
   




   </div>
  )
}

export default AccountHelpComponent