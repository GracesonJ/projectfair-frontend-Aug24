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

