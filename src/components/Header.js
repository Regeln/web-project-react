import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { REACT_BACKEND_URL } from "../constants";


function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(
        !!localStorage.getItem("userToken")
    );

    const [currentUser, setCurrentUser] = useState({});

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
    }, []);

    const onLogout = () => {
        localStorage.removeItem("userToken");
        setIsLoggedIn(false);
    }

    return (
        <header className="header">
            <NavLink to="/" className="header-menu">foodLike</NavLink>
            {!isLoggedIn && ( 
                <div className="header-links">
                    <NavLink to="/login">Вхід</NavLink>
                    <NavLink to="/signup">Реєстрація</NavLink>
                </div>
            )}
            {isLoggedIn && (
                <div className="header-links">
                    <span className="login-status">{currentUser.email}</span>
                    <NavLink to="/cart">Корзина</NavLink>
                    <button onClick={onLogout}>Вийти</button>
                </div>
            )}
        </header>
    );
}

export default Header;