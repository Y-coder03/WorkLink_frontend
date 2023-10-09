import React, { useEffect, useState } from 'react'
import { editUser } from '../../api/api';
import { useNavigate } from 'react-router-dom';

const Edit_profile = () => {
    const navigate = useNavigate();
    const [user, setuser] = useState([])
    const [name, setname] = useState([])
    const [city, setcity] = useState([])
    const [phone, setphone] = useState([])
    const [status, setstatus] = useState([])
    const [class_10_eduction, setclass_10_education] = useState([])
    const [class_12_education, setclass_12_education] = useState([])
    const [latest_degree, setlatest_degree] = useState([])
    const [experience, setexperience] = useState([])
    const [projects, setprojects] = useState([])
    const [headline, setheadline] = useState([])

    useEffect(() => {
        Promise.resolve(editUser()).then((res) => {
          console.log(res);
        //   setuser(res.data)
        }).catch((error) => {
          console.log(error);
        })
        
      }, [])
      
      const save_changes = () => {
        navigate(`/profile/`)
      }

  return (
    <>
    
        <div className=' bg-gray-100 flex justify-center items-center w-full'>
            <div class="sm:w-1/2">
                <form class="bg-white shadow-2xl rounded px-8 pt-6 pb-8 mb-4 border border-grey-100">
                    <div class="mb-4">
                        <label class="block text-gray-900 text-xl font-bold mb-2" for="username">
                           Edit profile
                        </label>
                        <div>
                            <h1>Name</h1>
                            <input onChange={(e) => setname(e.target.value)} value={name} class="shadow-xl appearance-none border rounded py-2 px-3 w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-4" id="name" type="text" placeholder="name"></input>
                        </div>
                        <div>
                            <h>Contact number</h>
                            <input onChange={(e) => setphone(e.target.value)} value={phone}  class="shadow-xl appearance-none border rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline my-4" id="phone" type="text" placeholder="phone "></input>
                        </div>
                        <div>
                            <h>Status</h>
                            <input onChange={(e) => setstatus(e.target.value)} value={status} class="shadow-xl appearance-none border rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline my-4" id="status" type="text" placeholder="status "></input>
                        </div>
                        <div>
                            <h>City</h>
                            <input onChange={(e) => setcity(e.target.value)} value={city}  class="shadow-xl appearance-none border rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline my-4" id="city" type="text" placeholder="city "></input>
                        </div>
                        <div>
                            <h>headline</h>
                            <input onChange={(e) => setheadline(e.target.value)} value={headline}  class="shadow-xl appearance-none border rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline my-4" id="headline" type="text" placeholder="headline "></input>
                        </div>
                        <div>
                            <h>Latest Degree</h>
                            <input onChange={(e) => setlatest_degree(e.target.value)} value={latest_degree}  class="shadow-xl appearance-none border rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline my-4" id="latest_degree" type="text" placeholder="latest degree "></input>
                        </div>
                        <div>
                            <h>Class 10</h>
                            <input onChange={(e) => setclass_10_education(e.target.value)} value={class_10_eduction}  class="shadow-xl appearance-none border rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline my-4" id="class_10_education" type="text" placeholder="class_10_education "></input>
                        </div>
                        <div>
                            <h>Class 12</h>
                            <input onChange={(e) => setclass_12_education(e.target.value)} value={class_12_education}  class="shadow-xl appearance-none border rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline my-4" id="class_12_education" type="text" placeholder="class 12 education "></input>
                        </div>
                        <div>
                            <h>Experiences</h>
                            <input onChange={(e) => setexperience(e.target.value)} value={experience}  class="shadow-xl appearance-none border rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline my-4" id="experiences" type="text" placeholder="experiences "></input>
                        </div>
                        <div>
                            <h>Projects</h>
                            <input onChange={(e) => setprojects(e.target.value)} value={projects} class="shadow-xl appearance-none border rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline my-4" id="projects" type="text" placeholder="projects "></input>
                        </div>
                        
                        {/* <textarea onChange={(e) => setdescription(e.target.value)} value={description} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="description" type="text" placeholder="Description" /> */}
                    </div>
                    {/* <div class="mb-6">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                            select photos
                        </label>

                        
                       
                    </div> */}

                    <div class="flex items-center justify-between">
                        <button onClick={save_changes} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            save changes
                        </button>
                    </div>
                </form>
            </div>
        </div>
    
    </>
  )
}

export default Edit_profile