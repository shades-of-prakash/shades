import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
    const location = useLocation();
    const layoutElement = document.querySelector(".layout");

    useEffect(() => {
        if (layoutElement) {
            layoutElement.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }
    }, [location]);

    return null;
}

export default ScrollToTop;
