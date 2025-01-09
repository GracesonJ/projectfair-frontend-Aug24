import { commonApi } from "./commonApi"
import { serverUrl } from "./serviceUrl"


// register request
export const requestApi = async(reqBody)=>{
    return await commonApi('POST',`${serverUrl}/register`,reqBody,"")
}

//login request
export const loginApi = async(reqBody)=>{
    return await commonApi('POSt', `${serverUrl}/login`, reqBody,"")
}

//add-project
export const addProjectApi = async(reqBody, reqHeader)=>{
    return await commonApi('POST', `${serverUrl}/add-project`, reqBody, reqHeader)
}

// get home projects
export const homeProjectApi = async()=>{
    return await commonApi('GET', `${serverUrl}/home-project`)
}

//all projects
export const allProjectApi = async()=>{
    return await commonApi('GET', `${serverUrl}/all-project`)
}

// all user projects
export const allUserProjectApi = async(reqHeader)=>{
    return await commonApi('GET', `${serverUrl}/user-project`,"",reqHeader)
}