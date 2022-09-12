import Footer from '../components/Footer'
import Header from '../components/Header'
import VerifyEmailComponent from '../components/VerifyEmailComponent'


const EmailVerify = () => {
  return (
    <div className="bg-gray-50 h-full">
    {/* header  */}
     <Header/>

    {/* component  */}
    <VerifyEmailComponent/>

    {/* footer  */}
    <Footer/>

    </div>
  )
}

export default EmailVerify