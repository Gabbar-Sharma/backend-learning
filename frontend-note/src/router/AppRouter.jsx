import {createBrowserRouter,  RouterProvider,} from 'react-router'
import MainLayout from '../app/layout/MainLayout';
import Notes from '../features/notes/ui/pages/Notes'
import Home from '../../shared/home/Home'
const router = createBrowserRouter([
      {
        path: "/",
        element: <MainLayout />, 
        children:[
          {
                index: true,
                element: <Home />,
            },

          {
            path: "/create",
            element: <Notes />
          }
        ]

      }
])

const AppRouter = () => {
    return <RouterProvider router={router} />;
};

export default AppRouter;