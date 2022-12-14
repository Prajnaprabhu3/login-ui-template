import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import LoginSignUpUI from './LoginSignUpUI'


const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

  
        <LoginSignUpUI/>  
     
        
    </div>
  )
}

export default Home
