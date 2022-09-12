import ButtonOne from '../components/ButtonOne'
import ButtonTwo from '../components/ButtonTwo'
import { FcGoogle } from 'react-icons/fc';
import Link from 'next/link';
import styles from '../styles/SignIn.module.scss'
import RightSection from '../components/RightSection';


const SignUp = () => {
  return (
    <div className='flex bg-white items-center justify-center w-full h-screen p-2'>
       <RightSection/>
    <div className=' max-w-5xl h-full w-4/5'>
  

    {/* next section  */}
    <div className='flex-col items-center justify-center mt-4 pt-6'>
    {/* row one - Sign in to Overpay Button */}
    <div className='flex-col items-center justify-between  text-center'>
        <div className='font-bold text-4xl'>Sign up for an account</div>
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

       {/* name & surname  */}
       <input type="text" className="bg-white border border-gray-300 text-white-100 text-md font-light rounded-lg max-w-xl p-3 py-3" placeholder="Username or Email" required />
       <input type="text" className="bg-white border border-gray-300 text-white-100 text-md font-light rounded-lg max-w-xl p-3 py-3" placeholder="Username or Email" required />

       {/* <InputField/> */}
       <input type="text" className="bg-white border border-gray-300 text-white-100 text-md font-light rounded-lg w-2/3 p-3 py-3" placeholder="Username or Email" required />
        {/* <Password/> */}
        <input type="text" className="bg-white border mt-4 border-gray-300 text-white-100 text-md font-light rounded-lg w-2/3 p-3 py-3" placeholder="Password" required />
       
       {/*agreement*/}
     <div className='flex w-2/3  mx-auto mb-7 mt-5 font-regular text-gray-500'>
      <p>By creating an account, you agreeing to our <span className='text-black font-semibold'>Privacy Policy</span>, and <span className='text-black font-semibold'> Electronics Communication Policy.</span></p>
     </div>

       </div>
    </div>


    {/* row three - Signin button & Signup option  */}
    <div className='flex-col items-center mt-0 py-0 text-center cursor-pointer'>
      <ButtonTwo buttonText='Sign up' customClass="blueButton"/>

      {/* Dont have an account stuff?  */}
      <div className='m-8'>
       <Link href="/LoginSignUpUI">
        <div> <p className='font-light'>Already have an account? <span className='font-semibold'>Sign In</span> </p></div>
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

   
</div>

)}

export default SignUp