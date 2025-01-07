import React from 'react'
import Addproject from './Addproject'
import Edit from './Edit'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faTrash } from '@fortawesome/free-solid-svg-icons'

function Myproject() {
    return (
        <>
            <div className="p-5 shadow">
                <div className="d-flex justify-content-between">
                    <h3 className='text-success'>My Projects</h3>
                    <Addproject/>
                </div>
                <div className="p-3 bg-light mt-4 rounded d-flex align-item-center justify-content-between">
                    <h5>Media Player</h5>
                    <div className="d-flex mt-2">
                        <Edit/>
                        <FontAwesomeIcon icon={faGithub} className='me-4 text-warning' />
                        <FontAwesomeIcon icon={faGlobe}  className='me-4 text-success'/>
                        <FontAwesomeIcon icon={faTrash}  className='me-4 text-danger'/>
                    </div>
                </div>

                <div className="p-3 bg-light mt-4 rounded d-flex align-item-center justify-content-between">
                    <h5>Media Player</h5>
                    <div className="d-flex mt-2">
                        <Edit/>
                        <FontAwesomeIcon icon={faGithub} className='me-4 text-warning' />
                        <FontAwesomeIcon icon={faGlobe}  className='me-4 text-success'/>
                        <FontAwesomeIcon icon={faTrash}  className='me-4 text-danger'/>
                    </div>
                </div>

                <div className="p-3 bg-light mt-4 rounded d-flex align-item-center justify-content-between">
                    <h5>Media Player</h5>
                    <div className="d-flex mt-2">
                        <Edit/>
                        <FontAwesomeIcon icon={faGithub} className='me-4 text-warning' />
                        <FontAwesomeIcon icon={faGlobe}  className='me-4 text-success'/>
                        <FontAwesomeIcon icon={faTrash}  className='me-4 text-danger'/>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Myproject