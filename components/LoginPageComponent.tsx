import Link from 'next/link'
import styles from '../styles/VerifyEmailComponent.module.scss'

const LoginPageComponent = () => {
  return (
    <div className="flex justify-center items-center max-h-4xl text-center py-44">
  
    <div className="flex-col justify-evenly bg-white drop-shadow-sm max-w-lg h-full py-10 px-32 rounded-lg">
 
     <div className=" flex-colm-1 mb-6 max-w-lg">
     <h2 className="text-2xl font-semibold mb-1 px-2">Hi,  John Doe</h2>
     <p className={`text-sm text-gray-500 font-light  min-w-7xl mx-auto mt-2 ${styles.loggedIn}`}>You’re logged in. Well done!</p>
     </div>
 
     
  
     <Link href="/">
        <div className="flex justify-center cursor-pointer bg-blue-700 text-white w-6/7 px-14 py-3 rounded-lg font-medium text-sm ">
        Log out
       </div>
       </Link> 
 
 
    </div>
  
    </div>
  )
}

export default LoginPageComponent