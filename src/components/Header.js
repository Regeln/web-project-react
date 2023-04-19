import { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { REACT_BACKEND_URL } from "../constants";
import { Context } from "../App";

function Header() {
    const [currentUser, setCurrentUser] = useState({});
    const { isLoggedIn, setIsLoggedIn } = useContext(Context);

    const navigate = useNavigate();

    useEffect(() => {
        async function fetchCurrentUser() {
            const res = await fetch(`${REACT_BACKEND_URL}/user`, {
                headers: { Authorization: `Bearer ${localStorage.getItem("userToken")}` }
            });
            const userData = await res.json();
            setCurrentUser(userData);
        }

        if (isLoggedIn) {
            fetchCurrentUser();
        }
    }, [isLoggedIn]);

    const onLogout = async () => {
        await fetch(`${REACT_BACKEND_URL}/auth/logout`, {
            method: "POST",
            withCredentials: true,
            credentials: "include"
        })
        localStorage.removeItem("userToken");
        setCurrentUser({});
        setIsLoggedIn(false);
        navigate("/");
    }

    return (
        <header className="header">
            <NavLink to={!isLoggedIn ? "/" : "/category/pizza"} className="header-logo">foodLike</NavLink>
            {!isLoggedIn && ( 
                <div className="header-menu">
                    <NavLink className="header-menu-item" to="/login">Вхід</NavLink>
                    <NavLink className="header-menu-item" to="/signup">Реєстрація</NavLink>
                </div>
            )}
            {isLoggedIn && (
                <div className="header-menu">
                    <span className="header-menu-user">{currentUser.email}</span>
                    <NavLink className="header-menu-item" to="/cart">Корзина</NavLink>
                    <span className="header-menu-item">
                        <button onClick={onLogout}>Вийти</button>
                    </span>
                </div>
            )}
        </header>
    );
}

export default Header;