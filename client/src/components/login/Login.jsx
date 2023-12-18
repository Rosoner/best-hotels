import { useContext, useState } from "react";
import useForm from "../../hooks/useForm";
import AuthContext from "../../contexts/authContext";

import styles from '../login/styles.css';

const LoginFormKyes = {
    Email: 'email',
    Password: 'password',
};

export default function Login() {
    const { loginSubmitHandler, errorMsg } = useContext(AuthContext);
    const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
        [LoginFormKyes.Email]: '',
        [LoginFormKyes.Password]: '',
    });

    const [errors, setErrors] = useState({});  

    const [showRegisterMessage, setShowRegisterMessage] = useState(false);
    const [registerMessage, setRegisterMessage] = useState({
        message: "",
        variant: "",
    });

    const passwordValidator = () => {
        if (values.password.length == 0) {
            setErrors(state => ({
                ...state,
                password: 'Password is required!',
            }));
        }
        else if (values.password.length <= 3) {
            setErrors(state => ({
                ...state,
                password: 'Password must be at least 4 characters long!',
            }));
        } 
        else {
            if (errors.password) {
                setErrors(state => ({ ...state, password: '' }));
            }
        }
    }

    const emailValidator = () => {
        if (values.email.length == 0) {
            setErrors(state => ({
                ...state,
                email: 'Email is required!',
            }));
        }
        else if (values.email.length <= 3) {
            setErrors(state => ({
                ...state,
                email: 'Email must be at least 4 characters long!',
            }));
        } 
        else {
            if (errors.email) {
                setErrors(state => ({ ...state, email: '' }));
            }
        }
    }

    const onLogin = async () => {
        try {
            if (!values.email || !values.password) {
                showError("All fields are required!");
                return;
            }
            if (errorMsg.message) {
                showError(errorMsg.message);
                return;
            }

        } catch (error) {
            AuthContext.error.message

        } finally {
            setShowRegisterMessage(true);
            setTimeout(() => {
                setShowRegisterMessage(false);
                setRegisterMessage({ message: "", variant: "" });
            }, 1000);
        }
    }

    const showError = (message) => {
        setRegisterMessage({ message, variant: "danger" });
        setShowRegisterMessage(true);
    };


    return (
        <section id="login-page" className="auth">
            <form id="login" onSubmit={onSubmit}>

            
                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Login</h1>
            <div>       
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name={LoginFormKyes.Email}
                        placeholder="ivan@gmail.com"
                        onChange={onChange}
                        value={values.email}
                        onBlur={emailValidator}
                        className={errors.email  ? "input-error" : ""}
                    />
                    {errors.email && (
                    <p style={{ color: 'yellow', fontSize:16}} className={styles.errorMessage}>{errors.email}</p>
                    )}
            </div>

                    <div>                    
                    <label htmlFor="login-pass">Password:</label>
                    <input
                        type="password"
                        id="login-password"
                        name={LoginFormKyes.Password}
                        onChange={onChange}
                        value={values.password}
                        onBlur={passwordValidator}
                        className={errors.password  ? "input-error" : ""}
                    />
                    {errors.password && (
                            <p style={{ color: 'yellow', fontSize:16}} className={styles.errorMessage}>{errors.password}</p>
                    )}
                    </div>

                    <br></br>
                    {showRegisterMessage && (
                        <div style={{ color: 'yellow', fontSize: 16 }} className={`message ${registerMessage.variant}`}>
                            {registerMessage.message}
                        </div>
                    )}
                    <br></br>

                    <input 
                    type="submit" 
                    disabled={Object.values(errors).some(x => x)} 
                    onClick={onLogin}                     
                    id="btn-submit" 
                    value="Login" />

                    <br></br>

                    <p className="field">
                        <span>If you don't have profile click <a href="/register" style={{ color: 'darkblue',}}>here</a></span>
                    </p>
                </div>
            </form>
        </section>
    );
}
