import React, { useEffect, useState } from 'react'
import { getAllJobs, newJob } from '../../api/api'
import { Link, useNavigate } from 'react-router-dom';

const All_jobs = () => {
    const navigate = useNavigate();
    const [jobs, setjobs] = useState([])

    useEffect(() => {

        Promise.resolve(getAllJobs()).then((res) => {
            console.log(res.data.jobs);
            setjobs(res.data.jobs)
        }).catch((error) => {
            console.log(error);
        })
    }, [])

    const newjob = () => {
        navigate(`/post_new_job/`)
    }


    return (
        <>
            <div class=" p-3 flex flex-col items-center justify-center h-screen grid ">
                <div class="w-fullr">
                    <div class="p-6 w-3/4 bg-grey-500 border border-gray-100 rounded-lg shadow dark:border-gray-700">
                        {/* <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">Search</h5>
            </a> */}
                        <div className='flex gap-4'>
                            <form>
                                {/* <label for="search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white ">Search</label> */}
                                <div class="relative">
                                    <div class="absolute inset-y-0 left-0 flex items-center  pointer-events-none">
                                        <svg class="ml-2 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                        </svg>
                                    </div>
                                    <input type="search" id="search" class="block w-full p-4 pl-10 text-sm text-black border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400" placeholder="Search" required />
                                </div>
                            </form>
                            <button className='p-2 w-20 bg-blue-500 border-blue-900 text-white rounded-md hover:bg-blue-200'>Search</button>
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
                        <button onClick={newjob} type="button" class="text-white border border-grey-100 bg-blue-500 hover:bg-blue-200 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 my-2 w-1/2 text-black">Post a Job</button>
                    </div>
                </div>
                <div>hello</div>
                {
                    jobs?.map((data) => {
                        return (
                            <div class="my-2 bg-grey-700 border shadow-xl px-4 py-3 rounded-lg max-w-lg">
                                <div class="flex items-center">
                                    <img class="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />


                                    <div class="ml-2">
                                        <div class="text-xl ">
                                            <span class="font-semibold">{data?.company_name}</span>
                                        </div>
                                    </div>    
                                 </div>

                                  {/* <div class="text-gray-500 text-sm"> */}
                                  <div class="text-gray-800 font-bold text-l  ">Position- {data?.title}</div>
                                        {/* </div> */}
                                <p class="text-gray-800 text-sm mt-2 leading-normal md:leading-relaxed">{data?.description}</p>
                                <div class="text-gray-500 text-xs flex items-center mt-3">
                                    
                                 <Link to={`/apply_for_job/${data._id}`} class="p-2 w-20 bg-blue-500 border-blue-900 text-white rounded-md hover:bg-blue-200">Apply Now</Link>
                                </div>
                            </div>
                        )

                    })
                }
            </div>
        </>
    )
}

export default All_jobs