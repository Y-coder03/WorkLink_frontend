import React, { useEffect, useState } from 'react'
import { getJob, jobsApply } from '../../api/api';
import { useParams } from 'react-router-dom';

const Job_apply = () => {
  const params = useParams();
  const [job, setjob] = useState()
  const [description, setdescription] = useState()
  const [resume_link, setresume_link] = useState()
  const [name, setname] = useState()
  
  const job_id = params.job_id;

  useEffect(() => {
    Promise.resolve(getJob(job_id)).then((res) => {
      console.log(res);
        setjob(res.data)
        // setpost(res.data)
    }).catch((e) => {
      console.log(e);
    })
  }, [job_id])
  
  const apply_job = () => {
    Promise.resolve(jobsApply(job_id, description, resume_link)).then((res) => {
      console.log(res);
        setjob(res.data)
        // setpost(res.data)
    }).catch((e) => {
      console.log(e);
    })

  }
    
  return (
    <>
        <div class="bg-gray-200 flex flex-col items-center justify-center">
      <div class=" justify-center bg-white border shadow-sm px-4 py-3 rounded-lg w-1/3 mt-2">
        <div class="flex items-center">
          <img class="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
          <div class="ml-2">
            <div class="text-xl ">
              <span class="font-semibold">{job?.company_name}</span>
             </div>

           
            {/* <div class="text-gray-500 text-xs flex"> */}
             
              {/* <svg class="inline-block ml-1 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" width="16" height="16" focusable="false">
                <path d="M8 1a7 7 0 107 7 7 7 0 00-7-7zM3 8a5 5 0 011-3l.55.55A1.5 1.5 0 015 6.62v1.07a.75.75 0 00.22.53l.56.56a.75.75 0 00.53.22H7v.69a.75.75 0 00.22.53l.56.56a.75.75 0 01.22.53V13a5 5 0 01-5-5zm6.24 4.83l2-2.46a.75.75 0 00.09-.8l-.58-1.16A.76.76 0 0010 8H7v-.19a.51.51 0 01.28-.45l.38-.19a.74.74 0 01.68 0L9 7.5l.38-.7a1 1 0 00.12-.48v-.85a.78.78 0 01.21-.53l1.07-1.09a5 5 0 01-1.54 9z"></path>
              </svg> */}
            {/* </div> */}
          </div>
        </div>
        <div class="text-gray-700 font-bold text-m ">{job?.title}</div>
        <p class="text-gray-800 text-sm mt-1 leading-normal md:leading-relaxed">{job?.description}</p>
        
      </div>


      <div className='h-screen bg-gray-200 flex justify-center items-center w-full mt-1'>
        <div class="sm:w-1/3">
          <form class="bg-white shadow-2xl rounded px-8 pt-4 pb-8 mb-4 border border-grey-100">
            <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
               Name
              </label>

              <input onChange={(e) => setname(e.target.value)} value={name} class="shadow-xl appearance-none border rounded py-2 px-3 w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-4" id="name" type="text" placeholder="name"></input>
           
              <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
               Write about yourself
              </label>
              <div>
                <input onChange={(e) => setdescription(e.target.value)} value={description} class="shadow-xl appearance-none border rounded py-2 px-3 w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-4" id="description" type="text" placeholder="applicant description"></input>
              </div>

              <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
               Resume Link
              </label>

              <div>
                <input onChange={(e) => setresume_link(e.target.value)} value={resume_link} class="shadow-xl appearance-none border rounded py-2 px-3 w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-4" id="resume_link" type="text" placeholder="resume link"></input>
              </div>


            </div>


            <div class="flex items-center justify-between">
              <button onClick={apply_job} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button"> Apply Now</button>
            </div>
          </form>
        </div>
      </div>

      {/* {
        showcomment?.map((data) => {
          return (
            <div key={data._id} className='h-screen bg-gray-100 flex justify-center items-center w-full'>
              <div class="sm:w-1/3">
                <form class="bg-white shadow-2xl rounded px-8 pt-6 pb-8 mb-4 border border-grey-100">
                  <div class="flex items-center justify-between">
                    <div class="text-bold black ">{data?.username} -  {data?.comment} </div>
                   
                  </div>
                </form>
              </div>
            </div>
          )
        }
        )
      } */}
      </div>
    </>
  )
}

export default Job_apply