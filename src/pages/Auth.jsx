import React, { useContext, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { faStackOverflow } from '@fortawesome/free-brands-svg-icons/faStackOverflow'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { loginApi, requestApi } from '../service/allApi'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginResponseContext } from '../context/ContextShare'

function Auth({ register }) {
  const {setLoginResponse} = useContext(loginResponseContext)

  const navigate = useNavigate()

  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    password: ""
  })
  console.log(userDetails);

  const handleRegister = async () => {
    const { username, email, password } = userDetails
    if (!username || !email || !password) {
      toast.info("Fill the form")
    } else {
      const result = await requestApi(userDetails)
      console.log(result);
      if (result.status == 200) {
        toast.success(`Registraction Successfull`)

        setUserDetails({
          username: "",
          email: "",
          password: ""
        })
        navigate("/login")

      } else if (result.status == 406) {
        toast.warning(result.response.status)
      }
      else {
        toast.error(`Something went wrong`)
      }

    }
  }

  const handleLogin = async () => {
    const { email, password } = userDetails
    if (!email || !password) {
      toast.info(`Fill the form Completely`)
    } else {
      const result = await loginApi({ email, password })
      console.log(result);
      if (result.status == 200) {
        toast.success(`Login Successfull`)
        setLoginResponse(true)
        sessionStorage.setItem("existingUsers", JSON.stringify(result.data.existingUsers))
        sessionStorage.setItem("token", result.data.token )

        setUserDetails({
          username: "",
          email: "",
          password: ""
        })
        setTimeout(() => {
          navigate("/")
        }, 2000)

      } else if (result.status == 406) {
        toast.warning(result.response.status)
      }
      else {
        toast.error(`Something went wrong`)
      }
    }
  }


  return (
    <>
      <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div className="container w-75">
          <h4><Link to={'/'} className='text-warning' style={{ textDecoration: 'none' }}><FontAwesomeIcon icon={faArrowLeft} className="me-2" />Back Home</Link></h4>
          <div className='bg-success p-3'>
            <Row>
              <Col md={6} className='p-4 d-flex justify-content-center align-items-center'>
                <img src="https://cdn.pixabay.com/animation/2023/06/13/15/12/15-12-30-710_512.gif" alt="no image" width={'70%'} />
              </Col>
              <Col md={6} className='p-5 d-flex justify-content-center text-light'>
                <form className='w-100'>
                  <h4 className='text-center text-light'><FontAwesomeIcon icon={faStackOverflow} className='fa-2x' />Project Fair</h4>
                  {!register ? <h5 className='text-center mb-5'>Sign In to Your Account</h5> :
                    <h5 className='text-center mb-5'>Sign Up to Your Account</h5>}


                  {register &&
                    <div className="mb-3 ">
                      <input type="text" placeholder='Username' className='form-control rounded-0' onChange={(e) => setUserDetails({ ...userDetails, username: e.target.value })} />
                    </div>}
                  <div className="mb-3 ">
                    <input type="text" placeholder='Email ID' className='form-control rounded-0' onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })} />
                  </div>
                  <div className="mb-3">
                    <input type="password" placeholder='Password' className='form-control rounded-0' onChange={(e) => setUserDetails({ ...userDetails, password: e.target.value })} />
                  </div>
                  <div className="mb-3">

                    {!register ?
                      <div>
                        <button type='button' className='btn btn-warning w-100 rounded-0' onClick={handleLogin}>Login</button>
                        <p className='mt-3'>New User? click Here to<Link to={'/register'} className='text-danger'> Register</Link></p>
                      </div>

                      :
                      <div>
                        <button type='button' className='btn btn-warning w-100 rounded-0' onClick={handleRegister}>Register</button>
                        <p className='mt-3'>Already a User? click Here to <Link to={'/login'} className='text-danger'> Login</Link></p>
                      </div>}
                  </div>
                </form>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        theme="colored"

      />
    </>
  )
}

export default Auth