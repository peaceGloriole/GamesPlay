import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { useForm } from '../../hooks/useForm';
import { useLogin } from '../../hooks/useAuth';
import { useState } from 'react';

const initialValues = { email: ``, password: `` };

export default function Login() {
    const [error, setError] = useState(``);
    const navigate = useNavigate();
    const login = useLogin();

    const loginHandler = async ({ email, password }) => {

        try {
            await login(email, password);

            navigate(`/`);
        } catch (error) {
            setError(error.message);
        }

    };

    const { state, changeHandler, submitHandler } = useForm(initialValues, loginHandler);

    return (
        <section id="login-page" className="auth">
            <form id="login" onSubmit={submitHandler}>

                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Login</h1>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={state.email}
                        onChange={changeHandler}
                        placeholder="Sokka@gmail.com" />

                    <label htmlFor="login-pass">Password:</label>
                    <input
                        type="password"
                        id="login-password"
                        name="password"
                        value={state.password}
                        onChange={changeHandler} />
                    <input type="submit" className="btn submit" value="Login" />

                    {error && (
                        <p style={{
                            color: `red`,
                            fontSize: `14px`,
                            padding: `20px`
                        }}>
                            <span>{error}</span>
                        </p>
                    )}

                    <p className="field">
                        <span>If you don't have profile click <Link to={`/register`}>here</Link></span>
                    </p>
                </div>
            </form>
        </section>
    );
}