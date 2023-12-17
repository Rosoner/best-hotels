import { useContext, useState } from "react";

import AuthContext from "../../contexts/authContext";
import useForm from "../../hooks/useForm";
import styles from '../login/styles.css';

const RegisterFormKeys = {
    Username: 'username',
    Email: 'email',
    Password: 'password',
    ConfirmPassword: 'confirm-password',
};

export default function Register() {
    const { registerSubmitHandler } = useContext(AuthContext);
    const { values, onChange, onSubmit } = useForm(registerSubmitHandler, {
        [RegisterFormKeys.Username]: '',
        [RegisterFormKeys.Email]: '',
        [RegisterFormKeys.Password]: '',
        [RegisterFormKeys.ConfirmPassword]: '',
    });


    const [errors, setErrors] = useState({});

    const [showRegisterMessage, setShowRegisterMessage] = useState(false);
    const [registerMessage, setRegisterMessage] = useState({
        message: "",
        variant: "",
    });

    const usernameValidator = () => {
        if (values.username.length === 0) {
            setErrors(state => ({
                ...state,
                username: 'Username is required!',
            }));
        }      
        else {
            if (errors.username) {
                setErrors(state => ({ ...state, username: '' }));
            }
        }    
    }

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

    const passwordConfValidator = () => {
        if (values.confirmPassword.length == 0) {
            setErrors(state => ({
                ...state,
                confirmPassword: 'Confirm password is required!',
            }));
        }
        else if (values.password !== values.confirmPassword) {
            setErrors(state => ({
                ...state,
                confirmPassword: 'Passwords don\'t match!',
            }));
        }        
        else {
            if (errors.confirmPassword) {
                setErrors(state => ({ ...state, confirmPassword: '' }));
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
        // else if (values.email.length <= 3) {
        //     setErrors(state => ({
        //         ...state,
        //         email: 'Email must be at least 4 characters long!',
        //     }));
        // }
        else {
            if (errors.email) {
                setErrors(state => ({ ...state, email: '' }));
            }
        }
    }


const onRegister = async () => {
        try {
            if (!values.email || !values.username || !values.password || !values.confirmPassword) {
                showError("All fields are required!");               
            }
            if (values.password != values.confirmPassword) {
                showError("Passwords don't match!");
                return;
            }
            if (values.confirmPassword.length == 0) { 
                values.password = values.confirmPassword ;
                return;
            }

        } catch (error) {
            console.error("Error during registration:", error);
        } finally {
            setShowRegisterMessage(true);
            setTimeout(() => {
                setShowRegisterMessage(false);
                setRegisterMessage({ message: "", variant: "" });
            }, 3000);
        }
    }


    const showError = (message) => {
        setRegisterMessage({ message, variant: "danger" });
        setShowRegisterMessage(true);
    };

    return (
        <section id="register-page" className="content auth">
            <form id="register" onSubmit={onSubmit}>
                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Register</h1>

                    <div>
                        <label htmlFor="username">Username:</label>
                        <input
                            type="nickname"
                            id="username"
                            name="username"
                            placeholder="Jakomo"
                            onChange={onChange}
                            values={values.username}
                            onBlur={usernameValidator}
                            className={errors.username ? "input-error" : ""}
                            required 
                        />
                         {errors.username && (
                            <p style={{ color: 'yellow', fontSize: 16 }} className={styles.errorMessage}>{errors.username}</p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="ivan@gmail.com"
                            onChange={onChange}
                            values={values.email}
                            onBlur={emailValidator}
                            className={errors.email ? "input-error" : ""}
                            required
                        />
                        {errors.email && (
                            <p style={{ color: 'yellow', fontSize: 16 }} className={styles.errorMessage}>{errors.email}</p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="pass">Password:</label>
                        <input
                            type="password"
                            name="password"
                            id="register-password"
                            onChange={onChange}
                            values={values.password}
                            onBlur={passwordValidator}
                            className={errors.password ? "input-error" : ""}
                            required
                        />
                        {errors.password && (
                            <p style={{ color: 'yellow', fontSize: 16 }} className={styles.errorMessage}>{errors.password}</p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="con-pass">Confirm Password:</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            id="confirmPassword"
                            onChange={onChange}
                            values={values.confirmPassword}
                            onBlur={passwordConfValidator}
                            className={errors.confirmPassword ? "input-error" : ""}
                            required
                        />
                        {errors.confirmPassword && (
                            <p style={{ color: 'yellow', fontSize: 16 }} className={styles.errorMessage}>{errors.confirmPassword}</p>
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
                    onClick={onRegister} 
                    id="btn-submit"                    
                    value="Register" 
                    />

                    <p className="field">
                        <span>If you already have profile click <a href="/login" style={{ color: 'darkblue',}}>here</a></span>
                    </p>
                </div>
            </form>
        </section>
    );
}
