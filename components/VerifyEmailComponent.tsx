import Link from 'next/link'
import styles from '../styles/VerifyEmailComponent.module.scss'
import ButtonTwo from './ButtonTwo'
import Footer from './Footer'

const VerifyEmailComponent = () => {
  return (
    <div className="flex justify-center items-center max-h-4xl text-center py-28">
  
   <div className="flex-col justify-evenly bg-white drop-shadow-sm max-w-md h-full py-8 px-10 rounded-lg">

    <div className="m-1 mb-6">
    <h2 className="text-2xl font-semibold mb-1">Verify your email</h2>
    <p className={`text-sm text-gray-500 font-normal w-2/3 mx-auto  ${styles.verify} `}>We have sent a code to your email <span className="text-black">alesiaka******@mail.com</span> </p>
    </div>

    <div className="flex justify-evenly items-center text-center mb-8">
        <input type="text"  className={styles.box} />
        <input type="text"  className={styles.box} />
        <input type="text"  className={styles.box} />
        <input type="text"  className={styles.box} />
        <input type="text"  className={styles.box} />
    </div>

 
    <Link href="/AccountHelp">
       <div className="flex justify-center cursor-pointer bg-blue-700 text-white w-6/7  px-14 py-3 mx-auto rounded-lg font-medium text-sm ">
       Verify email
      </div>
      </Link> 

    <div className="text-gray-500 font-light text-sm mt-5">
        Resend code in <span className="text-black font-medium">59:00</span>
    </div>

   </div>


<div>

</div>
   




   </div>
  )
}

export default VerifyEmailComponent