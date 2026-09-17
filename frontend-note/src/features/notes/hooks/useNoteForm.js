import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";



function useNoteForm() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data);
        reset();
    };
       const navigate = useNavigate()
  return {
        register,
        handleSubmit,
        reset,
        errors,
        onSubmit,
        navigate
    };
}

export default useNoteForm