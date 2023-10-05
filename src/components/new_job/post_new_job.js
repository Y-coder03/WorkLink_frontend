import React, { useEffect, useState }from 'react'
import { getUserName, newJob } from '../../api/api';

const Post_new_job = () => {

    const [title, settitle] = useState()
    const [description, setdescription] = useState()
    const [company_name, setcompany_name]=useState()
    const [name, setname] = useState()

    useEffect(() => {

        Promise.resolve(getUserName()).then((res) => {
            console.log(res);
             setname(res.data)
            console.log(name);
        }).catch((e) => {
            console.log(e);
        })
    }, [])

    const Post_job = () => {

        Promise.resolve(newJob({ company_name, title, description })).then((response) => {
            console.log(response);
        })
            .catch((error) => {
                console.error('Error posting', error);
            });
    }




  return (
    <>
    <div className='h-screen bg-gray-100 flex justify-center items-center w-full'>
            <div class="sm:w-1/3">
                <form class="bg-white shadow-2xl rounded px-8 pt-6 pb-8 mb-4 border border-grey-100">
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                           Post a New job 
                        </label>
                        <div>
                            <input onChange={(e) => setcompany_name(e.target.value)} value={company_name} class="shadow-xl appearance-none border rounded py-2 px-3 w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-4" id="company_name" type="company_name" placeholder="company name"></input>
                        </div>
                        <div>
                            <input onChange={(e) => settitle(e.target.value)} value={title} class="shadow-xl appearance-none border rounded py-2 px-3 w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-4" id="title" type="title" placeholder="title"></input>
                        </div>
                        <div>
                            <input onChange={(e) => setdescription(e.target.value)} value={description} class="shadow-xl appearance-none border rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline my-4" id="description" type="text" placeholder="Description"></input>
                        </div>
                        {/* <textarea onChange={(e) => setdescription(e.target.value)} value={description} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="description" type="text" placeholder="Description" /> */}
                    </div>
                    

                    <div class="flex items-center justify-between">
                        <button onClick={Post_job} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Post job
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default Post_new_job