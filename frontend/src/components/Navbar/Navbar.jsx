import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { User, Bag2, SearchNormal, Heart, Moon, Sun1 } from "iconsax-react";
import { useTheme } from "../../hooks/UseTheme";
import Dropdown from "../Dropdown.jsx";
import dropdownData from "../../utils/dropdownData";
import { useAuth } from "../../hooks/UseAuth.jsx";
import Account from "../Account.jsx";
const Navbar = () => {
    const { isDark, toggleTheme } = useTheme();
    const navigate = useNavigate();
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [isUserSettingsOpen, setIsUserSettingsOpen] = useState(false);
    const { isAuthenticated } = useAuth();
    const accountRef = useRef(null);
    const navItems = [
        { label: "Men", path: "/Men", genderData: dropdownData[0] },
        { label: "Women", path: "/Women", genderData: dropdownData[1] },
        { label: "Outfits", path: "/shadesai", genderData: null },
    ];
    function handleIcon() {
        toggleTheme((prev) => !prev);
    }

    function handleMouseEnter(index) {
        setActiveDropdown(index);
    }

    function handleMouseLeave() {
        setActiveDropdown(null);
    }

    useEffect(() => {
        function handleClickOutside(event) {
            if (
                accountRef.current &&
                !accountRef.current.contains(event.target)
            ) {
                setIsUserSettingsOpen(false);
            }
        }

        if (isUserSettingsOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isUserSettingsOpen]);
    return (
        <div className="dfsb nav">
            <div className="nav_logo">
                <h1 style={{ fontSize: "20px" }}>
                    <Link to="/home">SHADES</Link>
                </h1>
            </div>
            <ul className="dfsb nav_list">
                {navItems.map((item, index) => (
                    <li
                        key={item.label}
                        className="nav_item dfc"
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}>
                        <Link
                            to={item.path}
                            onClick={() => handleDropdownToggle(index)}>
                            {item.label}
                        </Link>
                        {item.genderData && (
                            <Dropdown
                                genderData={item.genderData}
                                isActive={activeDropdown === index}
                                onClose={() => setActiveDropdown(null)}
                            />
                        )}
                    </li>
                ))}
            </ul>
            <div className="nav_search dfsb">
                <input type="text" placeholder="Search Products" />
                <SearchNormal size="18" color={isDark ? "white" : "black"} />
            </div>
            <div className="profile dfsb">
                <div className="dfc svgdiv" onClick={handleIcon}>
                    {isDark ? (
                        <Moon size="24" color={isDark ? "white" : "black"} />
                    ) : (
                        <Sun1 size="24" color={isDark ? "white" : "black"} />
                    )}
                </div>
                <div className="dfc svgdiv">
                    <Heart
                        size="24"
                        color={isDark ? "white" : "black"}
                        onClick={() => {
                            navigate("/account/wishlist");
                        }}
                    />
                </div>
                <div
                    className="dfc svgdiv"
                    onClick={() => navigate("/account/cart")}>
                    <Bag2 size="24" color={isDark ? "white" : "black"} />
                </div>
                {isAuthenticated ? (
                    <div
                        className="dfc svgdiv  user_icon"
                        ref={accountRef}
                        onClick={() => {
                            setIsUserSettingsOpen((prev) => !prev);
                        }}>
                        <User size="24" color={isDark ? "white" : "black"} />
                        {isUserSettingsOpen && <Account />}
                    </div>
                ) : (
                    <div className="nav_login_button">
                        <button>
                            <Link to="/login">Login</Link>
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
