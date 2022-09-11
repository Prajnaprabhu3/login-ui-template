import Button  from '../components/Button/Button'
import Head from 'next/head'
import Image from 'next/image'
import logo from  '../public/assets/logo.png'
import logo2 from '../public/assets/logo2.png'
import styles from '../styles/Home.module.css'
import { FcGoogle } from 'react-icons/fc';





export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  bg-gray-200 mb-0">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

<main className="flex items-center justify-center w-full h-screen flex-1 px-10 text-center bg-white ">
{/* sign-in sing-up section */}
<div className={`flex flex-col max-w-5xl bg-gray-100 w-2/3 ${styles.signinSignup}`}>
  
 <div className="flex p-7 text-left font-bold items-center ">
  <div className={styles.logo}>
    
    <div className={styles.semiCircleOne}></div>
    <div className={styles.semiCircleTwo}></div>
  </div>
 <div className="font-semibold text-xl mx-2">Overpay.</div>
 </div>



<div className='RowOne py-10 flex flex-col justify-center text-center'>
<h2 className="text-4xl font-bold mb-5">Sign in to Overpay</h2>
<p className="text-slate-500 font-light">Send, spend and save smarter</p>
</div>

<div className="RowTwo">
      {/* <Button className={`{styles.google}`}  size="medium">Sign in with Google</Button> */}
 <div><Button buttonText="Sign in with Google" prefixLogo={<FcGoogle/>}/></div>
 <div className={`flex justify-center text-center ${styles.horizontalLine}`}>
 <div className='border w-40 border-gray-200 inline-block mt-10'></div>
 <span className='mx-4'>or with email</span>
 <div className='border w-40 border-gray-200 inline-block mt-10'></div>
 </div>
</div>
  

</div>




{/* Image section  */}
<div className={`flex flex-col max-w-5xl bg-blue-700 text-white w-1/2 h-3/4 py-80 ${styles.imageSection}`}>ejejeje</div>
 </main>



    
    </div>
  )
}

