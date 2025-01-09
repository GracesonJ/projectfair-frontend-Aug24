import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight'
import photo from '../assets/designer.svg'
import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { homeProjectApi } from '../service/allApi'


function Home() {
  const [isLogin, setIsLogin] = useState(false)
  const [homeProject, setHomeProject] = useState([])

  const getHomeProject = async () => {
    const result = await homeProjectApi()
    // console.log(result);
    setHomeProject(result.data)
  }

  console.log(homeProject);


  useEffect(() => {
    getHomeProject()
    if (sessionStorage.getItem("token")) {
      setIsLogin(true)
    } else {
      setIsLogin(false)
    }
  }, [])

  return (
    <>
      <div style={{ height: "100vh" }} className='bg-success p-5'>
        <div className="container-fluid mt-5">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-6">
              <h1 className='text-light' style={{ fontSize: "70px" }}>Project fair</h1>
              <p>One stop destination for all software development Projects</p>

              {isLogin == false ?
                <Link to={'/login'}><button className='btn text-light p-1 mt-3'>Get Started <FontAwesomeIcon icon={faArrowRight} /></button></Link>
                :
                <Link to={'/dashboard'}><button className='btn text-light p-1 mt-3'> Manage Projects <FontAwesomeIcon icon={faArrowRight} /></button></Link>
              }

            </div>
            <div className="col-md-6 mt-4 d-flex justify-content-center">
              <img src={photo} alt="no img" className='w-75 p-3' />
            </div>
          </div>
        </div>
      </div>

      {/* Explore our Projects */}
      <div>
        <h2 className='text-center mt-5'>Explore Our Projects</h2>
        <div className="container">
          <div className="row mt-5">
            {
              homeProject?.map((item) => (
                <div className="col-md-4"><ProductCard project={item} /></div>
              ))
            }
          </div>
        </div>
        <Link to={'/projects'} className='text-danger'><p className=' text-center mt-5'>See more Projects...</p></Link>
      </div>
    </>
  )
}

export default Home