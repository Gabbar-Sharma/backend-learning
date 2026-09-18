import { useState } from "react";

import useDeleteNote from "../../hooks/useDeleteNote";
import useUpdateNote from "../../hooks/useUpdateNote";


const NoteCard = ({ note }) => {

    // ================= MODAL STATE =================

    // Note details modal open/close
    const [isOpen, setIsOpen] = useState(false);


    // Details mode ya edit mode
    const [isEditing, setIsEditing] = useState(false);


    // ================= EDIT FORM STATE =================

    // Title ki temporary value
    const [title, setTitle] = useState(note.title);


    // Description ki temporary value
    const [description, setDescription] = useState(note.description);


    // ================= DELETE MUTATION =================

    const {
        mutate: deleteNote,
        isPending: isDeleting,
    } = useDeleteNote();


    // ================= UPDATE MUTATION =================

    const {
        mutate: updateNote,
        isPending: isUpdating,
    } = useUpdateNote();


    // ================= UPDATE FUNCTION =================

    const handleUpdate = () => {

        // Update API call
        updateNote(
            {
                id: note._id,

                data: {
                    title,
                    description,
                },
            },

            {
                // API successful hone ke baad
                onSuccess: () => {

                    // Edit mode band
                    setIsEditing(false);
                },
            }
        );
    };


    // ================= CLOSE MODAL =================

    const handleClose = () => {

        // Modal close
        setIsOpen(false);

        // Edit mode band
        setIsEditing(false);

        // Agar changes save nahi hue
        // toh original data wapas
        setTitle(note.title);
        setDescription(note.description);
    };


    return (
        <>
            {/* =================================================
                NOTE CARD
            ================================================= */}

            <div
                // Card par click → details modal
                onClick={() => setIsOpen(true)}

                className="
                    h-[320px]
                    bg-slate-900
                    border border-slate-800
                    rounded-xl
                    p-6
                    flex flex-col
                    cursor-pointer
                    hover:border-slate-600
                    transition
                "
            >

                {/* ================= NOTE CONTENT ================= */}

                <div className="flex-1 overflow-hidden">

                    {/* Title */}
                    <h2 className="
                        text-xl
                        font-semibold
                        text-white
                        line-clamp-2
                    ">
                        {note.title}
                    </h2>


                    {/* Description */}
                    <p className="
                        mt-3
                        text-slate-400
                        line-clamp-5
                        break-words
                    ">
                        {note.description}
                    </p>

                </div>


                {/* ================= BUTTONS ================= */}

                <div
                    // Button click se card ka onClick trigger nahi hoga
                    onClick={(event) => event.stopPropagation()}

                    className="
                        flex
                        gap-3
                        mt-auto
                        pt-5
                    "
                >

                    {/* UPDATE BUTTON */}

                    <button
                        onClick={() => {

                            // Modal open
                            setIsOpen(true);

                            // Edit mode open
                            setIsEditing(true);

                        }}

                        className="
                            px-5
                            py-2
                            rounded-lg
                            bg-blue-600
                            text-white
                            hover:bg-blue-700
                        "
                    >
                        Update
                    </button>


                    {/* DELETE BUTTON */}

                    <button
                        onClick={() => deleteNote(note._id)}

                        disabled={isDeleting}

                        className="
                            px-5
                            py-2
                            rounded-lg
                            bg-red-600
                            text-white
                            hover:bg-red-700
                            disabled:opacity-50
                        "
                    >
                        {isDeleting
                            ? "Deleting..."
                            : "Delete"
                        }
                    </button>

                </div>

            </div>


            {/* =================================================
                NOTE DETAILS / EDIT MODAL
            ================================================= */}

            {isOpen && (

                <div
                    // Modal ke bahar click → close
                    onClick={handleClose}

                    className="
                        fixed
                        inset-0
                        z-50
                        flex
                        items-center
                        justify-center
                        bg-black/70
                        p-4
                    "
                >

                    {/* ================= MODAL BOX ================= */}

                    <div
                        // Modal ke andar click se modal close nahi hoga
                        onClick={(event) => event.stopPropagation()}

                        className="
                            w-full
                            max-w-2xl
                            max-h-[80vh]
                            overflow-y-auto
                            rounded-2xl
                            bg-slate-900
                            border border-slate-700
                            p-7
                            shadow-2xl
                        "
                    >

                        {/* ================= HEADER ================= */}

                        <div className="
                            flex
                            items-start
                            justify-between
                            gap-4
                        ">

                            <h2 className="
                                text-2xl
                                font-bold
                                text-white
                            ">
                                {isEditing
                                    ? "Edit Note"
                                    : note.title
                                }
                            </h2>


                            {/* Close X */}

                            <button
                                onClick={handleClose}

                                className="
                                    text-2xl
                                    text-slate-400
                                    hover:text-white
                                "
                            >
                                ×
                            </button>

                        </div>


                        {/* =================================================
                            VIEW MODE
                        ================================================= */}

                        {!isEditing && (

                            <>
                                {/* Full Description */}

                                <div className="mt-6">

                                    <p className="
                                        text-lg
                                        leading-8
                                        text-slate-300
                                        whitespace-pre-wrap
                                        break-words
                                    ">
                                        {note.description}
                                    </p>

                                </div>


                                {/* Close Button */}

                                <div className="
                                    mt-8
                                    flex
                                    justify-end
                                ">

                                    <button
                                        onClick={handleClose}

                                        className="
                                            px-5
                                            py-2
                                            rounded-lg
                                            bg-slate-700
                                            text-white
                                            hover:bg-slate-600
                                        "
                                    >
                                        Close
                                    </button>

                                </div>
                            </>
                        )}


                        {/* =================================================
                            EDIT MODE
                        ================================================= */}

                        {isEditing && (

                            <div className="mt-6 space-y-5">

                                {/* ================= TITLE ================= */}

                                <div>

                                    <label className="
                                        block
                                        mb-2
                                        text-sm
                                        text-slate-300
                                    ">
                                        Title
                                    </label>


                                    <input
                                        type="text"

                                        value={title}

                                        onChange={(event) =>
                                            setTitle(event.target.value)
                                        }

                                        className="
                                            w-full
                                            rounded-lg
                                            bg-slate-800
                                            border border-slate-700
                                            px-4
                                            py-3
                                            text-white
                                            outline-none
                                            focus:border-blue-500
                                        "
                                    />

                                </div>


                                {/* ================= DESCRIPTION ================= */}

                                <div>

                                    <label className="
                                        block
                                        mb-2
                                        text-sm
                                        text-slate-300
                                    ">
                                        Description
                                    </label>


                                    <textarea
                                        rows="8"

                                        value={description}

                                        onChange={(event) =>
                                            setDescription(event.target.value)
                                        }

                                        className="
                                            w-full
                                            rounded-lg
                                            bg-slate-800
                                            border border-slate-700
                                            px-4
                                            py-3
                                            text-white
                                            outline-none
                                            focus:border-blue-500
                                            resize-none
                                        "
                                    />

                                </div>


                                {/* ================= EDIT BUTTONS ================= */}

                                <div className="
                                    flex
                                    justify-end
                                    gap-3
                                ">

                                    {/* CANCEL */}

                                    <button
                                        onClick={() => {

                                            // Original data wapas
                                            setTitle(note.title);
                                            setDescription(note.description);

                                            // Edit mode band
                                            setIsEditing(false);

                                        }}

                                        className="
                                            px-5
                                            py-2
                                            rounded-lg
                                            bg-slate-700
                                            text-white
                                            hover:bg-slate-600
                                        "
                                    >
                                        Cancel
                                    </button>


                                    {/* SAVE */}

                                    <button
                                        onClick={handleUpdate}

                                        disabled={isUpdating}

                                        className="
                                            px-5
                                            py-2
                                            rounded-lg
                                            bg-blue-600
                                            text-white
                                            hover:bg-blue-700
                                            disabled:opacity-50
                                        "
                                    >
                                        {isUpdating
                                            ? "Updating..."
                                            : "Save Changes"
                                        }
                                    </button>

                                </div>

                            </div>
                        )}

                    </div>

                </div>
            )}

        </>
    );
};


export default NoteCard;