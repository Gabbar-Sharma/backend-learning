import useNoteForm from "../../hooks/useNoteForm";


const NoteForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        errors,
        onSubmit,
        isCreating
    } = useNoteForm();

   

    return (
        <div className="w-full max-w-2xl mx-auto">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">

                {/* Header */}
                <div className="mb-6">
                    <h2 className="text-2xl font-bold text-white">
                        Create New Note
                    </h2>

                    <p className="text-slate-400 mt-1">
                        Add a title and description for your note.
                    </p>
                </div>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-5"
                >

                    {/* Title */}
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                            Title
                        </label>

                        <input
                            type="text"
                            placeholder="Enter note title"
                            {...register("title", {
                                required: "Title is required",
                            })}
                            className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg text-white placeholder-slate-500 outline-none focus:border-blue-500"
                        />

                        {errors.title && (
                            <p className="text-red-400 text-sm mt-2">
                                {errors.title.message}
                            </p>
                        )}
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                            Description
                        </label>

                        <textarea
                            rows="6"
                            placeholder="Write your note..."
                            {...register("description", {
                                required: "Description is required",
                            })}
                            className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg text-white placeholder-slate-500 outline-none resize-none focus:border-blue-500"
                        />

                        {errors.description && (
                            <p className="text-red-400 text-sm mt-2">
                                {errors.description.message}
                            </p>
                        )}
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-end gap-3 pt-2">

                        <button
                            type="button"
                            onClick={() => reset()}
                            className="px-5 py-3 rounded-lg border border-slate-700 text-slate-300 hover:bg-slate-800 transition"
                        >
                            Clear
                        </button>

                        <button
                            type="submit"
                            disabled={isCreating}
                            className="px-5 py-3 bg-blue-600 rounded-lg text-white hover:bg-blue-700 transition disabled:opacity-50"
                        >
                            {isCreating ? "Creating..." : "Create Note"}
                        </button>

                    </div>

                </form>
            </div>
        </div>
    );
};

export default NoteForm;