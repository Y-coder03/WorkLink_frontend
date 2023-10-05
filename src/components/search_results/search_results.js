import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { searchPeople } from '../../api/api';
import { getUser } from '../../api/api';
import { useNavigate } from 'react-router-dom';


const SearchResultsPage = () => {

  const params = useParams();
  const [user, setuser] = useState([])
  const navigate = useNavigate();
  const [search, setsearch] = useState()

  // const [query, setquery] = useState()
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
  const Search=()=>{
    navigate(`/search/${search}`)
  }

  useEffect(() => {
    console.log(params.word);
    Promise.resolve(searchPeople(params.word)).then((res) => {
      console.log(res);
      // setuser(res.data)
    }).catch((error) => {
      console.log(error);
    })

  }, [params.word])


  return (
    <>
    

    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-gray-700 py-4">
        <div className="container mx-auto text-white">
          <h1 className="text-2xl font-semibold">Search Results</h1>
          <p className="text-sm">for People and Connections</p>
        </div>
      </header>

      <div class="p-6 w-3/4 bg-grey-200 border border-gray-100 rounded-lg shadow dark:border-gray-700">
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
              <button className='p-2 w-20 bg-blue-400 text-white rounded-md hover:bg-blue-200' onClick={Search} >Search</button>
              {/* <a href="/search" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Search
                <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </a> */}
            </div>
          </div>

      {/* Main Content */}
      <main className="container mx-auto mt-6 p-4">
        {/* Search Filters */}
        <div className="bg-white p-4 rounded shadow-md mb-6">
          <h2 className="text-lg font-semibold mb-2">Filters</h2>
          {/* Your filter options go here */}
        </div>

        {/* Search Results */}
        <div className="bg-white p-4 rounded shadow-md">
          <h2 className="text-lg font-semibold mb-4">Search Results</h2>
          {/* Your search results list goes here */}
        </div>


        <a onClick={Profile} href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 ">
          <img class="object-cover w-1/2 rounded-t-lg h-50 md:h-auto md:w-24 md:rounded-none md:rounded-l-lg" src="https://toppng.com/uploads/thumbnail/user-account-management-logo-user-icon-1156286714528pikaoejc.png" alt="" />
          <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-gray-800">{user?.name}</h5>
            <p class="mb-3 font-normal text-gray-900 dark:text-gray-700">{user?.headline}</p>
            <p class="mb-3 font-normal text-gray-900 dark:text-gray-700">{user?.status}</p>
            <p class="mb-3 font-normal text-gray-900 dark:text-gray-700">{user?.latest_degree?.map(edu => (
                          <li key={edu.school}>
                            <p className="text-sm">studies at-{edu.institute_name}</p>
                          </li>
                        ))}</p>
          </div>
        </a>

      </main>

      {/* Footer */}
      <footer className="bg-gray-200 py-4 text-center">
        <p className="text-sm text-gray-600">© 2023 Your Company. All rights reserved.</p>
      </footer>
    </div>
    </>
  );
};

export default SearchResultsPage;
