let user = [
    {
        name: {
            first: "roneet",
            last: "kumar",
            id: "roneet"
        },
        mobile: "438-979-3111",
        password: "1111",
        email: "roneetparida@gmail.com",
    },
    {
        name: {
            first: "Rupinder",
            last: "Virdi",
            id: "roop"
        },
        mobile: "438-979-3111",
        password: "2222",
        email: "virdirocking.96@gmail.com",
    },
    {
        name: {
            first: "vinay",
            last: "rao",
            id: "vinay"
        },
        mobile: "438-979-3111",
        password: "3333",
        email: "vinay@gmail.com",
    },
    {
        name: {
            first: "reshma",
            last: "shaikh",
            id: "resh"
        },
        mobile: "438-979-3111",
        password: "4444",
        email: "reshma@gmail.com",
    },
    {
        name: {
            first: "davinder",
            last: "sharma",
            id: "davinder"
        },
        mobile: "438-979-3111",
        password: "5555",
        email: "davinder@gmail.com",
    },
    {
        name: {
            first: "shivam",
            last: "patel",
            id: "shivam"
        },
        mobile: "438-979-3111",
        password: "6666",
        email: "shivam@gmail.com",
    }
];

let product = [
    {
        name: "Sandisk Mirco SD",
        price: 43,
        imgSrc: "https://images-na.ssl-images-amazon.com/images/I/41M0JdhK3PL._AA160_.jpg",
        categories: "New-Releases Electronics"
    },
    {
        name: "Wyze Camera v2",
        price: 37,
        imgSrc: "https://images-na.ssl-images-amazon.com/images/I/41dFbSyyPsL._AA160_.jpg",
        categories: "New-Releases Electronics"
    },
    {
        name: "Echo Dot",
        price: 69,
        imgSrc: "https://images-na.ssl-images-amazon.com/images/I/41CRnvYqmqL._AA160_.jpg",
        categories: "Sale Electronics"
    },
    {
        name: "Wyze Camera",
        price: 55,
        imgSrc: "https://images-na.ssl-images-amazon.com/images/I/31dz6wCIWML._AA160_.jpg",
        categories: "Electronics"
    },
    {
        name: "Anker Sound Buds",
        price: 32,
        imgSrc: "https://images-na.ssl-images-amazon.com/images/I/31B+n7xrh4L._AA160_.jpg",
        categories: "Sale Electronics"
    },
    {
        name: "Anker Wireless Charger",
        price: 29,
        imgSrc: "https://images-na.ssl-images-amazon.com/images/I/31tER0mi8wL._AA160_.jpg",
        categories: "New-Releases Electronics"
    },
    {
        name: "Go Pro Hero 6",
        price: 529,
        imgSrc: "https://images-na.ssl-images-amazon.com/images/I/31fRgbwaVGL._AA160_.jpg",
        categories: "Sale Electronics"
    },
    {
        name: "Samsung Galaxy A8",
        price: 189,
        imgSrc: "https://m.media-amazon.com/images/I/41FIUOf1BHL._AC_UL436_.jpg",
        categories: "New-Releases Electronics"
    },
    {
        name: "Kingston 512GB",
        price: 79,
        imgSrc: "https://m.media-amazon.com/images/I/71JLh+nx3bL._AC_UL436_.jpg",
        categories: "New-Releases Electronics"
    },
    {
        name: "Bose QC 35",
        price: 449,
        imgSrc: "https://m.media-amazon.com/images/I/61r+E0oup6L._AC_UL436_.jpg",
        categories: "Electronics"
    },
    {
        name: "TLC TV 55'",
        price: 719,
        imgSrc: "https://m.media-amazon.com/images/I/714ElWQ4JwL._AC_UL436_.jpg",
        categories: "New-Releases Electronics"
    },
    {
        name: "Moto G7 Power",
        price: 259,
        imgSrc: "https://m.media-amazon.com/images/I/51a5gUDC4sL._AC_UL436_.jpg",
        categories: "New-Releases Electronics"
    },
    {
        name: "Mpow Flame Headphones",
        price: 28,
        imgSrc: "https://m.media-amazon.com/images/I/61Uh025cziL._AC_UL436_.jpg",
        categories: "Electronics"
    },
    {
        name: "AMD YD2600BBAFBOX",
        price: 232,
        imgSrc: "https://m.media-amazon.com/images/I/51W-O4Jn9EL._AC_UL436_.jpg",
        categories: "Electronics"
    },
    {
        name: "Logitech G203 Prodigy",
        price: 29,
        imgSrc: "https://m.media-amazon.com/images/I/71BmDZ6u22L._AC_UL436_.jpg",
        categories: "Electronics New-Releases"
    },
    {
        name: "Asus C202SA-YS02 11.6'",
        price: 259,
        imgSrc: "https://m.media-amazon.com/images/I/71S3Rnugf7L._AC_UL436_.jpg",
        categories: "Electronics Best-Sellers New-Releases"
    },
    {
        name: "Corsair 16GB",
        price: 100,
        imgSrc: "https://m.media-amazon.com/images/I/81mSADb0qhL._AC_UL436_.jpg",
        categories: "Electronics New Releases"
    },
    {
        name: "Huawei Honor 8X",
        price: 299,
        imgSrc: "https://m.media-amazon.com/images/I/81uuNY+2tZL._AC_UL436_.jpg",
        categories: "Electronics New-Releases"
    },
    {
        name: "Samsung Galaxy A10",
        price: 180,
        imgSrc: "https://m.media-amazon.com/images/I/61U05T8Bl9L._AC_UL436_.jpg",
        categories: "Electronics Best-Sellers New-Releases"
    },
    {
        name: "Arespark Earbuds",
        price: 59,
        imgSrc: "https://m.media-amazon.com/images/I/61FZJH0OzxL._AC_UL436_.jpg",
        categories: "Electronics Sale New-Releases"
    },
    {
        name: "NVIDIA SHIELD TV",
        price: 229,
        imgSrc: "https://m.media-amazon.com/images/I/518UNbV34gL._AC_UL436_.jpg",
        categories: "Electronics New-Releases"
    },
    {
        name: "Kellogg\"s Nutri - Grain ",
        price: 5,
        imgSrc: "https://m.media-amazon.com/images/I/A1v3LoyheSL._AC_UL320_.jpg",
        categories: "Food"
    },
    {
        name: "Yupik Cashews",
        price: 24,
        imgSrc: "https://m.media-amazon.com/images/I/91rm+KZtiML._AC_UL320_.jpg",
        categories: "Food"
    },
    {
        name: "McCafé Premium",
        price: 229,
        imgSrc: "https://m.media-amazon.com/images/I/51DMel2czfL._AC_UL320_.jpg",
        categories: "Food Best-Sellers New-Releases"
    },
    {
        name: "M&M\"s Peanut Butter ",
        price: 26,
        imgSrc: "https://m.media-amazon.com/images/I/81X5ZiXjMFL._AC_UL320_.jpg",
        categories: "Food Sale New-Releases"
    },
    {
        name: "Kellogg\"s Pop Tarts",
        price: 2,
        imgSrc: "https://m.media-amazon.com/images/I/51Vjk9BImoL._AC_UL320_.jpg",
        categories: "Food New-Releases"
    },
    {
        name: "Almond Butter",
        price: 11,
        imgSrc: "https://m.media-amazon.com/images/I/91dRrjcR7cL._AC_UL320_.jpg",
        categories: "Food New-Releases"
    },
    {
        name: "Crispers Barbecue",
        price: 2,
        imgSrc: "https://m.media-amazon.com/images/I/51JDOCH4p+L._AC_UL320_.jpg",
        categories: "Food Best-Sellers"
    },
    {
        name: "Protien Bar",
        price: 3,
        imgSrc: "https://m.media-amazon.com/images/I/81hpe5KbuiL._AC_UL320_.jpg",
        categories: "Food Sale New-Releases"
    },
    {
        name: "7UP Cans",
        price: 5,
        imgSrc: "https://m.media-amazon.com/images/I/81Nt7iGIqPL._AC_UL320_.jpg",
        categories: "Food"
    },
    {
        name: "CHEERIOS Chocolate",
        price: 2,
        imgSrc: "https://m.media-amazon.com/images/I/816s9s1J9EL._AC_UL320_.jpg",
        categories: "Food"
    }
];
