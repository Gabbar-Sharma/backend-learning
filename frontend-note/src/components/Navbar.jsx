import { useState } from "react";
import { useNavigate } from "react-router";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState("");
    
     const navigate = useNavigate()

    const handleClearSearch = () => {
        setSearch("");
    };

    return (
        <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/95 backdrop-blur">

            <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* ================= TOP BAR ================= */}

                <div className="flex h-16 items-center justify-between gap-4">

                    {/* LOGO */}
                    <div
                    onClick={() => navigate('/home')}
                     className="flex shrink-0 items-center cursor-pointer gap-2">

                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-slate-950">

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.8"
                                stroke="currentColor"
                                className="h-5 w-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 12h6m-6 4h6M9 8h6m5 12H4a2 2 0 01-2-2V6a2 2 0 012-2h16a2 2 0 012 2v12a2 2 0 01-2 2z"
                                />
                            </svg>

                        </div>

                        <span className="text-lg font-bold tracking-tight text-white">
                            MyNotes
                        </span>

                    </div>


                    {/* ================= DESKTOP SEARCH ================= */}

                    <div className="hidden flex-1 md:block md:max-w-sm lg:max-w-md">

                        <div className="relative">

                            {/* Search Icon */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.8"
                                stroke="currentColor"
                                className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m21 21-4.35-4.35m1.35-5.65a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>


                            {/* Input */}
                            <input
                                type="text"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="Search notes..."
                                className="
                                    w-full
                                    rounded-xl
                                    border
                                    border-slate-800
                                    bg-slate-900
                                    py-2.5
                                    pl-10
                                    pr-10
                                    text-sm
                                    text-slate-200
                                    outline-none
                                    transition

                                    placeholder:text-slate-500

                                    focus:border-slate-600
                                    focus:ring-2
                                    focus:ring-slate-800
                                "
                            />


                            {/* CLEAR BUTTON */}
                            {search.length > 0 && (
                                <button
                                    type="button"
                                    onClick={handleClearSearch}
                                    className="
                                        absolute
                                        right-3
                                        top-1/2
                                        flex
                                        h-5
                                        w-5
                                        -translate-y-1/2
                                        items-center
                                        justify-center
                                        rounded-full
                                        text-slate-500
                                        transition

                                        hover:bg-slate-700
                                        hover:text-white
                                    "
                                    aria-label="Clear search"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="2"
                                        stroke="currentColor"
                                        className="h-3.5 w-3.5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            )}

                        </div>

                    </div>


                    {/* ================= DESKTOP NAVIGATION ================= */}

                    <div className="hidden items-center gap-1 md:flex">

                        <button
                             onClick={() => navigate("/notes")}
                            className="
                                rounded-xl
                                px-3
                                py-2
                                text-sm
                                font-medium
                                text-slate-400
                                transition

                                hover:bg-slate-900
                                hover:text-white
                            "
                        >
                            Notes
                        </button>

                        <button
                            className="
                                rounded-xl
                                px-3
                                py-2
                                text-sm
                                font-medium
                                text-slate-400
                                transition

                                hover:bg-slate-900
                                hover:text-white
                            "
                        >
                            Pinned
                        </button>

                        <button
                            className="
                                rounded-xl
                                px-3
                                py-2
                                text-sm
                                font-medium
                                text-slate-400
                                transition

                                hover:bg-slate-900
                                hover:text-white
                            "
                        >
                            Archive
                        </button>


                        {/* New Note */}
                        <button
                            onClick={() => navigate("/create")}
                            className="
                                ml-2
                                flex
                                items-center
                                gap-2
                                rounded-xl
                                bg-white
                                px-4
                                py-2.5
                                text-sm
                                font-semibold
                                text-slate-950
                                transition

                                hover:bg-slate-200
                            "
                        >
                            <span className="text-base">
                                +
                            </span>

                            New Note
                        </button>

                    </div>


                    {/* ================= MOBILE BUTTON ================= */}

                    <button
                        type="button"
                        onClick={() => setIsOpen(!isOpen)}
                        className="
                            rounded-xl
                            p-2
                            text-slate-400
                            transition

                            hover:bg-slate-900
                            hover:text-white

                            md:hidden
                        "
                        aria-label="Toggle menu"
                    >

                        {isOpen ? (

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                className="h-6 w-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>

                        ) : (

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                className="h-6 w-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>

                        )}

                    </button>

                </div>


                {/* ================= MOBILE MENU ================= */}

                {isOpen && (
                    <div className="border-t border-slate-800 py-4 md:hidden">

                        {/* Mobile Search */}
                        <div className="relative mb-4">

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.8"
                                stroke="currentColor"
                                className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m21 21-4.35-4.35m1.35-5.65a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>


                            <input
                                type="text"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="Search notes..."
                                className="
                                    w-full
                                    rounded-xl
                                    border
                                    border-slate-800
                                    bg-slate-900
                                    py-3
                                    pl-10
                                    pr-10
                                    text-sm
                                    text-slate-200
                                    outline-none

                                    placeholder:text-slate-500

                                    focus:border-slate-600
                                    focus:ring-2
                                    focus:ring-slate-800
                                "
                            />


                            {/* Mobile Clear */}
                            {search.length > 0 && (
                                <button
                                    type="button"
                                    onClick={handleClearSearch}
                                    className="
                                        absolute
                                        right-3
                                        top-1/2
                                        flex
                                        h-6
                                        w-6
                                        -translate-y-1/2
                                        items-center
                                        justify-center
                                        rounded-full
                                        text-slate-500
                                        transition

                                        hover:bg-slate-700
                                        hover:text-white
                                    "
                                    aria-label="Clear search"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="2"
                                        stroke="currentColor"
                                        className="h-4 w-4"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            )}

                        </div>


                        {/* Mobile Links */}
                        <div className="space-y-1">

                            <button
                                className="
                                    w-full
                                    rounded-xl
                                    px-4
                                    py-3
                                    text-left
                                    text-sm
                                    font-medium
                                    text-slate-400
                                    transition

                                    hover:bg-slate-900
                                    hover:text-white
                                "
                            >
                                Notes
                            </button>

                            <button
                                className="
                                    w-full
                                    rounded-xl
                                    px-4
                                    py-3
                                    text-left
                                    text-sm
                                    font-medium
                                    text-slate-400
                                    transition

                                    hover:bg-slate-900
                                    hover:text-white
                                "
                            >
                                Pinned
                            </button>

                            <button
                                className="
                                    w-full
                                    rounded-xl
                                    px-4
                                    py-3
                                    text-left
                                    text-sm
                                    font-medium
                                    text-slate-400
                                    transition

                                    hover:bg-slate-900
                                    hover:text-white
                                "
                            >
                                Archive
                            </button>


                            <button
                                className="
                                    mt-2
                                    w-full
                                    rounded-xl
                                    bg-white
                                    px-4
                                    py-3
                                    text-sm
                                    font-semibold
                                    text-slate-950
                                    transition

                                    hover:bg-slate-200
                                "
                            >
                                + New Note
                            </button>

                        </div>

                    </div>
                )}

            </nav>

        </header>
    );
};

export default Navbar;