import { Input, Spacer } from "@nextui-org/react";
import styles from '../styles/InputField.module.scss'

const InputField = () => {
  return (
    <Input className={`${styles.input} border-0 bg-white md:w-sm mt-3`}
         width="29rem" 
         size="xl"
        placeholder="Username of email" 
        bordered
      
      />
  )
}

export default InputField