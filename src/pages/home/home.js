import React from 'react'
import Connections from '../../components/home/connections'
import Profile_view from '../../components/home/profile_view'
import Job_recommendations from '../../components/home/job_recommendations'
import Main from '../../components/home/main'
import Myposts from '../../components/myposts/myposts'
import Navbar from '../../components/navbar/navbar'


const Home = () => {
    return (
        <>
            <div>
                <Navbar />
            </div>
            <div className="md:flex h-screen w-full">
                <div className="h-full w-1/3">
                    <Profile_view />
                    {/* <Job_recommendations /> */}
                </div>
                <div className="h-full w-1/2">
                    <Main />
                </div>
                {/* <div className="h-full sm:w-1/3"> */}
                    {/* <Connections /> */}
                    {/* <Myposts /> */}
                {/* </div> */}
            </div>
        </>
    )
}

export default Home