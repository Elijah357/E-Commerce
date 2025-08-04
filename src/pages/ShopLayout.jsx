import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";


function ShopLayout() {
    return (
        <div className="bg-gray-900 min-h-screen text-white">
            <Navbar isShoppingPage/>
            <Outlet />

        </div>
    )
}

export default ShopLayout;