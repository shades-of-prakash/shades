import React, { useState, useEffect } from "react";
import "../styles/Bodypage.css";
import CustomSelect from "../components/CustomSelect";
import bodyshapeoutfits from "../utils/bodyshape";
import { Link } from "react-router-dom";
import funfacts from "../utils/funfacts";
import { QuoteDown, QuoteUp } from "iconsax-react";

const Bodyshape = () => {
    const [isMen, setIsMen] = useState(null);
    const [waistSize, setWaistSize] = useState(null);
    const [bustSize, setBustSize] = useState(null);
    const [hipSize, setHipSize] = useState(null);
    const [highHipSize, setHighHipSize] = useState(null);

    const [outfits, setOutfits] = useState([]);
    const [shape, setShape] = useState(null);
    const [completed, setCompleted] = useState(false);

    // Load data from sessionStorage on mount
    useEffect(() => {
        const savedOutfits =
            JSON.parse(sessionStorage.getItem("outfits")) || [];
        const savedShape = sessionStorage.getItem("shape");
        const savedCompleted = sessionStorage.getItem("completed") === "true";

        setOutfits(savedOutfits);
        setShape(savedShape);
        setCompleted(savedCompleted);
    }, []);

    // Function to determine men's body shape
    function determineMenBodyShape(measurements) {
        const { chest, waist, hips } = measurements;

        if (
            hips - chest < 3.6 &&
            chest - hips < 3.6 &&
            chest - waist < 9 &&
            hips - waist < 10
        ) {
            return "Rectangle";
        } else if (chest - hips >= 3.6 && chest - waist < 9) {
            return "Inverted Triangle";
        } else if (waist > chest && hips < chest) {
            return "Oval";
        } else if (chest > hips && waist >= hips) {
            return "Trapezoid";
        } else {
            return "Shape not determined";
        }
    }

    // Function to determine women's body shape
    function determineWomenBodyShape(measurements) {
        const { bust, waist, hips, highHip } = measurements;

        if (
            (Math.abs(bust - hips) <= 1 &&
                hips - bust < 3.6 &&
                bust - waist >= 9) ||
            hips - waist >= 10
        ) {
            return "Hourglass";
        } else if (
            hips - bust >= 3.6 &&
            hips - bust < 10 &&
            hips - waist >= 9 &&
            highHip / waist < 1.193
        ) {
            return "BottomHourglass";
        } else if (bust - hips > 1 && bust - hips < 10 && bust - waist >= 9) {
            return "TopHourglass";
        } else if (
            hips - bust > 2 &&
            hips - waist >= 7 &&
            highHip / waist >= 1.193
        ) {
            return "Spoon";
        } else if (hips - bust >= 3.6 && hips - waist < 9) {
            return "Triangle";
        } else if (bust - hips >= 3.6 && bust - waist < 9) {
            return "InvertedTriangle";
        } else if (
            hips - bust < 3.6 &&
            bust - hips < 3.6 &&
            bust - waist < 9 &&
            hips - waist < 10
        ) {
            return "Rectangle";
        } else {
            return "Shape not determined";
        }
    }

    const genderValues = [
        { value: "Gender", label: "Gender" },
        { value: "Men", label: "Men" },
        { value: "Women", label: "Women" },
    ];

    function selectGender(selectedOption) {
        setIsMen(selectedOption.value === "Men");
    }

    function findShape() {
        let determinedShape;
        let newOutfits = [];

        if (isMen === true) {
            determinedShape = determineMenBodyShape({
                chest: bustSize,
                waist: waistSize,
                hips: hipSize,
            });
            newOutfits = bodyshapeoutfits["Men"][determinedShape] || [];
        } else if (isMen === false) {
            determinedShape = determineWomenBodyShape({
                bust: bustSize,
                waist: waistSize,
                hips: hipSize,
                highHip: highHipSize,
            });
            newOutfits = bodyshapeoutfits["Women"][determinedShape] || [];
        }

        setOutfits(newOutfits);
        setShape(determinedShape);
        setCompleted(true);

        // Save data to sessionStorage
        sessionStorage.setItem("outfits", JSON.stringify(newOutfits));
        sessionStorage.setItem("shape", determinedShape);
        sessionStorage.setItem("completed", "true");

        document
            .querySelector(".results")
            .scrollIntoView({ behavior: "smooth" });
    }

    return (
        <div className="body_main_div">
            <h1>The Perfect Fit: Outfits Tailored to Your Body Shape</h1>
            <p>
                Unlock your fashion potential with our personalized outfit
                generator, tailored to enhance your unique body shape. Input
                your body type, and receive curated outfit suggestions that
                flatter your features, from casual looks to elegant styles. Say
                goodbye to guesswork and hello to effortless styling, empowering
                you to step out with confidence in outfits that truly reflect
                your individuality!
            </p>
            <div className="body_input_div">
                <div className="gender_input">
                    <h2>Please select your gender</h2>
                    <div className="select_body">
                        <CustomSelect
                            options={genderValues}
                            onChange={selectGender}
                        />
                    </div>
                </div>
            </div>
            {isMen === true ? (
                <div className="men">
                    <div className="men_measure">
                        <h3>Enter the Measurements</h3>
                        <div className="measure_input">
                            <p>Bust size</p>
                            <input
                                type="number"
                                placeholder="Eg:36cm or inches"
                                onChange={(e) => setBustSize(e.target.value)}
                            />
                        </div>
                        <div className="measure_input">
                            <p>Waist size</p>
                            <input
                                type="number"
                                placeholder="Eg:36cm or inches"
                                onChange={(e) => setWaistSize(e.target.value)}
                            />
                        </div>
                        <div className="measure_input">
                            <p>Hip size</p>
                            <input
                                type="number"
                                placeholder="Eg:36cm or inches"
                                onChange={(e) => setHipSize(e.target.value)}
                            />
                        </div>
                        <button onClick={findShape}>Calculate</button>
                    </div>
                    <div className="men_img">
                        <img src="/assets/men.jpg" alt="" />
                    </div>
                </div>
            ) : isMen === false ? (
                <div className="men">
                    <div className="men_measure">
                        <h3>Enter the Measurements</h3>
                        <div className="measure_input">
                            <p>Bust size</p>
                            <input
                                type="number"
                                placeholder="Eg:36cm or inches"
                                onChange={(e) => setBustSize(e.target.value)}
                            />
                        </div>
                        <div className="measure_input">
                            <p>Waist size</p>
                            <input
                                type="number"
                                placeholder="Eg:36cm or inches"
                                onChange={(e) => setWaistSize(e.target.value)}
                            />
                        </div>
                        <div className="measure_input">
                            <p>Hip size</p>
                            <input
                                type="number"
                                placeholder="Eg:36cm or inches"
                                onChange={(e) => setHipSize(e.target.value)}
                            />
                        </div>
                        <div className="measure_input">
                            <p>High Hip size</p>
                            <input
                                type="number"
                                placeholder="Eg:36cm or inches"
                                onChange={(e) => setHighHipSize(e.target.value)}
                            />
                        </div>
                        <button onClick={findShape}>Calculate</button>
                    </div>
                    <div className="men_img">
                        <img src="/assets/women.jpg" alt="" />
                    </div>
                </div>
            ) : null}
            <div className="results">
                {completed &&
                    (shape ? (
                        <div>
                            <h3>Outfit Suggestions for {shape}</h3>
                            {Object.entries(outfits).map(
                                ([category, items]) => (
                                    <div className="results_row" key={category}>
                                        <h4>{category}</h4>
                                        <div className="results_links">
                                            {items.map((item, index) => (
                                                <Link
                                                    key={index}
                                                    to={
                                                        isMen
                                                            ? `/Men/${item}`
                                                            : `/Women/${item}`
                                                    }>
                                                    {item}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )
                            )}
                        </div>
                    ) : (
                        <p>
                            Shape not determined. Please enter your measurements
                            again.
                        </p>
                    ))}
            </div>
            <div className="quotes">
                {funfacts.map((item, index) => {
                    return (
                        <div className="quote" key={index}>
                            <QuoteUp size="32" color="#FF8A65" />
                            <p key={index}>{item.fact}</p>
                            <QuoteDown size="32" color="#FF8A65" />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Bodyshape;
