import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateNoteApi } from "../../../api/notesApi"

const useUpdateNote = () =>{
    const queryClient = useQueryClient()
     return useMutation({
             mutationFn: updateNoteApi,
        onSuccess: () =>{
            queryClient.invalidateQueries({
                queryKey:["notes"],
            })
        },
        onError: (error) =>{
            console.log(error)
        }
     })

}

export default useUpdateNote