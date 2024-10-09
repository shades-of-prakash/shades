import React from "react";
import { useTheme } from "../../hooks/UseTheme";
import "./Login.css";
import { Form, Link } from "react-router-dom";
const Login = () => {
    const { isDark } = useTheme();
    return (
        <div className={`login_main ${isDark ? "dark" : "light"}`}>
            <div className="photo">
                {/* <video loop muted>
                    <source src="/assets/gigi.mp4" type="video/mp4" />
                </video> */}
                <img src="/assets/login.jpg" alt="" />
                {/* <div className="overlay">
                    <div className="box one-four">
                        <img src="/assets/star2.svg" alt="" />
                    </div>
                    <div className="box one-three-one-four">
                        <img src="/assets/star2.svg" alt="" />
                    </div>
                    <div className="box one-three-one-four">
                        <img src="/assets/star2.svg" alt="" />
                    </div>
                    <div className="box one-three"></div>
                    <div className="box one-two-one-four">
                        <img src="/assets/star2.svg" alt="" />
                    </div>
                    <div className="box one">
                        <img src="/assets/star2.svg" alt="" />
                    </div>
                    <div className="box one">
                        <img src="/assets/star2.svg" alt="" />
                    </div>
                    <div className="box one-one-one-three"></div>
                    <div className="box one-two-one-four">
                        <img src="/assets/star2.svg" alt="" />
                    </div>
                    <div className="box one">
                        <img src="/assets/star2.svg" alt="" />
                    </div>
                    <div className="box one">
                        <img src="/assets/star2.svg" alt="" />
                    </div>
                    <div className="box one-one-one-three"></div>
                    <div className="box one-two-one-four">
                        <img src="/assets/star2.svg" alt="" />
                    </div>
                    <div className="box one">
                        <img src="/assets/star2.svg" alt="" />
                    </div>
                    <div className="box one">
                        <img src="/assets/star2.svg" alt="" />
                    </div>
                    <div className="box one-one-one-three"></div>
                    <div className="box one-two"></div>
                    <div className="box one-one-one-two"></div>
                    <div className="box one-one-one-two"></div>
                    <div className="box one-one"></div>
                </div> */}
            </div>
            <div className="login_content">
                <h1>SHADES</h1>
                <p>Welcome Back</p>
                <Form method="post">
                    <div className="input_box">
                        <label htmlFor="">Email</label>
                        <input type="Email" />
                    </div>
                    <div className="input_box">
                        <label htmlFor="">Password</label>
                        <input type="password" />
                    </div>
                    <p>Forget password?</p>
                    <button>Continue</button>
                    <div>
                        <span>Don't have an account?</span>
                        <Link>Sigup</Link>
                    </div>
                </Form>
                <div>
                    <hr />
                    <span>or</span>
                    <hr />
                </div>
                <div className="google">
                    <button>Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;
