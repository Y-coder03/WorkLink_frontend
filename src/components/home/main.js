import React, { useEffect, useState } from 'react'
import { getAllPost, newPost } from '../../api/api'
import { useNavigate } from 'react-router-dom';
import Comment_section from '../comments/comment_section';

const Main = () => {
  
  const navigate = useNavigate();

  const [posts, setposts] = useState([])
  const [search, setsearch] = useState()
  
  useEffect(() => {
    // const getAllPosts=()=>{
    Promise.resolve(getAllPost()).then((res) => {
      console.log(res);
      setposts(res.data.posts)
    }).catch((error) => {
      console.log(error);
    })
    // }
  }, [])

  const Search=()=>{
    navigate(`/search/${search}`)
  }
  const newpost=()=>{
    navigate(`/new_post/`)
  }

  return (
    <>
      {/* <div className="border-2 border-blue-500 inline-flex h-full w-full bg-grey-200 flex-col justify-center "> */}
      <div class=" p-3 flex flex-col h-screen grid ">
        <div class="w-fullr">
          <div class="p-6 w-3/4 bg-grey-500 border border-gray-100 rounded-lg shadow dark:border-gray-700">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">Search</h5>
            </a>
            <div className='flex gap-4'>
              <form>
                {/* <label for="search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white ">Search</label> */}
                <div class="relative">
                  <div class="absolute inset-y-0 left-0 flex items-center  pointer-events-none">
                    <svg class="ml-2 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                  </div>
                  <input onChange={(e)=>setsearch(e.target.value)} value={search} type="search" id="search" class="block w-full p-4 pl-10 text-sm text-black border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400" placeholder="Search" required />
                </div>
              </form>
              <button className='p-2 w-20 bg-blue-500 border-blue-900 text-white rounded-md hover:bg-blue-200' onClick={Search} >Search</button>
              {/* <a href="/search" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Search
                <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </a> */}
            </div>
          </div>

          <div className='flex w-full gap-2 items-center'>
            <div>
              <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" className='rounded-full w-12 h-12' />
            </div>
            <button onClick={newpost} type="button" class="text-white border border-grey-100 bg-blue-500 hover:bg-blue-200 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 my-2 w-1/2 text-black">Share a Post</button>
          </div>
        </div>

        {
          posts != [] &&
          posts.map((data) => {
            return (
              <div class="my-2 bg-grey-700 border shadow-xl px-4 py-3 rounded-lg max-w-lg">
                <div class="flex items-center">
                  <img class="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
                  <div class="ml-2">
                    <div class="text-sm ">
                      <span class="font-semibold">{data.student_name ? data.student_name : 'User'}</span>
                      {/* <span class="text-gray-500"> • 1st</span> */}
                    </div>
                    <div class="text-gray-500 text-xs ">{data.title}</div>
                    <div class="text-gray-500 text-xs flex">
                      {/* <span class="inline-block">3d • Edited • </span> */}
                      <svg class="inline-block ml-1 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" width="16" height="16" focusable="false">
                        <path d="M8 1a7 7 0 107 7 7 7 0 00-7-7zM3 8a5 5 0 011-3l.55.55A1.5 1.5 0 015 6.62v1.07a.75.75 0 00.22.53l.56.56a.75.75 0 00.53.22H7v.69a.75.75 0 00.22.53l.56.56a.75.75 0 01.22.53V13a5 5 0 01-5-5zm6.24 4.83l2-2.46a.75.75 0 00.09-.8l-.58-1.16A.76.76 0 0010 8H7v-.19a.51.51 0 01.28-.45l.38-.19a.74.74 0 01.68 0L9 7.5l.38-.7a1 1 0 00.12-.48v-.85a.78.78 0 01.21-.53l1.07-1.09a5 5 0 01-1.54 9z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <p class="text-gray-800 text-sm mt-2 leading-normal md:leading-relaxed">{data.description}</p>
                <div class="text-gray-500 text-xs flex items-center mt-3">
                  {/* <img class="mr-0.5" src="https://static-exp1.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb" />
                  <img class="mr-0.5" src="https://static-exp1.licdn.com/sc/h/5thsbmikm6a8uov24ygwd914f" />
                  <img class="mr-0.5" src="https://static-exp1.licdn.com/sc/h/7fx9nkd7mx8avdpqm5hqcbi97" /> */}
                  <a href={`/comments/${data._id}`} class="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium">Comments</a>
                </div>
              </div>
            )
          })
        }
      </div>
      {/* </div> */}
    </>
  )
}

export default Main