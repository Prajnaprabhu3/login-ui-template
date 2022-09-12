import ButtonOne from '../ButtonOne'
import ButtonTwo from '../ButtonTwo'
import Logo from '../Logo'
import InputField from '../InputField';
import { FcGoogle } from 'react-icons/fc';
import Link from 'next/link';
import styles from '../../styles/SignIn.module.scss'


const LeftSection = () => {
  return (
    <div className=' max-w-5xl h-full w-4/5'>
    {/* overpay logo */}
    <Logo/>

    {/* next section  */}
    <div className='flex-col items-center justify-center mt-4 pt-6'>
    {/* row one - Sign in to Overpay Button */}
    <div className='flex-col items-center justify-between  text-center'>
        <div className='font-bold text-4xl'>Sign in to Overpay</div>
        <div className='text-md text-gray-400 font-light py-4 '>Send, spend and save smarter</div>
    </div>

    {/* row two - login options  */}
    <div className='flex-col items-center justify-between mt-1 text-center'>
        {/* Sign in with google button  */}
        <ButtonOne buttonText='Sign In with Google' prefixLogo={<FcGoogle/>} />

        {/* or with email component  */}
        <div className={`${styles.horizontal} py-3`}>
            <h2 className={styles.line}><span className={`${styles.text} text-gray-400 font-light `} >or with email</span> </h2>
        </div>

        {/* user-email input */}
       <div className='flex-col mt-8 items-center text-center'>
       {/* <InputField/> */}
       <input type="text" className="bg-white border border-gray-300 text-white-100 text-md font-light rounded-lg w-2/3 p-3 py-3" placeholder="Username or Email" required />
        {/* <Password/> */}
        <input type="text" className="bg-white border mt-4 border-gray-300 text-white-100 text-md font-light rounded-lg w-2/3 p-3 py-3" placeholder="Password" required />
       
       {/* Remember me  & forfot password*/}
       <div className="flex w-2/3 mx-auto m-5 justify-between ">
        {/* Remember me  */}
      <div className=''>
      <input type="checkbox" className="rounded-full"/> Remember me
      </div>

    {/* Forgot password  */}
     <div className='text-blue-600'>
        <Link href="#"> Forgot Password? </Link>
    </div>
       </div>

       </div>
    </div>


    {/* row three - Signin button & Signup option  */}
    <div className='flex-col items-center mt-0 py-0 text-center cursor-pointer'>
      <Link href="EmailVerify">
      <ButtonTwo buttonText='Sign in' customClass="blueButton"/>
      </Link>

      {/* Dont have an account stuff?  */}
      <div className='m-8'>
       <Link href="/SignUp">
        <div> <p className='font-light'>Don't have an account? <span className='font-semibold'>Sign Up</span> </p></div>
       </Link>
      </div>
    </div>
</div>

{/* third section  */}
  {/* row four- privacy and thing  */}
  <div className='flex justify-between mt-0 py-0 mx-10 text-gray-500'>
       <p>Privacy Policy</p>
       <p>Copyright 2022</p>

    </div>

  

</div>
  )
}

export default LeftSection