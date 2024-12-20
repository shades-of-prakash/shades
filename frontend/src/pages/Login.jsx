import React, { useEffect, useState } from "react";
import { useTheme } from "../hooks/UseTheme";
import "../styles/Login.css";
import { Form, Link, useActionData, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/UseAuth";
const Login = () => {
    const { isDark } = useTheme();
    const [showPassword, isShowPassword] = useState(false);
    const [isError, setIsError] = useState(false);
    const actionData = useActionData();
    const navigate = useNavigate();
    const { login } = useAuth();
    useEffect(() => {
        if (
            actionData &&
            actionData.user &&
            actionData.user.token &&
            actionData.success === true
        ) {
            localStorage.setItem("token", actionData.user.token);
            login(actionData.user.token);
            navigate("/");
        } else if (actionData && actionData.success === false) {
            setIsError(true);
        }
    }, [actionData, navigate]);
    return (
        <div className={`login_main ${isDark ? "dark" : "light"}`}>
            <div className="photo">
                <img src="/assets/login_1.jpg" alt="" />
            </div>
            <div className="login_content">
                <h1>SHADES</h1>
                <p className="welcome">Good to have you back,Ready for more?</p>

                {isError && (
                    <p className="error">Email or password is invalid</p>
                )}
                <Form method="post">
                    <div className="input_box">
                        <input type="Email" name="email" required />
                        <label htmlFor="">Email</label>
                    </div>
                    <div className="input_box">
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            required
                        />
                        <label htmlFor="">Password</label>
                        <ion-icon
                            name={
                                showPassword ? "eye-outline" : "eye-off-outline"
                            }
                            onClick={() => {
                                isShowPassword((prev) => !prev);
                            }}></ion-icon>
                    </div>
                    <p>Forget password?</p>
                    <button className="continue_button">Continue</button>
                    <div className="signup">
                        <span>Don't have an account?</span>
                        <Link to="/signup">Sigup</Link>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default Login;
