import { useQuery } from "@tanstack/react-query";
import { getAllApi } from "../../../api/notesApi";


export const useNotes = () =>{
    return useQuery({
        queryKey: ["notes"],
        queryFn: getAllApi,
        staleTime: 5000,
    })
}