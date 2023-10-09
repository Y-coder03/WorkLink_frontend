import React, { useEffect, useState } from 'react'
import { getmyApplications } from '../../api/api';

const My_applications = () => {
  const [myapplications, setmyapplications] = useState([])

  useEffect(() => {

    Promise.resolve(getmyApplications()).then((res) => {
      console.log(res);
      // setmyapplications(res.data.Jobs)
    }).catch((error) => {
      console.log(error);
    })
    // }
  }, [])

  return (
    <>
     {
        myapplications?.map((job) => {
          return (
    <div class="bg-gray-100 flex flex-col items-center justify-center">
            <div class="my-2 bg-white border shadow-sm px-40 py-3 rounded-lg">
              <div class="flex items-center">
                <img class="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
                <div class="ml-2">
                  <div class="text-sm ">
                    <span class="font-semibold">{job?.company_name}</span>
                  
                  </div>
                </div>
              </div>
              <div class="text-gray-500 text-sm ">{job?.title}</div>
              <p class="text-gray-800 text-sm mt-2 leading-normal md:leading-relaxed">description</p>
              
            </div>
            </div>
            )
          }
          )
        } 
    </>
  )
}

export default My_applications