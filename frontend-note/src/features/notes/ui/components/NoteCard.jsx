import useDeleteNote from "../../hooks/useDeleteNote";

const NoteCard = ({ note }) => {
    const {
        mutate: deleteNote,
        isPending,

    } = useDeleteNote()
    return (
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
            
            <h2 className="text-xl font-semibold text-white">
                {note.title}
            </h2>

            <p className="mt-2 text-slate-400">
                {note.description}
            </p>

            <div className="flex gap-3 mt-5">
                <button
                    
                    className="px-4 py-2 rounded-lg bg-blue-600 text-white"
                >
                    Update
                </button>

                <button
                    onClick={() => deleteNote(note._id)}
                    disabled={isPending}
                    className="px-4 py-2 rounded-lg bg-red-600 text-white disabled:opacity-50"
                >
                    {isPending ? "Deleting..." : "Delete"}
                </button>
            </div>
        </div>
    );
};

export default NoteCard;