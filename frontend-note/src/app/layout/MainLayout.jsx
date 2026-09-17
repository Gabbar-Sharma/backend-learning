import Navbar from '../../components/Navbar'
import { Outlet } from "react-router";

const MainLayout = () => {
    return (
        <div className="min-h-screen bg-slate-950 text-white">
            <Navbar />

            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default MainLayout;