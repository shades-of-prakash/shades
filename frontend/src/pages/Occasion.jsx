import React, { useState } from "react";
import "../styles/occasion.css";
import CustomSelect from "../components/CustomSelect";
import occasionData from "../utils/occasionData";
import { Link } from "react-router-dom";

const Occasion = () => {
    const [occ, setOcc] = useState(false);
    const [gender, setGender] = useState(false);
    const [occoutfits, setOccOutfits] = useState(true);
    const occasions = [
        {
            value: "select  occasion",
            label: "select occasion",
        },
        {
            value: "Casual Outing",
            label: "Casual Outing",
        },
        {
            value: "Festive Event",
            label: "Festive Event",
        },
        {
            value: "Wedding",
            label: "Wedding",
        },
        {
            value: "Formal Event",
            label: "Formal Event",
        },
        {
            value: "Sports Activity",
            label: "Sports Activity",
        },
        {
            value: "Beach Outing",
            label: "Beach Outing",
        },
        {
            value: "Date Night",
            label: "Date Night",
        },
        {
            value: "Gym",
            label: "Gym",
        },
        {
            value: "Picnic",
            label: "Picnic",
        },
    ];
    const genderValues = [
        {
            value: "Gender",
            label: "Gender",
        },
        {
            value: "Men",
            label: "Men",
        },
        {
            value: "Women",
            label: "Women",
        },
    ];

    function handleSelectChange(selectedOption) {
        console.log(selectedOption);
        setOcc(selectedOption);
    }
    function handleGenderChange(selectedOption) {
        console.log(selectedOption);
        setGender(selectedOption);
    }
    function generateOccasion() {
        console.log(occasionData[gender["value"]][occ["value"]]);
        setOccOutfits(occasionData[gender["value"]][occ["value"]]);
    }
    return (
        <div className="occasion">
            <h1>Outfit Planner for Every Moment</h1>
            <p>
                Step into style with our Outfit Planner for Every Moment, your
                ultimate companion for curating the perfect look for any
                occasion. Whether you're prepping for a casual day out, a formal
                gathering, a weekend getaway, or a cozy night in, our intuitive
                planner takes the guesswork out of outfit selection.
            </p>
            <div className="select_div">
                <h2>Select the occasion</h2>
                <div className="occasion_select">
                    <div className="occ_select">
                        <CustomSelect
                            options={occasions}
                            onChange={handleSelectChange}
                        />
                    </div>
                    <div className="gender_select">
                        <CustomSelect
                            options={genderValues}
                            onChange={handleGenderChange}
                        />
                    </div>
                </div>
            </div>
            <button onClick={generateOccasion}>Generate</button>
            <div className="occasion_results">
                <h3>Occasion outfits suggestions</h3>
                {Object.entries(occoutfits).map(([category, items]) => {
                    return (
                        items.length != 0 && (
                            <div className="occasion_links">
                                <h3>{category}</h3>
                                <div>
                                    {items.map((item) => {
                                        return <Link>{item}</Link>;
                                    })}
                                </div>
                            </div>
                        )
                    );
                })}
            </div>
        </div>
    );
};

export default Occasion;
