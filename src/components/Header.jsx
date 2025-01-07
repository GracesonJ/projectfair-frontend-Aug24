import { faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
            <Navbar className="bg-success d-flex align-items-center" fixed="top">
                <Container>
                    <Link to={'/'} style={{ textDecoration: "none" }}>

                        <Navbar.Brand>
                            <span className='fs-3 text-light mx-5'><FontAwesomeIcon icon={faStackOverflow} className='me-3' />Project Fair</span>
                        </Navbar.Brand>

                    </Link>
                    <button className='btn btn-warning rounded-0 ms-auto'><FontAwesomeIcon icon={faPowerOff} className='me-2' />Logout</button>
                </Container>
            </Navbar>
        </>
    )
}

export default Header