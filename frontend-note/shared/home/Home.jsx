import useNoteForm from "../../src/features/notes/hooks/useNoteForm";

const Home = () => {
  const { navigate } = useNoteForm();
  return (
    <section className="min-h-[calc(100vh-72px)] flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl font-bold">Organize Your Notes</h1>

        <p className="mt-5 text-slate-400 text-lg">
          Create, manage and organize your notes easily.
        </p>

        <button
          onClick={() => navigate("/create")}
          className="
        mt-8 px-6 py-3 bg-blue-600 rounded-lg cursor-pointer text-white transition-all duration-300 ease-out hover:scale-105 hover:bg-blue-700 hover:shadow-lg active:scale-95"
        >
          Create Your First Note
        </button>
      </div>
    </section>
  );
};

export default Home;
