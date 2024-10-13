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
