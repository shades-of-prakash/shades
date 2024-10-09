import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { User, Bag2, SearchNormal, Heart, Moon, Sun1 } from "iconsax-react";
import { useTheme } from "../../hooks/UseTheme";
import Dropdown from "../Dropdown.jsx";
import dropdownData from "../../utils/dropdownData";

const Navbar = () => {
    const { isDark, toggleTheme } = useTheme();
    const [activeDropdown, setActiveDropdown] = useState(null);
    const navItems = [
        { label: "Men", path: "/men", genderData: dropdownData[0] },
        { label: "Women", path: "/women", genderData: dropdownData[1] },
        { label: "AI", path: "/shadesai", genderData: null },
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
                    <Heart size="24" color={isDark ? "white" : "black"} />
                </div>
                <div className="dfc svgdiv">
                    <Bag2 size="24" color={isDark ? "white" : "black"} />
                </div>
                <div className="nav_login_button">
                    <button>
                        <Link to="/login">Login</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
