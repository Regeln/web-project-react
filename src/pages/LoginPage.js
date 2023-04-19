import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserForm from "../components/UserForm";
import { REACT_BACKEND_URL } from "../constants";
import { Context } from "../App";

function LoginPage() {
    const { isLoggedIn, setIsLoggedIn } = useContext(Context);
    const navigate = useNavigate();
    
    const onSubmit = async (userData, setError) => {
        const res = await fetch(`${REACT_BACKEND_URL}/auth/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData),
            withCredentials: true,
            credentials: "include"
        });
    
        const data = await res.json();
    
        if (res.status >= 400) {
            setError(data.message);
        } else {
            localStorage.setItem("userToken", data.accessToken);
            setIsLoggedIn(true);
            navigate("/category/pizza");
        }
    };

    return (
        <UserForm 
            title="Login Page"
            onSubmit={onSubmit}
            submitCaption="Log In"
        />
    );
}

export default LoginPage;