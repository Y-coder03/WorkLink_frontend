import React, { useEffect, useState } from 'react'
import { signup } from '../../api/api';
import { useNavigate } from 'react-router-dom';


const Signup_input_box = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token=localStorage.getItem('token');
    if(token){
      navigate('/');
    }
  }, [])

  const Signup = () => {
    if (password != confirm_password) {
      alert('incorrect password');
    }
    else {
      Promise.resolve(signup({ email, password, phone, name: username, status })).then((response) => {
        alert('welcome!');
        const token = response.data.token;
        localStorage.setItem('token', token);
        navigate('/');

      })
        .catch((error) => {
          // alert('cannot login')
          console.error('Error fetching user data:', error);
        });
    }
      
    }

   

  const [email, setemail] = useState()
  const [password, setpassword] = useState()
  const [phone, setphone] = useState()
  const [status, setstatus] = useState()
  const [username, setusername] = useState()
  const [confirm_password, setconfirm_password] = useState()


  return (
    <>

      <div class="h-full w-1/2 bg-gray-200 gap-2 flex flex-col items-center" >
        <div className='w-full flex flex-col items-center'>
          <h1 className=''>Email</h1>
          <input onChange={(e) => setemail(e.target.value)} value={email} type="email" id="email" name="email" class="mt-1 w-3/4 p-2 border rounded-md"></input>
        </div>
        <div className='w-full flex flex-col items-center'>
          <h2>Username</h2>
          <input onChange={(e) => setusername(e.target.value)} value={username} type="username" id="username" name="username" class="mt-1 w-3/4 p-2 border rounded-md"></input>
        </div>
        <div className='w-full flex flex-col items-center'>
          <h1 className=''>Password</h1>
          <input onChange={(e) => setpassword(e.target.value)} value={password} type="password" id="password" name="password" class="mt-1 w-3/4 p-2 border rounded-md"></input>
        </div>
        <div className='w-full flex flex-col items-center'>
          <h1 className=''>Confirm Password</h1>
          <input onChange={(e) => setconfirm_password(e.target.value)} value={confirm_password} type="confirm_password" id="confirm_password" name="confirm_password" class="mt-1 w-3/4 p-2 border rounded-md"></input>
        </div>
        <div className='w-full flex flex-col items-center'>
          <h1 className=''>status</h1>
          <input onChange={(e) => setstatus(e.target.value)} value={status} type="status" id="status" name="status" class="mt-1 w-3/4 p-2 border rounded-md"></input>
        </div>
        <div className='w-full flex flex-col items-center'>
          <h1 className=''>phone</h1>
          <input onChange={(e) => setphone(e.target.value)} value={phone} type="phone" id="phone" name="phone" class="mt-1 w-3/4 p-2 border rounded-md"></input>
        </div>
        <div class="items-center">
          <input type="checkbox" id="read_terms _and_conditions" class="form-checkbox"></input>
          <label for="read_terms_and_conditions" class="ml-2">I accept the terms of service and privacy policy. </label>
        </div>

        <button onClick={Signup} class="flex w-80 p-4 justify-center items-center rounded-lg bg-blue-500 hover:bg-blue-600">Signup</button>


      </div>

    </>
  )
}

export default Signup_input_box