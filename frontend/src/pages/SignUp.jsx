import React, { useEffect, useState } from "react";
import { useTheme } from "../hooks/UseTheme";
import { Form, Link, useActionData } from "react-router-dom";
import "../styles/signup.css";
import { useNavigate } from "react-router-dom";
import countryCodes from "country-codes-list";
import { useAuth } from "../hooks/UseAuth";
const SignUp = () => {
    const { isDark } = useTheme();
    const navigate = useNavigate();
    const [showPassword, isShowPassword] = useState(false);
    const actionData = useActionData();
    const { login } = useAuth();
    useEffect(() => {
        if (
            actionData &&
            actionData.user.token &&
            actionData.success === true
        ) {
            localStorage.setItem("token", actionData.user.token);
            login(actionData.user.token);
            navigate("/");
        }
    }, [actionData, navigate]);

    const myCountryCodesObject = countryCodes.customList(
        "countryCode",
        "+{countryCallingCode}"
    );
    return (
        <div className={`signup_main ${isDark ? "dark" : "light"}`}>
            <div className="photo">
                <img src="/assets/login_1.jpg" alt="" />
            </div>
            <div className="signup_content">
                <h1>SHADES</h1>
                <p className="welcome">
                    Sign up to start shopping with us today!
                </p>
                <Form method="post">
                    <div className="name_box">
                        <div className="input_name_box">
                            <input type="text" name="first_name" required />
                            <label htmlFor="">First name</label>
                        </div>
                        <div className="input_name_box">
                            <input type="text" name="last_name" required />
                            <label htmlFor="">Last name</label>
                        </div>
                    </div>
                    <div className="input_box">
                        <input type="text" name="username" required />
                        <label htmlFor="">User name</label>
                    </div>
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
                    <div className="input_date df">
                        <div className="input_day">
                            <input type="text" name="day" required />

                            <label htmlFor="">Day</label>
                        </div>
                        <div className="input_month">
                            <input type="text" name="month" required />
                            <label htmlFor="">Month</label>
                        </div>
                        <div className="input_year">
                            <input type="text" name="year" required />
                            <label htmlFor="">Year</label>
                        </div>
                    </div>
                    <div className="input_phone">
                        <div className="input_country">
                            <select
                                name="countryCode"
                                id="countryCode"
                                defaultValue="IN">
                                {Object.entries(myCountryCodesObject).map(
                                    ([countryCode, countryName]) => (
                                        <option
                                            key={countryCode}
                                            value={countryCode}>
                                            {countryName}
                                        </option>
                                    )
                                )}
                            </select>
                        </div>
                        <div className="input_number">
                            <input type="text" name="phone_number" required />
                            <label htmlFor="">Phone number</label>
                        </div>
                    </div>
                    <div className="df" style={{ gap: "10px" }}>
                        <input type="checkbox" required />
                        <p>
                            I agree to Shades's <Link>Privacy Policy</Link>and{" "}
                            <Link>Terms of Use</Link>
                        </p>
                    </div>
                    <button className="continue_button">Continue</button>
                    <div className="login">
                        <span>Already have an account?</span>
                        <Link to="/login">Login</Link>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default SignUp;
