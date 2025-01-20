import { faAnglesDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { serverUrl } from '../service/serviceUrl'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateUserProfileApi } from '../service/allApi';
import Collapse from 'react-bootstrap/Collapse';

function Profile() {
    const [open, setOpen] = useState(false);
    const [updateStatus, setUpdateStatus] = useState({})
    const [preview, setPreview] = useState("")
    const [existingImg, setExistingImg] = useState("")
    const [userDetails, setUserDetails] = useState({
        username: "",
        email: "",
        password: "",
        profile: "",
        linkedin: "",
        github: ""

    })
    
    console.log(userDetails);
    const handleFile = (e) => {
        setUserDetails({ ...userDetails, profile: e.target.files[0] })
    }

    useEffect(() => {
        if (userDetails.profile) {
            setPreview(URL.createObjectURL(userDetails.profile))
        }
    }, [userDetails.profile])
    console.log(preview);




    const handleUpdate = async () => {
        const { username, email, password, profile, github, linkedin } = userDetails
        if (!github || !linkedin) {
            toast.info(`Enter Github & LinkedIn`)
        } else {
            const reqBody = new FormData()
            reqBody.append("username", username)
            reqBody.append("email", email)
            reqBody.append("password", password)
            reqBody.append("github", github)
            reqBody.append("linkedin", linkedin)
            preview ?
                reqBody.append("profile", profile) :
                reqBody.append("profile", existingImg)

            const token = sessionStorage.getItem("token")

            if (preview) {
                const reqHeader = {
                    "Content-Type": "multipart/form-data",
                    "Authorization": `Bearer ${token}`
                }
                const result = await updateUserProfileApi(reqBody, reqHeader)
                console.log(result);
                if (result.status == 200) {

                    toast.success(`Profile Updated Successfully`)
                    sessionStorage.setItem("existingUsers", JSON.stringify(result.data))
                    setUpdateStatus(result)
                } else {
                    toast.error(`Something Went Wrong`)
                }

            } else {
                const reqHeader = {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
                const result = await updateUserProfileApi(reqBody, reqHeader)
                console.log(result);
                if (result.status == 200) {

                    toast.success(`Profile Updated Successfully`)
                    sessionStorage.setItem("existingUsers", JSON.stringify(result.data))
                    setUpdateStatus(result)
                } else {
                    toast.error(`Something Went Wrong`)
                }
            }
        }

    }

    useEffect(() => {
        if (sessionStorage.getItem("existingUsers")) {
            const user = JSON.parse(sessionStorage.getItem("existingUsers"))
            console.log(user);
            setUserDetails({ ...userDetails, username: user.username, email: user.email, password: user.password, github: user.github, linkedin: user.linkedin })
            setExistingImg(user.profile)
        }
    }, [updateStatus])


    return (
        <>
            <div className="p-4 shadow mt-3" onMouseEnter={()=>setOpen(true)} onMouseLeave={()=>setOpen(false)}>
                <div className="d-flex justify-content-between">
                    <h4 className='text-success'>Profile</h4>
                    <button onClick={() => setOpen(!open)} className='btn'>

                    {open == true ? <FontAwesomeIcon icon={faAngleUp} /> :
                    <FontAwesomeIcon icon={faAnglesDown} />}

                    </button>
                </div>

                <Collapse in={open}>
                    <div>
                        <div className="d-flex justify-content-center align-items-center flex-column">
                            <label htmlFor="profileImage" className='d-flex justify-content-center align-items-center'>
                                <input onChange={(e) => handleFile(e)} type="file" id='profileImage' className='d-none' />

                                {existingImg == "" ?
                                    <img src={preview ? preview : "https://static.vecteezy.com/system/resources/thumbnails/002/387/693/small_2x/user-profile-icon-free-vector.jpg"} alt="project image" style={{ width: "200px", height: "200px", borderRadius: "50%", marginBottom: "10px" }} />
                                    :
                                    <img src={preview ? preview : `${serverUrl}/upload/${existingImg}`} alt="project image" style={{ width: "200px", height: "200px", borderRadius: "50%", marginBottom: "10px" }} />}

                            </label>
                            <div className="w-100">
                                <div className="mb-3"><input onChange={(e) => setUserDetails({ ...userDetails, github: e.target.value })} value={userDetails?.github} type="text" placeholder='Github' className='form-control' /></div>
                                <div className="mb-4"><input onChange={(e) => setUserDetails({ ...userDetails, linkedin: e.target.value })} value={userDetails?.linkedin} type="text" placeholder='LinkedIn' className='form-control' /></div>
                                <div className="mb-3 text-center">
                                    <button onClick={handleUpdate} className='btn btn-success w-75'>Update Profile</button></div>
                            </div>
                        </div>
                    </div>
                </Collapse>

                <ToastContainer
                    position="top-center"
                    autoClose={2000}
                    theme="colored"

                />
            </div>
        </>
    )
}

export default Profile