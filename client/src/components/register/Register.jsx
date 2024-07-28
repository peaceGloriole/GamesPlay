import { useRegister } from "../../hooks/useAuth";
import { useNavigate } from 'react-router-dom';
import { useForm } from "../../hooks/useForm";
import { useState } from "react";

//css for error message
const errorStyle = {
    color: `red`,
    textDecoration: `underline`,
    fontSize: `14px`,
    padding: `20px`,
};

const initialValues = { email: ``, password: ``, 'confirm-password': `` };

export default function Register() {
    const [error, setError] = useState(``);
    const register = useRegister();
    const navigate = useNavigate();

    const registerHandler = async (values) => {
        if (values.password !== values[`confirm-password`]) {
            return setError(`Passwords do not match!`);
        }

        try {
            await register(values.email, values.password);

            navigate(`/`);
        } catch (error) {
            console.log(error.message);
        }
    };

    const { state, changeHandler, submitHandler } = useForm(initialValues, registerHandler);

    return (
        <section id="register-page" className="content auth">
            <form id="register" onSubmit={submitHandler}>
                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Register</h1>

                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={state.email}
                        onChange={changeHandler}
                        placeholder="maria@email.com" />

                    <label htmlFor="pass">Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={state.password}
                        onChange={changeHandler}
                        id="register-password" />

                    <label htmlFor="con-pass">Confirm Password:</label>
                    <input
                        type="password"
                        name="confirm-password"
                        value={state[`confirm-password`]}
                        onChange={changeHandler}
                        id="confirm-password" />

                    <input className="btn submit" type="submit" value="Register" />

                    {error && (
                        <p style={errorStyle}>
                    <span>{error}</span>
                </p>
                    )}

                <p className="field">
                    <span>If you already have profile click <a href="#">here</a></span>
                </p>
            </div>
        </form>
        </section >
    );
}