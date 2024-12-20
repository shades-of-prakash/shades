const outfits = {
    Adventurous: {
        Men: [
            { category: "Footwear", subcategory: "SportShoes" },
            { category: "Topwear", subcategory: "Jackets" },
            { category: "Bottomwear", subcategory: "CasualTrousers" },
            { category: "Accessories", subcategory: "Watches" },
        ],
        Women: [
            { category: "Footwear", subcategory: "SportsShoes" },
            { category: "WesternWear", subcategory: "Tops" },
            { category: "Bottomwear", subcategory: "Jeans" },
            { category: "Accessories", subcategory: "Sunglasses" },
        ],
    },
    Creative: {
        Men: [
            { category: "Topwear", subcategory: "Tshirts" },
            { category: "Bottomwear", subcategory: "Jeans" },
            { category: "Footwear", subcategory: "Sneakers" },
            { category: "Accessories", subcategory: "Sunglasses" },
        ],
        Women: [
            { category: "Topwear", subcategory: "Tshirts" },
            { category: "Bottomwear", subcategory: "EthnicWear" },
            { category: "Footwear", subcategory: "CasualShoes" },
            { category: "Accessories", subcategory: "Sunglasses" },
        ],
    },
    Introverted: {
        Men: [
            { category: "Topwear", subcategory: "CasualShirts" },
            { category: "Bottomwear", subcategory: "Jeans" },
            { category: "Footwear", subcategory: "CasualShoes" },
            { category: "Accessories", subcategory: "Watches" },
        ],
        Women: [
            { category: "Topwear", subcategory: "Tops" },
            { category: "Bottomwear", subcategory: "Jeans" },
            { category: "Footwear", subcategory: "Flats" },
            { category: "Accessories", subcategory: "Watches" },
        ],
    },
    Extroverted: {
        Men: [
            { category: "Topwear", subcategory: "CasualShirts" },
            { category: "Bottomwear", subcategory: "CasualTrousers" },
            { category: "Footwear", subcategory: "Sneakers" },
            { category: "Accessories", subcategory: "Sunglasses" },
        ],
        Women: [
            { category: "Bottomwear", subcategory: "Dresses" },
            { category: "Footwear", subcategory: "Heels" },
            { category: "Accessories", subcategory: "Sunglasses" },
            { category: "Topwear", subcategory: "Jackets" },
        ],
    },
    LaidBack: {
        Men: [
            { category: "Topwear", subcategory: "Tshirts" },
            { category: "Bottomwear", subcategory: "Shorts" },
            { category: "Footwear", subcategory: "FlipFlops" },
            { category: "Accessories", subcategory: "Sunglasses" },
        ],
        Women: [
            { category: "Topwear", subcategory: "Tshirts" },
            { category: "Bottomwear", subcategory: "Trousers" },
            { category: "Footwear", subcategory: "Flats" },
            { category: "Accessories", subcategory: "Sunglasses" },
        ],
    },
    Edgy: {
        Men: [
            { category: "Topwear", subcategory: "Jackets" },
            { category: "Bottomwear", subcategory: "Jeans" },
            { category: "Footwear", subcategory: "Sneakers" },
            { category: "Accessories", subcategory: "Sunglasses" },
        ],
        Women: [
            { category: "Topwear", subcategory: "Jackets" },
            { category: "Bottomwear", subcategory: "Jeans" },
            { category: "Footwear", subcategory: "CasualShoes" },
            { category: "Accessories", subcategory: "Sunglasses" },
        ],
    },
    Chic: {
        Men: [
            { category: "Topwear", subcategory: "FormalShirts" },
            { category: "Bottomwear", subcategory: "FormalTrousers" },
            { category: "Footwear", subcategory: "FormalShoes" },
            { category: "Accessories", subcategory: "Watches" },
        ],
        Women: [
            { category: "Bottomwear", subcategory: "Dresses" },
            { category: "Footwear", subcategory: "Heels" },
            { category: "Accessories", subcategory: "Watches" },
            { category: "Topwear", subcategory: "Jackets" },
        ],
    },
    Sporty: {
        Men: [
            { category: "Topwear", subcategory: "Tshirts" },
            { category: "Bottomwear", subcategory: "Trackpants" },
            { category: "Footwear", subcategory: "SportShoes" },
            { category: "Accessories", subcategory: "Watches" },
        ],
        Women: [
            { category: "Topwear", subcategory: "Tshirts" },
            { category: "Bottomwear", subcategory: "Leggings" },
            { category: "Footwear", subcategory: "SportsShoes" },
            { category: "Accessories", subcategory: "Watches" },
        ],
    },
    Romantic: {
        Men: [
            { category: "Topwear", subcategory: "CasualShirts" },
            { category: "Bottomwear", subcategory: "CasualTrousers" },
            { category: "Footwear", subcategory: "CasualShoes" },
            { category: "Accessories", subcategory: "Watches" },
        ],
        Women: [
            { category: "Bottomwear", subcategory: "Sarees" },
            { category: "Topwear", subcategory: "Dresses" },
            { category: "Footwear", subcategory: "Heels" },
            { category: "Accessories", subcategory: "Watches" },
        ],
    },
    Minimalist: {
        Men: [
            { category: "Topwear", subcategory: "Tshirts" },
            { category: "Bottomwear", subcategory: "Jeans" },
            { category: "Footwear", subcategory: "Sneakers" },
            { category: "Accessories", subcategory: "Watches" },
        ],
        Women: [
            { category: "Topwear", subcategory: "Tops" },
            { category: "Bottomwear", subcategory: "Jeans" },
            { category: "Footwear", subcategory: "Flats" },
            { category: "Accessories", subcategory: "Watches" },
        ],
    },
    Eclectic: {
        Men: [
            { category: "Topwear", subcategory: "Kurtas" },
            { category: "Bottomwear", subcategory: "CasualTrousers" },
            { category: "Footwear", subcategory: "Sandals" },
            { category: "Accessories", subcategory: "Sunglasses" },
        ],
        Women: [
            { category: "Topwear", subcategory: "Kurtas" },
            { category: "Bottomwear", subcategory: "Trousers" },
            { category: "Footwear", subcategory: "CasualShoes" },
            { category: "Accessories", subcategory: "Sunglasses" },
        ],
    },
    Classic: {
        Men: [
            { category: "Topwear", subcategory: "FormalShirts" },
            { category: "Bottomwear", subcategory: "FormalTrousers" },
            { category: "Footwear", subcategory: "FormalShoes" },
            { category: "Accessories", subcategory: "Watches" },
        ],
        Women: [
            { category: "Topwear", subcategory: "Tops" },
            { category: "Bottomwear", subcategory: "Trousers" },
            { category: "Footwear", subcategory: "Heels" },
            { category: "Accessories", subcategory: "Watches" },
        ],
    },
    Quirky: {
        Men: [
            { category: "Topwear", subcategory: "CasualShirts" },
            { category: "Bottomwear", subcategory: "Shorts" },
            { category: "Footwear", subcategory: "Sneakers" },
            { category: "Accessories", subcategory: "Sunglasses" },
        ],
        Women: [
            { category: "Bottomwear", subcategory: "EthnicWear" },
            { category: "Topwear", subcategory: "Tops" },
            { category: "Footwear", subcategory: "CasualShoes" },
            { category: "Accessories", subcategory: "Sunglasses" },
        ],
    },
    Sophisticated: {
        Men: [
            { category: "Topwear", subcategory: "FormalShirts" },
            { category: "Bottomwear", subcategory: "FormalTrousers" },
            { category: "Footwear", subcategory: "FormalShoes" },
            { category: "Accessories", subcategory: "Watches" },
        ],
        Women: [
            { category: "Topwear", subcategory: "Dresses" },
            { category: "Bottomwear", subcategory: "Saree" },
            { category: "Footwear", subcategory: "Heels" },
            { category: "Accessories", subcategory: "Watches" },
        ],
    },
};

export default outfits;
