import React from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";
const Home = () => {
    return (
        <div className="home_div">
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
            <div className="whyus">
                <div className="whyus_image">
                    <h1>SHADES</h1>
                    <div className="whyus_content">
                        <h3>Why Choose Us </h3>
                        <p>
                            We pride ourselves on offering products that meet
                            the highest standards of quality. Each item is
                            carefully selected, tested, and crafted to ensure
                            durability and customer satisfaction
                        </p>
                        <div className="small_div_container">
                            <div className="small_div">
                                <div className="circle_div  dfc">100%</div>
                                <h3>100% Authentic product</h3>
                            </div>
                            <div className="small_div">
                                <div className="circle_div dfc">
                                    <img
                                        src="/assets/corner-down-left.svg"
                                        alt=""
                                    />
                                </div>
                                <h3>Free & Easy Return</h3>
                            </div>
                            <div className="small_div">
                                <div className="circle_div dfc">&#8377;</div>
                                <h3>Safe Payments</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
