import React from 'react'
import Sidebar from '../../components/auth/sidebar'
import Login_input_box from '../../components/auth/login_input_box'
import './styles.css';

const Login = () => {

  return (
    <div className='bg-gradient-to-b from-blue-300 via-blue-900 to-transparent h-screen flex justify-center items-center'>
      <div className="flex md:w-3/4 md:h-3/4 items-center bg-gradient-to-b from-gray-300 to-transparent">
        <Sidebar />
        <Login_input_box />
      </div>
    </div>
  )
}

export default Login