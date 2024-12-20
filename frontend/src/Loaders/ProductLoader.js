import capitalizeWordsWithPrefix from "../utils/Capitalize";
const productCache = {};
export async function productLoader({ params, request }) {
	const category = params.category;
	const gender = params.gender;
	const url = new URL(request.url);
	const page = url.searchParams.get("page") || 1;
	const limit = url.searchParams.get("limit") || 12;
	if (gender !== "Men" && gender !== "Women") {
		throw new Response("Not Found", { status: 404 }); // Throwing 404 if gender is invalid
	}
	let newCategory;
	if (category) {
		newCategory = capitalizeWordsWithPrefix(category, gender + "s");
	}

	const cacheKey = `${newCategory || "all"}_${page}_${limit}`;
	console.log(
		`Fetching products for category: ${newCategory}, page: ${page}, limit: ${limit}`
	);
	console.log("ehjkl;");

	if (productCache[cacheKey]) {
		console.log(
			"Returning cached data for category:",
			newCategory,
			"page:",
			page
		);
		return productCache[cacheKey];
	}

	let apiUrl = `${import.meta.env.VITE_API_URL}/api/products/${gender}${
		category ? "/" + newCategory : ""
	}?page=${page}&limit=${limit}`;
	console.log(apiUrl);
	try {
		const response = await fetch(apiUrl);
		console.log(response);
		if (!response.ok) {
			throw new Error(`Error fetching products: ${response.statusText}`);
		}

		const data = await response.json();
		console.log(data);
		productCache[cacheKey] = data; // Cache the data with the key
		return data;
	} catch (error) {
		console.error("Error in productLoader:", error.message);
		throw error;
	}
}
