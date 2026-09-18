import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteNoteApi } from "../../../api/notesApi"


const useDeleteNote = () =>{
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: deleteNoteApi,
        onSuccess: () =>{
            queryClient.invalidateQueries({
                queryKey:[ "/notes"]
            })

        },
         onError: (error) => {
            console.log("Delete note error:", error);
        },
    })
}

export default useDeleteNote;