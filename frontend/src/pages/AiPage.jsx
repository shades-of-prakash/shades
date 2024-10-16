import React from "react";
import "../styles/AiPage.css";
import { Link, Outlet } from "react-router-dom";
const AiPage = () => {
    return (
        <div className="main_ai_div">
            <div className="sub_ai_div">
                <div className="ai_sidemenu">
                    <h1>SHADES OUTFITS</h1>
                    <ul>
                        <li>
                            <Link to="occasion_outfits">Occasion</Link>
                        </li>
                        <li>
                            <Link to="personality_outfits">Personality</Link>
                        </li>
                        <li>
                            <Link to="bodyshape_outfits">Bodyshape</Link>
                        </li>
                    </ul>
                </div>
                <div className="outfits_content">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default AiPage;
