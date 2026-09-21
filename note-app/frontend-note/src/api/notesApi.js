import axiosInstance from "../config/axiosInstance"

 const getAllApi = async() =>{
    const response = await axiosInstance.get('/allNotes')

    return response.data;
}
const createNoteApi = async (data) => {
    const response = await axiosInstance.post("/create", data);

    return response.data;
};
const deleteNoteApi = async(id) => {
    const response = await axiosInstance.delete(`/${id}`)

    return response.data
}
 
const updateNoteApi = async({id, data}) =>{
    const response = await axiosInstance.put(`${id}`, data)
    return response.data
}
export {
    getAllApi,
    createNoteApi,
    deleteNoteApi,
    updateNoteApi
};