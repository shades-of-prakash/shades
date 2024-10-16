const bodyshapeoutfits = {
    Men: {
        Rectangle: {
            Topwear: ["Tshirts", "CasualShirts", "FormalShirts", "Jackets"],
            Bottomwear: [
                "Jeans",
                "CasualTrousers",
                "FormalTrousers",
                "Trackpants",
            ],
            Footwear: ["CasualShoes", "SportShoes", "FormalShoes", "Sneakers"],
            Accessories: ["Sunglasses", "Watches"],
        },
        InvertedTriangle: {
            Topwear: ["Tshirts", "Jackets"],
            Bottomwear: ["Jeans", "CasualTrousers"],
            Footwear: ["SportShoes", "CasualShoes", "Sneakers"],
            Accessories: ["Sunglasses", "Watches"],
        },
        Oval: {
            Topwear: ["CasualShirts", "Jackets"],
            Bottomwear: ["CasualTrousers", "Trackpants"],
            Footwear: ["CasualShoes", "FormalShoes"],
            Accessories: ["Watches"],
        },
        Trapezoid: {
            Topwear: ["Tshirts", "CasualShirts", "FormalShirts", "Jackets"],
            Bottomwear: ["Jeans", "CasualTrousers"],
            Footwear: ["CasualShoes", "Sneakers", "FormalShoes"],
            Accessories: ["Watches", "Sunglasses"],
        },
    },
    Women: {
        Hourglass: {
            WesternWear: ["Dresses", "Tops", "Tshirts", "Jeans", "Trousers"],
            Footwear: ["Flats", "CasualShoes", "Heels"],
            Accessories: ["Sunglasses", "Watches"],
        },
        BottomHourglass: {
            WesternWear: ["Dresses", "Tops", "Jeans"],
            Footwear: ["Heels", "Flats"],
            Accessories: ["Watches"],
        },
        TopHourglass: {
            WesternWear: ["Tops", "Dresses", "Jeans"],
            Footwear: ["Heels", "Flats"],
            Accessories: ["Watches"],
        },
        Spoon: {
            WesternWear: ["Dresses", "Tops", "Trousers"],
            Footwear: ["Heels", "Flats"],
            Accessories: ["Sunglasses"],
        },
        Triangle: {
            WesternWear: ["Tops", "Dresses", "Jeans", "Trousers"],
            Footwear: ["Heels", "Flats"],
            Accessories: ["Watches"],
        },
        InvertedTriangle: {
            WesternWear: ["Tops", "Dresses", "Jeans", "Trousers"],
            Footwear: ["Flats", "Heels"],
            Accessories: ["Sunglasses", "Watches"],
        },
        Rectangle: {
            WesternWear: ["Dresses", "Tops", "Trousers", "Jeans"],
            Footwear: ["Flats", "Heels"],
            Accessories: ["Watches", "Sunglasses"],
        },
    },
};
export default bodyshapeoutfits;
