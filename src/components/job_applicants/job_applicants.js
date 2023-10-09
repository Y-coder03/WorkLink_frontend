import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { getApplicants, getJob } from '../../api/api';

const Job_applicants = () => {
  const params = useParams();
  const job_id = params.job_id;
  const [applicants, setapplicants] = useState([])


  useEffect(() => {
    Promise.resolve(getApplicants(job_id)).then((res) => {
      console.log(res);
      setapplicants(res.data)
    }).catch((e) => {
      console.log(e);
    })
  }, [job_id])

  return (
    <>
      {
        applicants.length!=0 ? applicants?.map((applicant) => {
          return (
            <div class="bg-gray-100 flex flex-col items-center justify-center" >
              <div class=" justify-center bg-white border shadow-sm px-4 py-3 rounded-lg w-1/3">
                <div class="flex items-center">
                  <img class="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
                  <div class="ml-2">
                    
                    
                    <div class="text-gray-500 text-xs flex">

                    <div class="text-sm ">
                      <Link to={`/other_profile_page/${applicant.user_id}`}  class="font-semibold">{applicant?.user_name ? applicant.user_name : 'User'}</Link>
                     </div>
                      
                      </div>
                  </div>
                </div>
                <p class="text-gray-800 text-sm mt-2 leading-normal md:leading-relaxed">{applicant?.description}</p>
                <div class="text-gray-500 text-sm ">{applicant?.resume_link}</div>
              </div>
              
            </div>
          )
        })
        :
        <div>No Applications</div>
      }
    </>
  )
}

export default Job_applicants