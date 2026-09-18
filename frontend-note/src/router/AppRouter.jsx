import {
    createBrowserRouter,
    RouterProvider,
} from "react-router";

import MainLayout from "../app/layout/MainLayout";
import Notes from "../features/notes/ui/pages/Notes";
import NoteForm from "../features/notes/ui/components/NoteForm";
import Home from "../../shared/home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },

            {
                path: "notes",
                element: <Notes />,
            },

            {
                path: "create",
                element: <NoteForm />,
            },
        ],
    },
]);

const AppRouter = () => {
    return <RouterProvider router={router} />;
};

export default AppRouter;