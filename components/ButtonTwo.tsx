import '../styles/Button.module.scss'


export type ButtonProps = {
    onClick?(): void;
    buttonText: string;
    customClass?: string;
    prefixLogo?: React.ReactElement;
    suffixLogo?: React.ReactElement;
    children?: React.ReactNode;
};

const ButtonTwo = ({ onClick, prefixLogo, suffixLogo, buttonText, customClass }: ButtonProps) => {
    return (
        <div onClick={onClick} className={`justify-center bg-blue-700 text-white inline-block p-2 py-3 w-2/3 rounded-lg font-semibold text-lg border-2 ${customClass}`}>
        <div className='flex justify-center text-center align-middle'> 
        <div className="prefixLogo   text-2xl">{prefixLogo}</div> 
        <div>{buttonText}</div>
    </div>
    </div>
    );
};






export default ButtonTwo;