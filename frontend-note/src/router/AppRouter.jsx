import {createBrowserRouter,  RouterProvider,} from 'react-router'
import Navbar from '../components/Navbar';
const router = createBrowserRouter([
      {
        path: "/",
        element: <Navbar />

      }
])

const AppRouter = () => {
    return <RouterProvider router={router} />;
};

export default AppRouter;