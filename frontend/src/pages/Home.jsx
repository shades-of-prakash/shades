import React from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";
const Home = () => {
    return (
        <div>
            <div className="grid">
                <div className="grid_item">
                    <img src="/assets/front.webp" alt="front" />
                </div>
                <div className="grid_item">
                    <img src="/assets/close.webp" alt="close" />
                </div>
                <div className="grid_item">
                    <img src="/assets/Couture.webp" alt="back" />
                </div>
                <div className="grid_content dffd dfc">
                    <div className="border-dot"></div>
                    <div className="ai_text">
                        <h1 className="ai_gradient">AI-Curated Luxe Fashion</h1>
                    </div>
                    <div className="border-dot"></div>
                    <p>
                        Shop effortlessly with our AI-powered platform. Get
                        personalized product recommendations tailored to your
                        style in seconds. Discover the latest trends and
                        must-have items, all curated just for you.
                    </p>
                </div>
            </div>
            <div style={{ width: "300px", height: "300px" }}></div>
            <div style={{ width: "300px", height: "300px" }}></div>

            <div style={{ width: "300px", height: "300px" }}></div>

            <div style={{ width: "300px", height: "300px" }}></div>

            <div style={{ width: "300px", height: "300px" }}></div>

            <div style={{ width: "300px", height: "300px" }}></div>
        </div>
    );
};

export default Home;
