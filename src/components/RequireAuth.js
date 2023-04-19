import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Context } from "../App.js";

function RequireAuth() {
    const { isLoggedIn } = useContext(Context);

    return (
        isLoggedIn ? <Outlet /> : <Navigate to="/login" />
    );
}

export default RequireAuth;