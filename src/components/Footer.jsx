
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook'
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin'
import { faStackOverflow } from '@fortawesome/free-brands-svg-icons/faStackOverflow'
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'


function Footer() {
    return (
        <>
            <div className='p-5 bg-success mt-5'>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4">
                            <h3>Project Fair <FontAwesomeIcon icon={faStackOverflow} className='ms-3' /></h3>
                            <p className='mt-3' style={{ textAlign: "justify" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem at provident id dolores vitae culpa. Suscipit culpa aliquid facilis, magni necessitatibus omnis veritatis perspiciatis a ducimus earum numquam eligendi. Corporis?</p>
                        </div>
                        <div className="col-md-2 d-md-flex justify-content-center">
                            <div>
                                <h2 className='text-light'>Guides</h2>
                                <p className='mt-3'>Home</p>
                                <p>Project</p>
                                <p>Dashboard</p>
                            </div>
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-2">
                        <div>
                                <h2 className='text-light'>Links</h2>
                                <p className='mt-3'>React</p>
                                <p>React bootstrap</p>
                                <p>Bootswatch</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div>
                                <h2 className='text-light'>Contact us</h2>
                                <div className='d-flex mt-3'>
                                    <input type="text" placeholder='Email Id' className='form-control rounded-0' />
                                    <button className='btn btn-warning rounded-0 mx-2'>Subscribe</button>
                                </div>
                                <div className="d-flex mt-4 justify-content-between mt-3">
                                    <FontAwesomeIcon className='fa-2x text-light' icon={faFacebook} />
                                    <FontAwesomeIcon className='fa-2x text-light' icon={faInstagram} />
                                    <FontAwesomeIcon className='fa-2x text-light' icon={faTwitter} />
                                    <FontAwesomeIcon className='fa-2x text-light' icon={faLinkedin} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>


    )
}

export default Footer