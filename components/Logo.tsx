import styles from '../styles/Logo.module.scss'

const Logo = () => {
  return (
    <div className="flex p-7 text-left font-bold items-center ">
    <div className={styles.logo}>
      
      <div className={styles.semiCircleOne}></div>
      <div className={styles.semiCircleTwo}></div>
    </div>
   <div className="font-semibold text-2xl mx-2">Overpay.</div>
   </div>
  
  )
}

export default Logo