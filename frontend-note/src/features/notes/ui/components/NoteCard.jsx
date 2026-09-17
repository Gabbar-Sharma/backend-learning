const NoteCard = ({ note, onUpdate, onDelete }) => {
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
                    onClick={() => onUpdate(note)}
                    className="px-4 py-2 rounded-lg bg-blue-600 text-white"
                >
                    Update
                </button>

                <button
                    onClick={() => onDelete(note._id)}
                    className="px-4 py-2 rounded-lg bg-red-600 text-white"
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default NoteCard;