import { useRef, useState } from "react";
import { string, func } from "prop-types";

function UserForm({ title, onSubmit, submitCaption }) {
    const emailInput = useRef(null);
    const passwordInput = useRef(null);
    const [error, setError] = useState("");
    
    const internalOnSubmit = async () => {
        setError("");

        const userData = {
            email: emailInput.current.value,
            password: passwordInput.current.value
        };
         
        await onSubmit(userData, setError);
    }

    return (
        <div className="user-form">
            <h2>{title}</h2>
            <label htmlFor="email">Email</label>
            <input 
                type="text"
                className="form-email"
                id="email"
                ref={emailInput}
            />
            <label htmlFor="password">Password</label>
            <input 
                type="password"
                className="form-password"
                id="password"
                ref={passwordInput}
            />

            <div className="submit-error">{error}</div>

            <button className="submit-button" onClick={internalOnSubmit}>
                {submitCaption}
            </button>
        </div>
    );
}

UserForm.propTypes = {
    title: string.isRequired,
    onSubmit: func.isRequired,
    submitCaption: string.isRequired
};

export default UserForm;