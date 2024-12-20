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
	const [fromLocal, setFromLocal] = useState(false);
	useEffect(() => {
		const savedOutfits = localStorage.getItem("generatedOutfits");
		if (savedOutfits) {
			setFromLocal(true);
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
			des: "Adventurous individuals thrive on exploration and new experiences. They seek excitement, whether through travel, extreme sports, or trying unfamiliar foods, and their bold nature encourages others to step outside their comfort zones.",
		},
		{
			personality: "Creative",
			des: "Creative individuals express themselves through imagination and innovation. They often think outside the box, using their artistic talents in various forms like art, writing, or design to bring unique ideas and solutions to life.",
		},
		{
			personality: "Introverted",
			des: "Introverted individuals prefer solitude or intimate gatherings, often finding energy in reflection rather than social interaction. They value deep connections, enjoying thoughtful conversations with close friends over large social events.",
		},
		{
			personality: "Extroverted",
			des: "Extroverted individuals are outgoing and energized by social interactions. They thrive in group settings, easily making new friends and often taking the lead in conversations and activities, making them lively and engaging companions.",
		},
		{
			personality: "LaidBack",
			des: "Laidback individuals approach life with a relaxed attitude. They remain calm in challenging situations, enjoy the simple pleasures, and foster a sense of peace and contentment, creating a soothing atmosphere for those around them.",
		},
		{
			personality: "Edgy",
			des: "Edgy individuals embrace boldness and often challenge societal norms. They express their uniqueness through unconventional styles and ideas, inspiring others to celebrate individuality and think differently.",
		},
		{
			personality: "Chic",
			des: "Chic individuals have a refined sense of style and sophistication. They appreciate aesthetics, blending classic and contemporary elements to create a polished look that exudes elegance and grace in every aspect of their lives.",
		},
		{
			personality: "Sporty",
			des: "Sporty individuals are active and enjoy participating in sports and outdoor activities. They prioritize fitness and competition, often inspiring others to embrace an active lifestyle and appreciate the joy of physical movement.",
		},
		{
			personality: "Romantic",
			des: "Romantic individuals have a deep appreciation for beauty and love. They find joy in heartfelt connections and often enjoy storytelling and art that evoke emotions, creating lasting memories through meaningful relationships.",
		},
		{
			personality: "Minimalist",
			des: "Minimalist individuals value simplicity and practicality. They focus on quality over quantity, cultivating a clutter-free lifestyle that emphasizes harmony and mindfulness in their surroundings and experiences.",
		},
		{
			personality: "Eclectic",
			des: "Eclectic individuals celebrate diversity in styles and interests. They enjoy mixing different influences, creating a rich personal tapestry that reflects their multifaceted personalities and open-mindedness.",
		},
		{
			personality: "Classic",
			des: "Classic individuals embody timeless elegance, often gravitating towards traditional styles. They appreciate quality and craftsmanship, choosing pieces with enduring appeal, making them polished and refined in any setting.",
		},
		{
			personality: "Quirky",
			des: "Quirky individuals embrace their uniqueness with a playful sense of humor and style. They celebrate individuality, often delighting others with their imaginative ideas and encouraging everyone to express their quirks.",
		},
		{
			personality: "Sophisticated",
			des: "Sophisticated individuals have a cultured perspective on life, appreciating the arts and intellectual pursuits. Their elegance extends to their demeanor and conversations, making them captivating companions with a depth of knowledge.",
		},
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
		{ value: "LaidBack", label: "LaidBack" },
		{ value: "Edgy", label: "Edgy" },
		{ value: "Chic", label: "Chic" },
		{ value: "Sporty", label: "Sporty" },
		{ value: "Romantic", label: "Romantic" },
		{ value: "Minimalist", label: "Minimalist" },
		{ value: "Eclectic", label: "Eclectic" },
		{ value: "Classic", label: "Classic" },
		{ value: "Quirky", label: "Quirky" },
		{ value: "Sophisticated", label: "Sophisticated" },
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
		console.log("fetchdetails", category, gender);
		try {
			const response = await fetch(
				`${
					import.meta.env.VITE_API_URL
				}/api/products/random/${gender}/${category}?limit=3`
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
			let topwear =
				resolvedCategories.find((item) => item.category === "Topwear")
					?.products || [];
			let bottomwear =
				resolvedCategories.find((item) => item.category === "Bottomwear")
					?.products || [];
			let footwear =
				resolvedCategories.find((item) => item.category === "Footwear")
					?.products || [];
			let accessories =
				resolvedCategories.find((item) => item.category === "Accessories")
					?.products || [];

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
			console.log(finalOutfits);
			setIsLoading(false); // Stop loading
		}
	};

	return (
		<div className="per_out_div">
			<div className="ai_intro">
				<h1>Shades AI-Powered Outfit Stylist</h1>
				<p>
					Discover your unique style with our AI Outfit Generator, designed to
					curate personalized outfits that reflect your personality traits...
				</p>
			</div>
			<div className="per_out_content">
				<h2>Choose your personality</h2>
				<div className="per_select_div">
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
						onClick={() => setShowPersonalityDetails((prev) => !prev)}
					>
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
						disabled={isLoading}
					>
						{isLoading ? "Generating..." : "Generate Outfit"}
					</button>
				</div>
				{APIData.length > 0 && (
					<div className="outfits_display_div">
						{fromLocal && (
							<h1 className="previous">Previously created outfits</h1>
						)}
						{APIData.map((item, index) => {
							return (
								<div key={index} className="outfit_div">
									<h2>{item.outfitNo}</h2>
									<div className="outfit_sub_div">
										<div>
											<h3>Topwear</h3>
											<Card
												product={item.topwear}
												styles={{ width: "250px" }}
											/>
										</div>
										<div>
											<h3>Bottomwear</h3>
											<Card
												product={item.bottomwear}
												styles={{ width: "250px" }}
											/>
										</div>
										<div>
											<h3>Footwear</h3>
											<Card
												product={item.footwear}
												styles={{ width: "250px" }}
											/>
										</div>
										<div>
											<h3>Accessory</h3>
											<Card
												product={item.accessories}
												styles={{ width: "250px" }}
											/>
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
