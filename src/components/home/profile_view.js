import React, { useEffect, useState } from 'react'
import { getUser } from '../../api/api';
import { useNavigate } from 'react-router-dom';


const Profile_view = () => {
  const [user, setuser] = useState([])
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  // const token = 1;
  useEffect(() => {

    Promise.resolve(getUser()).then((res) => {
      console.log(res);
      setuser(res.data)
    }).catch((error) => {
      console.log(error);
    })
  }, [])
  const Profile = () => {
    navigate(`/profile/`)
  }

  return (
    <>
      {
        token ?
          <div className='flex items-end justify-end border-2 mt-40 '>
            <div class=" w-70 max-w-xs">
              <div class="bg-grey-500 shadow-2xl rounded-lg py-3">
                <div class="photo-wrapper p-2">
                  <img class="w-32 h-32 rounded-full mx-auto" src="https://toppng.com/uploads/thumbnail/user-account-management-logo-user-icon-1156286714528pikaoejc.png" alt="profile image" />
                </div>
                <div class="p-2">
                  <h3 class="text-center text-xl text-gray-900 font-medium leading-8">{user?.name}</h3>
                  <div class="text-center text-gray-400 text-s font-semibold">
                    <p >{user?.status}</p>
                  </div>
                  <table class="text-xs my-3">
                    <tbody><tr>
                      {/* <td class="px-2 py-2 text-gray-500 font-semibold">Studies At</td> */}
                      <td class="w-full">
                        {user?.latest_degree?.map(edu => (
                          <li key={edu.school}>
                            <p className="text-sm">Studies at - {edu.institute_name}</p>
                          </li>
                        ))}
                      </td>
                    </tr>
                      <tr>
                        <td class="px-2 py-2 text-gray-500 font-semibold">Phone</td>
                        <td class="px-2 py-2">{user?.phone}</td>
                      </tr>
                      <tr>
                        <td class="px-2 py-2 text-gray-500 font-semibold">Email</td>
                        <td class="px-2 py-2">{user?.email}</td>
                      </tr>
                    </tbody></table>
                  <div class="text-center my-3">
                    <a onClick={Profile} class="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium" href="#">View Profile</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          : <></>
      }

    </>
  )
}

export default Profile_view