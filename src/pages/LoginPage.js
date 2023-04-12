import { useNavigate } from "react-router-dom";
import UserForm from "../components/UserForm";
import { REACT_BACKEND_URL } from "../constants";

function LoginPage() {
    const navigate = useNavigate();
    
    const onSubmit = async (userData, setError) => {
        const res = await fetch(`${REACT_BACKEND_URL}/auth/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData)
        });
    
        const data = await res.json();
    
        if (res.status >= 400) {
            setError(data.message);
        } else {
            localStorage.setItem("userToken", data.accessToken);
            navigate("/");
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