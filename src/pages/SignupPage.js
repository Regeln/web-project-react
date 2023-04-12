import { useNavigate } from "react-router-dom";
import UserForm from "../components/UserForm";
import { REACT_BACKEND_URL } from "../constants";

function SignupPage() {
    const navigate = useNavigate();

    const onSubmit = async (userData, setError) => {
        const res = await fetch(`${REACT_BACKEND_URL}/user/signup`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData)
        });

        const data = await res.json();

        if (res.status >= 400) {
            setError(data.message);
        } else {
            navigate("/");  
        }
    }

    return (
        <UserForm 
            title="Sign Up Page"
            onSubmit={onSubmit}
            submitCaption="Sign Up"
        />
    );
}

export default SignupPage;