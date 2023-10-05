import React, { useEffect, useState } from 'react'
import Add_post from '../../pages/add_post/add_post';
import { getUserName, newPost } from '../../api/api';
import formData from "form-data"
import Resizer from "react-image-file-resizer";

const New_post = () => {

    const [name, setname] = useState()
    const [title, settitle] = useState()
    const [description, setdescription] = useState()
    const [image, setimage] = useState(null);
    const [images, setimages] = useState([]);
    // var images=[]
    const [imgname, setimgname] = useState()
    const [chosen, setChosen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    // const [image, setimage] = useState()

    useEffect(() => {

        Promise.resolve(getUserName()).then((res) => {
            console.log(res);
            setname(res.data)
        }).catch((e) => {
            console.log(e);
        })
    }, [])


    // const handleFile = (e) => {
    //     let file = e.target.files[0];
    //     // formData.append('image', e.target.files[0]);
    //     let baseURL = "";
    //     // Make new FileReader
    //     let reader = new FileReader();
    //     setimgname(file.name)
    //     // Convert the file to base64 text
    //     reader.readAsDataURL(file);
    //     // on reader load somthing...
    //     reader.onload = () => {
    //         // Make a fileInfo Object
    //         console.log("Called", reader);
    //         baseURL = reader.result;
    //         setimage(baseURL);
    //     };
    //     setimages([...images, imgname]);
    //     // images.push(imgname);
    //     // images=
    // };

    const Share_post = () => {

        Promise.resolve(newPost({ name, title, description, image })).then((response) => {
            console.log(response);
        })
            .catch((error) => {
                console.error('Error posting', error);
            });
    }


    // const resizeFile = (file) =>
    //     new Promise((resolve) => {
    //         Resizer.imageFileResizer(
    //             file,
    //             600,
    //             600,
    //             file.type.split('/')[1],
    //             20,
    //             0,
    //             (uri) => {
    //                 resolve(uri);
    //             },
    //             "base64"
    //         );
    //     });

    // const handleFile = async (e) => {

    //     let file = e.target.files;
    //     //convert files list into array
    //     file = Array.from(file);
    //     //then use promise all to resolve each promise
    //     file = Promise.all(file.map(async (element, i) => {

    //         if (element.size > 3000000) {
    //             alert(`Size of ${element.name} should be less than 3 MB`);
    //             return;
    //         }
    //         return new Promise((resolve, reject) => {
    //             resizeFile(element)
    //                 .then(res => resolve(res));
    //         });
    //     })).then(el => setimages(el));

    // };
    //seperate function to handle image file
    const handleFile = (e) => {
        let file = e.target.files[0];
        let baseURL = "";
        // Make new FileReader
        let reader = new FileReader();

        // Convert the file to base64 text
        reader.readAsDataURL(file);
        // on reader load somthing...
        reader.onload = () => {
            // Make a fileInfo Object
            console.log("Called", reader);
            baseURL = reader.result;
            setimage(baseURL);
        };
    };




    return (
        <div className='h-screen bg-gray-100 flex justify-center items-center w-full'>
            <div class="sm:w-1/3">
                <form class="bg-white shadow-2xl rounded px-8 pt-6 pb-8 mb-4 border border-grey-100">
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                            What do you want to talk about?
                        </label>
                        <div>
                            <input onChange={(e) => settitle(e.target.value)} value={title} class="shadow-xl appearance-none border rounded py-2 px-3 w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-4" id="title" type="text" placeholder="title"></input>
                        </div>
                        <div>
                            <input onChange={(e) => setdescription(e.target.value)} value={description} class="shadow-xl appearance-none border rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline my-4" id="description" type="text" placeholder="Description"></input>
                        </div>
                        {/* <textarea onChange={(e) => setdescription(e.target.value)} value={description} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="description" type="text" placeholder="Description" /> */}
                    </div>
                    <div class="mb-6">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                            select photos
                        </label>

                        <input accept="image/*"
                            type="file"
                            multiple
                            onChange={(e) => {
                                setChosen(true);
                                setSelectedImage(e.target.files[0]);
                                handleFile(e);
                            }} class="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" />
                            {
                                image && <img alt={"not found"} width={"250px"} src={image} />
                            }
                        {/* {
                            images?.map((im) => {
                                return (
                                    <img alt={"not found"} width={"250px"} src={im} />
                                )
                            })
                        } */}
                        {/* <img src={`data:image/jpeg;base64,${image}`} alt="binary" /> */}
                    </div>

                    <div class="flex items-center justify-between">
                        <button onClick={Share_post} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Share Post
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}



export default New_post