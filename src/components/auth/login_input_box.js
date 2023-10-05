import React, { useEffect, useState } from 'react'
import { signin, signinGoogle } from '../../api/api';
import { useNavigate } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google'
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";



const Login_input_box = () => {

  const [email, setemail] = useState()
  const [name, setname] = useState()
  const [check, setcheck] = useState(false)
  const [password, setpassword] = useState()


  const navigate = useNavigate();
  const Signin = () => {
    Promise.resolve(signin({ email, password })).then((response) => {
      alert('login successfully')
      console.log(response);
      const token = response.data.token;
      localStorage.setItem('token', token);
      navigate('/');
    })
      .catch((error) => {
        alert('cannot login')
        console.error('Error fetching user data:', error);
      });
  }

  useEffect(() => {
    const token=localStorage.getItem('token');
    if(token){
      navigate('/');
    }
    if(check){
      GoogleSignin();
    }
  }, [check])
  
  const setInfo=(username, useremail)=>{
    setname(username)
    setpassword(useremail)
    setemail(useremail)
    setcheck(true);
  }

  const GoogleSignin = () => {
    console.log(email, password, name);
    Promise.resolve(signinGoogle({ email, password, name, status:'student' })).then((response) => {
      alert('login successfully')
      console.log(response);
      const token = response.data.token;
      localStorage.setItem('token', token);
      navigate('/');
    })
      .catch((error) => {
        alert('cannot login')
        console.error('Error fetching user data:', error);
      });
  }

  const Login_as_new_user = () => {
    navigate('/signup');
  }


  // const Signup=()=>{
  //   navigate('/signup');
  // }
  // const Signup = () => {
  //   Promise.resolve(signup({ email, password, name, status, phone  })).then((response) => {
  //     alert('welcome!')
  //   })
  //     .catch((error) => {
  //       // alert('cannot login')
  //       // console.error('Error fetching user data:', error);
  //     });
  // }


  return (

    <div class="h-full w-1/2 bg-gray-200 gap-10 flex flex-col items-center" >
      <div className='w-full flex flex-col items-center mt-10'>
        <h1 className=''>Email</h1>
        <input onChange={(e) => setemail(e.target.value)} value={email} type="email" id="email" name="email" class="mt-5 w-3/4 p-2 border rounded-md"></input>
      </div>
      <div className='w-full flex flex-col items-center'>
        <h2>Password</h2>
        <input onChange={(e) => setpassword(e.target.value)} value={password} type="password" id="password" name="password" class="mt-5 w-3/4 p-2 border rounded-md"></input>
      </div>
      <button onClick={Signin} class="flex w-80 p-4 py-2 justify-center items-center rounded-lg bg-blue-500 hover:bg-blue-600">Login</button>
      <div className=' gap-2 items-center justify-center'>
        <button onClick={Login_as_new_user} className='bg-blue-400 rounded-md p-2 w-40 text-center hover:bg-blue-600'>Login as new User</button>
        {/* <button onClick={Signup} className='border rounded-md p-2 border-blue-400 text-center w-40'>Signup</button> */}
        {/* <div class="items-center">
          <input type="checkbox" id="remember_me" class="form-checkbox"></input>
          <label for="rememberMe" class="ml-2">Remember Me</label>
        </div> */}
        <button class="text-blue-500 hover:underline focus:outline-none p-7">Forgot Password?</button>
        {/* <button class="flex w-80 p-2 justify-center items-center rounded-lg bg-blue-500">Signup using Google</button> */}
      </div>
      <GoogleOAuthProvider clientId="832880327110-o2e8hi6rqq582n4cf88dkpc76glsuqno.apps.googleusercontent.com">
        <GoogleLogin
          onSuccess={credentialResponse => {
            var decoded = jwt_decode(credentialResponse.credential);
            setInfo(decoded.name,decoded.email)
          }}
          onError={() => {
            console.log('Login Failed');
          }}
        />;

      </GoogleOAuthProvider>;

    </div>
  )
}

export default Login_input_box