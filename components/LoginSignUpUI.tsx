import styles from '../styles/LoginSignUpUI.module.scss'
import Button from './Button'
import Logo from './Logo'
import Password from '../components/Password/Password'
import InputField from './InputField';
import { FcGoogle } from 'react-icons/fc';
import Link from 'next/link';
import { createPortal } from 'react-dom';

const LoginSignUpUI = () => {
  return (
    <div className='flex bg-white items-center justify-center w-full h-screen p-2'>
       
    {/* left section  */}
    <div className='bg-white max-w-5xl h-full w-4/5'>
        {/* overpay logo */}
        <Logo/>

        {/* next section  */}
        <div className='flex-col items-center justify-center m-6 p-8'>
        {/* row one - Sign in to Overpay Button */}
        <div className='flex-col items-center justify-between  text-center'>
            <div className='font-bold text-4xl'>Sign in to Overpay</div>
            <div className='text-md text-gray-400 font-light py-4 '>Send, spend and save smarter</div>
        </div>

        {/* row two - login options  */}
        <div className='flex-col items-center justify-between py-5 mt-1 text-center'>
            {/* Sign in with google button  */}
            <Button buttonText='Sign In with Google' prefixLogo={<FcGoogle/>} />

            {/* or with email component  */}
            <div className={`${styles.horizontal} py-3`}>
                <h2 className={styles.line}><span className={`${styles.text} text-gray-400 font-light `} >or with email</span> </h2>
            </div>

            {/* user-email input */}
           <div className='flex-col mt-8 items-center text-center'>
           {/* <InputField/> */}
           <input type="text" className="bg-white border border-gray-300 text-white-100 text-md font-light rounded-lg w-2/3 p-3 py-3" placeholder="Username or Email" required />
            {/* <Password/> */}
            <input type="text" className="bg-white border border-gray-300 text-white-100 text-md font-light rounded-lg w-2/3 p-3 py-3" placeholder="Username or Email" required />
           
           {/* Remember me  & forfot password*/}
           <div className='flex min-w-3xl mx-auto bg-green-200'>
            {/* Remember me  */}
          <div className=''>
          <input type="checkbox" className="rounded-full"  /> Remember me
          </div>

        {/* Forgot password  */}
         <div>
            <Link href="#"> Forgot Password </Link>
        </div>
           </div>

           </div>
        </div>


        {/* row three - Signin button & Signup option  */}
        <div>

        </div>


    </div>
    </div>


    {   /* right section  */}
    <div className='bg-blue-600 max-w-4xl h-full w-3/5'>

    </div>


    </div>
  )
}

export default LoginSignUpUI

