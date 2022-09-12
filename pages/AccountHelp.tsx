import React from 'react'
import AccountHelpComponent from '../components/AccountHelpComponent'
import Footer from '../components/Footer'
import Header from '../components/Header'

const AccountHelp = () => {
  return (
    <div className="bg-gray-50">
       <Header/>

<AccountHelpComponent/>

       <Footer/>
    </div>
  )
}

export default AccountHelp