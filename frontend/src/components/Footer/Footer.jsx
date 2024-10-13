import React, { useEffect } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <div className="footer dffd">
            <div className="footer_grid  dfc">
                <div className="shades_intro">
                    <h1>SHADES</h1>
                    <p>
                        An AI-driven e-commerce platform delivering personalized
                        shopping experiences through intelligent recommendations
                        and seamless navigation. Discover smarter, tailored
                        solutions with SHADES.
                    </p>
                </div>
                <div className="grid_2 dffd">
                    <h1>Shop</h1>
                    <p>
                        <Link>Men</Link>
                    </p>
                    <p>
                        <Link>Women</Link>
                    </p>
                    <p>
                        <Link>Kids</Link>
                    </p>
                    <p>
                        <Link>Home & Living</Link>
                    </p>
                </div>
                <div className="grid_2">
                    <h1>AI</h1>
                    <p>
                        <Link>Predefined Outfits</Link>
                    </p>
                    <p>
                        <Link>Based on Shape</Link>
                    </p>
                    <p>
                        <Link>Based on color</Link>
                    </p>
                </div>
                <div className="grid_2">
                    <h1>Support</h1>
                    <p>
                        <Link>Contact</Link>
                    </p>
                    <p>
                        <Link>FAQS</Link>
                    </p>
                </div>
                <div className="grid_2">
                    <h1>Say in touch</h1>
                    <p className="sub">
                        Subscribe to recieve updates,access to exclusive deals,
                        and more
                    </p>
                    <div className="dffd sub_box">
                        <input
                            type="email"
                            id="newsletter"
                            placeholder="Enter your email address"
                        />
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>
            <div className="footer_flex dfsb">
                <div className="copyright  dfsb">
                    <p>© SHADES India Ltd, 2024. All Rights Reserved.</p>
                    <p>Privacy Policy</p>
                    <p>Terms of service</p>
                </div>
                <div className="social_media_icons dfsb">
                    <ion-icon name="logo-facebook"></ion-icon>
                    <ion-icon name="logo-instagram"></ion-icon>
                    <ion-icon name="logo-twitter"></ion-icon>
                    <ion-icon name="logo-linkedin"></ion-icon>
                </div>
            </div>
        </div>
    );
};

export default Footer;
