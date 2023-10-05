import axios from "axios"


/******************** auth ************************/

export const signin = async (data) => {
    return await axios.post(`/auth/signin`, data);
}

export const signinGoogle = async (data) => {
    return await axios.post(`/auth/signin/google`, data);
}

export const signup = async (data) => {
    // console.log(data);
    return await axios.post("/auth/signup", data);
}

/*******user*******/
export const getUser = async (email) => {
    return await axios.get(`/user/profile`, {
        headers: {
            token: localStorage.getItem("token"),

        }
    })
}

export const searchPeople = async (name) => {
    return await axios.get(`/user/search/${name}`, {
        headers: {
            token: localStorage.getItem("token"),

        }
    })
}

export const getUserName = async (id) => {
    return await axios.get(`/user/getusername`, {
        headers: {
            token: localStorage.getItem("token"),

        }
    })
}

// export const userInfoById = async (id) => {
//     return await axios.get(`/user/getuserbyid/${id}`);
// }

export const editUser = async (data) => {
    console.log(data);
    return await axios.put(`/user/addnewuser`, { credentials: data });
}

export const getmyPosts = async () => {
    return await axios.get(`/user/getmyposts`,
        {
            headers: {
                token: localStorage.getItem("token"),

            }
        });
}

export const jobsApply = async () => {
    return await axios.get(`/user/jobapply/:job_id`,
        {
            headers: {
                token: localStorage.getItem("token"),

            }
        });
}

/*****posts*****/
// export const editPosts = async (data, id) => {
//     console.log(data);
//     return await axios.put(`/company/editcompany/${id}`, { credentials: data },
//         {
//             headers: {
//                 token: localStorage.getItem("volintToken")
//             }
//         });
// }

export const newPost = async (data) => {
    return await axios.post(`/posts/addnewpost`, { credentials: data },
        {
            headers: {
                token: localStorage.getItem('token')
            }
        });
}

const uploadImage = (coachingId, formData) => {
    console.log(formData);
    return axios.post(`/coaching/upload?coachingId=${coachingId}`, formData, 
    {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  }

export const getAllPost = async () => {
    return await axios.get(`/posts/getallposts`);
}

// export const searchUser = async (name) => {
//     return await axios.get(`/user/profile/${name}`);
// }

export const getAllUser = async () => {
    return await axios.get(`/user/profile`);
}
// export const getMyPost = async () => {
//     return await axios.get(`/posts/getmyposts`);
// }

export const addcomment = async (data, post_id) => {
    return await axios.put(`/posts/addcomments/${post_id}`, data ,
        {
            headers: {
                token: localStorage.getItem('token')
            }
        });
}

export const getpost = async (post_id) => {
    return await axios.get(`/posts/getpost/${post_id}`);
}




/*****Jobs*****/
export const newJob = async (data) => {
    return await axios.post(`/job/addnewjob`, { credentials: data },
        {
            headers: {
                token: localStorage.getItem('token')
            }
        });
}

/**to get a particular job to apply */
export const getJob = async (job_id) => {
    return await axios.get(`/job/getjob/${job_id}`);
}

export const getAllJobs = async () => {
    return await axios.get(`/job/getalljobs`);
}

export const getmyApplications = async () => {
    return await axios.get(`/user/getmyapplications`,
        {
            headers: {
                token: localStorage.getItem("token"),

            }
        });
}

export const getmyJobs = async () => {
    return await axios.get(`/user/getmyjobs`,
        {
            headers: {
                token: localStorage.getItem("token"),

            }
        });
}


