import axiosInstance from "../config/axiosInstance"


export const getAllApi = async() =>{
    const response = await axiosInstance.get('/allNotes')

    return response.data;
}