import React from 'react'

const Job_apply = () => {
    
  return (
    <>
        <div class="bg-gray-100 flex flex-col items-center justify-center">
      <div class=" justify-center bg-white border shadow-sm px-4 py-3 rounded-lg max-w-lg">
        <div class="flex items-center">
          <img class="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
          <div class="ml-2">
            <div class="text-sm ">
              <span class="font-semibold">Company_name</span>
              {/* <span class="text-gray-500"> • 1st</span> */}
            </div>
            <div class="text-gray-500 text-xs ">Position</div>
            <div class="text-gray-500 text-xs flex">
              {/* <span class="inline-block">3d • Edited • </span> */}
              <svg class="inline-block ml-1 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" width="16" height="16" focusable="false">
                <path d="M8 1a7 7 0 107 7 7 7 0 00-7-7zM3 8a5 5 0 011-3l.55.55A1.5 1.5 0 015 6.62v1.07a.75.75 0 00.22.53l.56.56a.75.75 0 00.53.22H7v.69a.75.75 0 00.22.53l.56.56a.75.75 0 01.22.53V13a5 5 0 01-5-5zm6.24 4.83l2-2.46a.75.75 0 00.09-.8l-.58-1.16A.76.76 0 0010 8H7v-.19a.51.51 0 01.28-.45l.38-.19a.74.74 0 01.68 0L9 7.5l.38-.7a1 1 0 00.12-.48v-.85a.78.78 0 01.21-.53l1.07-1.09a5 5 0 01-1.54 9z"></path>
              </svg>
            </div>
          </div>
        </div>
        <p class="text-gray-800 text-sm mt-2 leading-normal md:leading-relaxed">Description</p>
        
      </div>


      <div className='h-screen bg-gray-100 flex justify-center items-center w-full mt-0.5'>
        <div class="sm:w-1/3">
          <form class="bg-white shadow-2xl rounded px-8 pt-4 pb-8 mb-4 border border-grey-100">
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
               Write about yourself/ resume link
              </label>
              <div>
                <input class="shadow-xl appearance-none border rounded py-2 px-3 w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-4" id="comment" type="text" placeholder="applicant description"></input>
              </div>


            </div>


            <div class="flex items-center justify-between">
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button"> Apply Now</button>
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