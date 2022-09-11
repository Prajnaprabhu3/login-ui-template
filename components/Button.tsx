import styles from '../styles/Button.module.scss'

export type ButtonProps = {
    onClick?(): void;
    buttonText: string;
    customClass?: string;
    prefixLogo?: React.ReactElement;
    suffixLogo?: React.ReactElement;
    children?: React.ReactNode;
};

const Button = ({ onClick, prefixLogo, suffixLogo, buttonText, customClass }: ButtonProps) => {
    return (
        <div onClick={onClick} className={`justify-center bg-white inline-block p-2 py-3.5 w-2/3 rounded-lg font-light text border-2 ${styles.customClass}`}>
        <div className='flex justify-center text-center align-middle'> 
        <div className={`{styles.prefixLogo}  mx-2 text-2xl`}>{prefixLogo}</div> 
        <div>{buttonText}</div>
    </div>
    </div>
    );
};



export default Button;