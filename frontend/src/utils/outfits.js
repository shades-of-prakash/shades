const valuesAndLables = [
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

const outfits = {
    Adventurous: {
        Men: [
            { category: "Footwear", subcategory: "SportShoes" },
            { category: "Topwear", subcategory: "Jackets" },
            { category: "Bottomwear", subcategory: "CasualTrousers" },
            { category: "Accessories", subcategory: "Watches" },
        ],
        Women: [
            { category: "Footwear", subcategory: "Sports Shoes" },
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
            { category: "WesternWear", subcategory: "Tshirts" },
            { category: "Fusion Wear", subcategory: "EthnicWear" },
            { category: "Footwear", subcategory: "Casual Shoes" },
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
            { category: "WesternWear", subcategory: "Tops" },
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
            { category: "WesternWear", subcategory: "Dresses" },
            { category: "Footwear", subcategory: "Heels" },
            { category: "Accessories", subcategory: "Sunglasses" },
            { category: "Fusion Wear", subcategory: "Jackets" },
        ],
    },
    LaidBack: {
        Men: [
            { category: "Topwear", subcategory: "Tshirts" },
            { category: "Bottomwear", subcategory: "Shorts" },
            { category: "Footwear", subcategory: "Flip Flops" },
            { category: "Accessories", subcategory: "Sunglasses" },
        ],
        Women: [
            { category: "WesternWear", subcategory: "Tshirts" },
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
            { category: "Fusion Wear", subcategory: "Jackets" },
            { category: "WesternWear", subcategory: "Jeans" },
            { category: "Footwear", subcategory: "Casual Shoes" },
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
            { category: "WesternWear", subcategory: "Dresses" },
            { category: "Footwear", subcategory: "Heels" },
            { category: "Accessories", subcategory: "Watches" },
            { category: "Fusion Wear", subcategory: "Jackets" },
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
            { category: "WesternWear", subcategory: "Tshirts" },
            { category: "Bottomwear", subcategory: "Leggings" },
            { category: "Footwear", subcategory: "Sports Shoes" },
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
            { category: "Fusion Wear", subcategory: "Sarees" },
            { category: "WesternWear", subcategory: "Dresses" },
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
            { category: "WesternWear", subcategory: "Tops" },
            { category: "Bottomwear", subcategory: "Jeans" },
            { category: "Footwear", subcategory: "Flats" },
            { category: "Accessories", subcategory: "Watches" },
        ],
    },
    Eclectic: {
        Men: [
            { category: "FestiveWear", subcategory: "Kurtas" },
            { category: "Bottomwear", subcategory: "CasualTrousers" },
            { category: "Footwear", subcategory: "Sandals" },
            { category: "Accessories", subcategory: "Sunglasses" },
        ],
        Women: [
            { category: "Fusion Wear", subcategory: "Kurtas" },
            { category: "WesternWear", subcategory: "Trousers" },
            { category: "Footwear", subcategory: "Casual Shoes" },
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
            { category: "WesternWear", subcategory: "Tops" },
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
            { category: "Fusion Wear", subcategory: "EthnicWear" },
            { category: "WesternWear", subcategory: "Tops" },
            { category: "Footwear", subcategory: "Casual Shoes" },
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
            { category: "WesternWear", subcategory: "Dresses" },
            { category: "Fusion Wear", subcategory: "Sarees" },
            { category: "Footwear", subcategory: "Heels" },
            { category: "Accessories", subcategory: "Watches" },
        ],
    },
};
