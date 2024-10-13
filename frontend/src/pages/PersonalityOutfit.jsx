import React, { useState, useEffect } from "react";
import "../styles/personalityoutfit.css";
import CustomSelect from "../components/CustomSelect";
import { useTheme } from "../hooks/UseTheme";
import outfits from "../utils/genderOutfits";
import Card from "../components/Card.jsx";

const PersonalityOutfit = () => {
    const { isDark } = useTheme();
    const [showPersonalityDetails, setShowPersonalityDetails] = useState(false);
    const [selectedPersonality, setSelectedPersonality] = useState(null);
    const [selectedGender, setSelectedGender] = useState(null);
    const [APIData, setAPIData] = useState([]); // State to store API data
    const [isLoading, setIsLoading] = useState(false); // State for loading

    useEffect(() => {
        // Load data from localStorage on component mount
        const savedOutfits = localStorage.getItem("generatedOutfits");
        if (savedOutfits) {
            setAPIData(JSON.parse(savedOutfits));
        }
    }, []);

    useEffect(() => {
        // Save data to localStorage whenever APIData changes
        if (APIData.length > 0) {
            localStorage.setItem("generatedOutfits", JSON.stringify(APIData));
        }
    }, [APIData]);

    const personality = [
        {
            personality: "Adventurous",
            des: "Adventurous individuals thrive on exploration and new experiences...",
        },
        // Other personality descriptions here...
    ];

    const handleSelectChange = (selectedOption) => {
        setSelectedPersonality(selectedOption);
    };

    const handleGenderChange = (selectedOption) => {
        setSelectedGender(selectedOption);
    };

    const valuesAndLables = [
        { value: "Select Personality", label: "Select Personality" },
        { value: "Adventurous", label: "Adventurous" },
        { value: "Creative", label: "Creative" },
        { value: "Introverted", label: "Introverted" },
        { value: "Extroverted", label: "Extroverted" },
        // Other options...
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

    const fetchOutfitsFromAPI = async (category, gender) => {
        try {
            const response = await fetch(
                `http://localhost:3000/api/products/${gender}/${category}?limit=3`
            );
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json();
            return data.products || []; // Return products or an empty array
        } catch (error) {
            console.error("Error fetching outfits:", error);
            return [];
        }
    };

    const generateOutfit = async () => {
        if (selectedPersonality && selectedGender) {
            setIsLoading(true); // Start loading
            const outfit =
                outfits[selectedPersonality.value][selectedGender.value] || [];
            console.log("Selected Outfit:", outfit);

            // Initialize an array to hold the final outfits
            const finalOutfits = [];

            // Fetch products for each category
            const categoryPromises = outfit.map(async (out) => {
                const products = await fetchOutfitsFromAPI(
                    `${selectedGender.label}s${out.subcategory}`,
                    selectedGender.label
                );

                return {
                    category: out.category,
                    products: products,
                };
            });

            const resolvedCategories = await Promise.all(categoryPromises);

            // Build outfits by taking one product from each category
            let topwear =
                resolvedCategories.find((item) => item.category === "Topwear")
                    ?.products || [];
            let bottomwear =
                resolvedCategories.find(
                    (item) => item.category === "Bottomwear"
                )?.products || [];
            let footwear =
                resolvedCategories.find((item) => item.category === "Footwear")
                    ?.products || [];
            let accessories =
                resolvedCategories.find(
                    (item) => item.category === "Accessories"
                )?.products || [];

            // Create one outfit with one item from each category
            const outfitCount = Math.max(
                topwear.length,
                bottomwear.length,
                footwear.length,
                accessories.length
            );

            for (let i = 0; i < outfitCount; i++) {
                const outfitItem = {
                    outfitNo: i + 1,
                    topwear: topwear[i] ? { ...topwear[i] } : null,
                    bottomwear: bottomwear[i] ? { ...bottomwear[i] } : null,
                    footwear: footwear[i] ? { ...footwear[i] } : null,
                    accessories: accessories[i] ? { ...accessories[i] } : null,
                };

                finalOutfits.push(outfitItem);
            }

            setAPIData(finalOutfits);
            setIsLoading(false); // Stop loading
        }
    };

    return (
        <div className="per_out_div">
            <div className="ai_intro">
                <h1>Shades AI-Powered Outfit Stylist</h1>
                <p>
                    Discover your unique style with our AI Outfit Generator,
                    designed to curate personalized outfits that reflect your
                    personality traits...
                </p>
            </div>
            <div className="per_out_content">
                <h2>Choose your personality</h2>
                <div className="select_div">
                    <div className="per_select">
                        <CustomSelect
                            options={valuesAndLables}
                            onChange={handleSelectChange}
                            theme={isDark}
                        />
                    </div>
                    <div className="gender_select">
                        <CustomSelect
                            options={genderValues}
                            onChange={handleGenderChange}
                            theme={isDark}
                        />
                    </div>
                    <button
                        className="hide_button"
                        onClick={() =>
                            setShowPersonalityDetails((prev) => !prev)
                        }>
                        {showPersonalityDetails
                            ? "Hide Personalities"
                            : "View Personalities"}
                    </button>
                </div>
                {showPersonalityDetails && (
                    <div className="ai_personality_div">
                        {personality.map((item, index) => (
                            <div key={index} className="per_card">
                                <h3>{item.personality}</h3>
                                <p>{item.des}</p>
                            </div>
                        ))}
                    </div>
                )}
                <div className="generate_outfit dfc">
                    <button
                        className="outfit_button"
                        onClick={generateOutfit}
                        disabled={isLoading}>
                        {isLoading ? "Generating..." : "Generate Outfit"}
                    </button>
                </div>
                {APIData.length > 0 && (
                    <div className="outfits_display_div">
                        {APIData.map((item, index) => {
                            return (
                                <div key={index} className="outfit_div">
                                    <h2>{item.outfitNo}</h2>
                                    <div className="outfit_sub_div">
                                        <div>
                                            <h3>Topwear</h3>
                                            <Card product={item.topwear} />
                                        </div>
                                        <div>
                                            <h3>Bottomwear</h3>
                                            <Card product={item.bottomwear} />
                                        </div>
                                        <div>
                                            <h3>Footwear</h3>
                                            <Card product={item.footwear} />
                                        </div>
                                        <div>
                                            <h3>Accessory</h3>
                                            <Card product={item.accessories} />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
};

export default PersonalityOutfit;
