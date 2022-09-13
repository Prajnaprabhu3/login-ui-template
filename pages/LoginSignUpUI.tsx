import styles from '../styles/LoginSignUpUI.module.scss'
import ButtonOne from '../components/ButtonOne'
import ButtonTwo from '../components/ButtonTwo'
import Logo from '../components/Logo'
import InputField from '../components/InputField';
import { FcGoogle } from 'react-icons/fc';
import Link from 'next/link';
import { createPortal } from 'react-dom';
// import Carousel from './Carousel/Carousels'
import SignIn from '../components/SignIn/SignIn'
import RightSection from '../components/RightSection'


const LoginSignUpUI = () => {
  return (
    <div className='flex bg-white items-center justify-center w-full h-screen p-2'>    
    {/* left section  */}
  <SignIn/>

   {   /* right section  */}
   <RightSection/>
   

    </div>
  )
}

export default LoginSignUpUI

