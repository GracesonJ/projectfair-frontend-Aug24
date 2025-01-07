import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Profile() {
    return (
        <>
            <div className="p-4 shadow">
                <div className="d-flex justify-content-between">
                    <h4 className='text-success'>Profile</h4>
                    <button className='btn'><FontAwesomeIcon icon={faAngleUp} /></button>
                </div>
                <div className="d-flex justify-content-center align-items-center flex-column">
                    <label htmlFor="profileImage" className='d-flex justify-content-center align-items-center'>
                        <input type="file" id='profileImage' className='d-none' />
                        <img src="https://static.vecteezy.com/system/resources/thumbnails/002/387/693/small_2x/user-profile-icon-free-vector.jpg" alt="project image" className='w-75' />
                    </label>
                    <div className="w-100">
                        <div className="mb-3"><input type="text" placeholder='Github' className='form-control' /></div>
                        <div className="mb-4"><input type="text" placeholder='LinkedIn' className='form-control' /></div>
                        <div className="mb-3 text-center"><button className='btn btn-success w-75'>Update Profile</button></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile