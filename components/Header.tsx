import Link from 'next/link'
import ButtonTwo from './ButtonTwo'
import Logo from './Logo'

const Header = () => {
  return (
    <header className="flex items-center justify-between text-white bg-gray-900  mx-w-7xl mx-auto p-2 px-8">
      <Logo/>

     {/* Button  */}
      <Link href="/LoginSignUpUI">
       <div className="justify-center bg-blue-700 text-white inline-block px-8 py-3  rounded-lg font-semibold text-sm ">
        Sign in
      </div>
      </Link>

    </header>
  )
}

export default Header