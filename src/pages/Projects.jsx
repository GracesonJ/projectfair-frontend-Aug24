import React from 'react'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import ProductCard from '../components/ProductCard'
import { Link } from 'react-router-dom'


Header
function Projects() {
  return (
    <>
      <div>
        <Header />
        <h3 className='text-center mt-4'>All projects</h3>

        {/* not login */}
        <div className="mt-5">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-3"></div>
              <div className="col-md-6 d-flex justify-content-center align-items-center flex-column">
                <img src="https://cdn.dribbble.com/users/8619169/screenshots/16514320/media/0dc828901898c59928c3d69718791941.gif" alt="No image" className='w-75'/>
                <h4 className='text-center'>Please <Link to={'/login'}>Login</Link> to see more Projects</h4>
              </div>
              <div className="col-md-3"></div>
            </div>
          </div>
        </div>

        {/* logged in */}
        {/* <div>
          <div className="mt-5">
            <div className="container">
              <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4 d-flex">
                  <input type="text" placeholder='Technologies' className='form-control shadow' />
                  <FontAwesomeIcon style={{ color: "lightgrey", marginTop: "10px", marginLeft: "-30px" }} icon={faMagnifyingGlass} />
                </div>
                <div className="col-md-4"></div>
              </div>
            </div>
          </div>
          <div className="container mt-5 p-1">
            <div className="row">
              <div className="col-md-3"><ProductCard/></div>
              <div className="col-md-3"><ProductCard/></div>
              <div className="col-md-3"><ProductCard/></div>
              <div className="col-md-3"><ProductCard/></div>
            </div>
          </div>
        </div> */}
      </div>

    </>
  )
}

export default Projects