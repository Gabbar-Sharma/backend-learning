import { useNotes } from "../../hooks/useNotes"
import NoteCard from "../components/NoteCard";
import NoteForm from "../components/NoteForm";

function Notes() {
    
  const { data,
        isLoading,
        isError,
        error,
      } = useNotes

         if (isLoading) {
        return <h1>Loading...</h1>;
    }

    if (isError) {
        return <h1>{error.message}</h1>;
    }      
        const notes = data?.data || []

  return (
    <div className="min-h-screen bg-slate-950 p-6">

            <h1 className="text-3xl font-bold text-white mb-6">
                My Notes
            </h1>

            <NoteForm/>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

                {/* 👇 Ab notes ko yahan use karo */}
                {notes.map((note) => (
                    <NoteCard
                        key={note._id}
                        note={note}
                    />
                ))}

            </div>

        </div>
  )
}

export default Notes