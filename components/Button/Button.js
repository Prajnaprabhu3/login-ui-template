import styles from './Button.module.css'


export default function Button({prefixLogo, buttonText,onClick,suffixLogo, customClass}){
  return (
    <div onClick={onClick} className={`justify-center bg-gray-100 inline-block p-2 py-3.5 w-2/3 rounded-lg font-light text border-2 ${styles.customClass}`}>
        <div className='flex justify-center text-center align-middle'> 
        <div className={`{styles.prefixLogo}  mx-2 text-2xl`}>{prefixLogo}</div> 
        <div>{buttonText}</div>
    </div>
    </div>
  )
}

