import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { createNoteApi } from '../../../api/notesApi'



function useNoteForm() {
       const navigate = useNavigate()
    const queryClient = useQueryClient()

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()


    const createNoteMutation = useMutation({
        mutationFn: createNoteApi,
        onSuccess: () =>{
        queryClient.invalidateQueries({
            queryKey: ['notes'],
        })
        reset();

    navigate("/notes");

      },
       onError: (error) => {
            console.log("Create note error:", error);
        },
    })
      
    const onSubmit = (data) => {
console.log("Form data:", data);
         createNoteMutation.mutate(data)
        reset();
    };
      

  return {
        register,
        handleSubmit,
        reset,
        errors,
        onSubmit,
        navigate,
         isCreating: createNoteMutation.isPending,
        createError: createNoteMutation.error,
    };
}

export default useNoteForm