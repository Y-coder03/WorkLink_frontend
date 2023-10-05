import React, { useEffect, useState } from 'react'
import { getmyPosts } from '../../api/api';
import { useNavigate } from 'react-router-dom';

const Myposts = () => {
  const [user, setuser] = useState([])
  const [myposts, setmyposts] = useState([])
  const [email, setemail] = useState()
  const navigate = useNavigate();

  useEffect(() => {

    Promise.resolve(getmyPosts()).then((res) => {
      console.log(res);
      setmyposts(res.data.posts)
    }).catch((error) => {
      console.log(error);
    })
    // }
  }, [])



  return (
    <>
      {
        myposts?.map((data) => {
          return (
            <div class="bg-gray-100 flex flex-col items-center justify-center">
            <div class="my-2 w-96 bg-white border shadow-sm px-2 py-3 rounded-lg ">
              <div class="flex ">
                <img class="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
                <div class="ml-2">
                  <div class="text-sm ">
                    <span class="font-semibold">{data.student_name ? data.student_name : 'User'}</span>
                    {/* <span class="text-gray-500"> • 1st</span> */}
                  </div>
                  <div class="text-gray-500 text-xs ">{data?.title}</div>
                  <div class="text-gray-500 text-xs flex">
                    {/* <span class="inline-block">3d • Edited • </span> */}
                    <svg class="inline-block ml-1 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" width="16" height="16" focusable="false">
                      <path d="M8 1a7 7 0 107 7 7 7 0 00-7-7zM3 8a5 5 0 011-3l.55.55A1.5 1.5 0 015 6.62v1.07a.75.75 0 00.22.53l.56.56a.75.75 0 00.53.22H7v.69a.75.75 0 00.22.53l.56.56a.75.75 0 01.22.53V13a5 5 0 01-5-5zm6.24 4.83l2-2.46a.75.75 0 00.09-.8l-.58-1.16A.76.76 0 0010 8H7v-.19a.51.51 0 01.28-.45l.38-.19a.74.74 0 01.68 0L9 7.5l.38-.7a1 1 0 00.12-.48v-.85a.78.78 0 01.21-.53l1.07-1.09a5 5 0 01-1.54 9z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <p class="text-gray-800 text-sm mt-2 leading-normal md:leading-relaxed">{data?.description}</p>
              <div class="text-gray-500 text-xs  mt-3">
                {/* <img class="mr-0.5" src="https://static-exp1.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb" />
                <img class="mr-0.5" src="https://static-exp1.licdn.com/sc/h/5thsbmikm6a8uov24ygwd914f" />
                <img class="mr-0.5" src="https://static-exp1.licdn.com/sc/h/7fx9nkd7mx8avdpqm5hqcbi97" /> */}
                {/* <link class="ml-1">comments</link> */}
                <a href={`/comments/${data._id}`} class="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium">Comments</a>
              </div>
            </div>
            </div>
          )
        }
        )
      }
    </>
  )
}

export default Myposts