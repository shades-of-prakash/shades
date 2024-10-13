import React from "react";
import "../styles/AiPage.css";
import { Link, Outlet } from "react-router-dom";
const AiPage = () => {
    return (
        <div className="main_ai_div">
            <div className="sub_ai_div">
                <div className="ai_sidemenu">
                    <h1>SHADES AI</h1>
                    <ul>
                        <li>
                            <Link></Link>
                        </li>
                        <li>
                            <Link></Link>
                        </li>
                        <li>
                            <Link></Link>
                        </li>
                    </ul>
                </div>
                <div className="ai_content">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default AiPage;
