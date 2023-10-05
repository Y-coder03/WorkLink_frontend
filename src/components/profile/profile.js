import React,  { useEffect, useState } from 'react';
import { getUser } from '../../api/api';

const Profile = () => {

    useEffect(() => {
        Promise.resolve(getUser()).then((res) => {
          console.log(res);
          setuser(res.data)
        }).catch((error) => {
          console.log(error);
        })
        
      }, [])
      const [user, setuser] = useState([])
    
    const education = [
        { school: 'University of XYZ', degree: 'Bachelor of Science in Computer Science', year: '2018 - 2022' },
        { school: 'ABC High School', degree: 'High School Diploma', year: '2014 - 2018' },
    ];

    return (
        <div className="bg-gray-200 min-h-screen">
            {/* Header */}
            <header className="bg-gray-800 py-4">
                <div className="container mx-auto text-white flex items-center">
                    <img
                        className="w-16 h-16 rounded-full mr-4"
                        src="https://toppng.com/uploads/thumbnail/user-account-management-logo-user-icon-1156286714528pikaoejc.png"
                        alt="Profile"
                    />
                    <div>
                        <h1 className="text-2xl font-semibold">{user?.name}</h1>
                        {/* <p className="text-sm">Software Engineer at ABC Corp</p> */}
                    </div>
                    <div>
                        <h1 className="text-2xl font-semibold">{user?.headline}</h1>
                    </div>
                   
                </div>
                <p className="text-sm px-20 text-white">Software Engineer at ABC Corp</p>
                <div>
                        <h1 className="text-xl font-semibold px-20 text-white">{user?.status}</h1>
                        {/* <p className="text-sm">Software Engineer at ABC Corp</p> */}
                    </div>
                    
            </header>

            {/* Main Content */}
            <main className="container mx-auto mt-6 p-4">
                {/* Profile Summary */}
                <div className="bg-white p-4 rounded shadow-md mb-6">
                    <h2 className="text-lg font-semibold mb-2">About</h2>
                    <p>Experienced software engineer with a passion for building scalable web applications...</p>
                </div>

                {/* Skills */}
                <div className="bg-white p-4 rounded shadow-md mb-6">
                    <h2 className="text-lg font-semibold mb-2">Skills</h2>
                    <ul className="list-disc pl-6">
                        {user?.skills?.map(skill => (
                            <li key={skill}>{skill}</li>
                        ))}
                    </ul>
                </div>

                <div className="bg-white p-4 rounded shadow-md mb-6">
                    <h2 className="text-lg font-semibold mb-2">Latest Degree</h2>
                    <ul className="list-disc pl-6">
                        {user?.latest_degree?.map(edu => (
                            <li key={edu.school}>
                                <p>{edu.school}</p>
                                <p className="text-sm">Institute Name - {edu.institute_name}</p>
                                <p className="text-sm">Marks - {edu.marks}</p>
                                <p className="text-sm">Passing Year - {edu.passing_year}</p>
                                <p className="text-sm">Stream - {edu.stream}</p>
                            </li>
                        ))}
                    </ul> 
                </div>

                <div className="bg-white p-4 rounded shadow-md mb-6">
                    <h2 className="text-lg font-semibold mb-2">class 12 education</h2>
                    <ul className="list-disc pl-6">
                        {user?.class_12_education?.map(edu => (
                            <li key={edu.school}>
                                <p>{edu.school}</p>
                                <p className="text-sm">School Name - {edu.school_name}</p>
                                <p className="text-sm">Percentage - {edu.marks}</p>
                                <p className="text-sm">Year of Passing - {edu.passing_year}</p>
                            </li>
                        ))}
                    </ul> 
                </div>


                <div className="bg-white p-4 rounded shadow-md mb-6">
                    <h2 className="text-lg font-semibold mb-2">class 10 education</h2>
                    <ul className="list-disc pl-6">
                        {user?.class_10_education?.map(edu => (
                            <li key={edu.school}>
                                <p>{edu.school}</p>
                                <p className="text-sm">School Name - {edu.school_name}</p>
                                <p className="text-sm">Percentage - {edu.marks}</p>
                                <p className="text-sm">Year of Passing - {edu.passing_year}</p>
                            </li>
                        ))}
                    </ul> 
                </div>
{/* 
                Skills */}
                <div className="bg-white p-4 rounded shadow-md mb-6">
                    <h2 className="text-lg font-semibold mb-2">Projects</h2>
                    <ul className="list-disc pl-6">
                        {user?.projects?.map(proj => (
                            // <li key={proj}>{projects}</li>
                            <li key={proj}>
                                
                                <p className="text-sm">Project Title - {proj.title}</p>
                                <p className="text-sm">Description - {proj.description}</p>
                                <p className="text-sm">Github Link - {proj.link}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="bg-white p-4 rounded shadow-md mb-6">
                    <h2 className="text-lg font-semibold mb-2">Experience</h2>
                    <ul className="list-disc pl-6">
                        {user?.experience?.map(exp => (
                            <li key={exp}>
                                
                            <p className="text-sm">Company Name - {exp.company}</p>
                            <p className="text-sm">Description - {exp.description}</p>
                            <p className="text-sm">Location - {exp.location}</p>
                            <p className="text-sm">Position - {exp.position}</p>
                           <p className="text-sm">Timeline - {exp.timeline}</p>
                              
                            </li>
                      
                            
                        ))}
                    </ul>
                </div>
                
                
                


                
           
            </main >

    {/* Footer */ }
    < footer className = "bg-gray-200 py-4 text-center" >
        <p className="text-sm text-gray-600">© 2023 LinkedIn. All rights reserved.</p>
      </footer >
    </div >
  );
};

export default Profile;
