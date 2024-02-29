
var products = [
    {
        imgUrl: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/614a4c83-3787-4815-9cab-88b6653ea95d/ja-dri-fit-pullover-basketball-hoodie-Cp748n.png",
        name: "JA",
        brand: "JMen's Dri-FIT Pullover Basketball Hoodie",
        category: "Hoodie",
        color: "Black",
        Price: 5995,
        Size: ["S", "M", "L", "XL"],
    },
    {
        imgUrl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/aa67513e-ad70-46c4-b393-d68aa9f5a5dc/paris-saint-germain-fleece-pullover-hoodie-smXzb8.png",
        name: "Men's Fleece Pullover Hoodie",
        category: " Hoodie",
        color: "Black",
        Price: 3995,
        Size: ["S", "M", "L", "XL"]
    },
    {
        imgUrl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fd7c3e6d-d960-4886-8576-7171eaab80ab/standard-issue-basketball-hoodie-bSSBMV.png",
        name: "Men's Premium Basketball Hoodie",
        category: " Hoodie",
        brand: "Jordon",
        color: "Blue",
        Price: 5995,
        Size: ["S", "M", "L", "XL"]
    },
    {
        imgUrl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8c62cfe8-6d86-416b-90b6-d50b8f13935c/repel-miler-running-jacket-Pprnvp.png",
        name: "Nike Repel Miler",
        category: "Jacket",
        color: "Blue",
        Price: 4695,
        Size: ["S", "M", "L", "XL"]
    },
    {
        imgUrl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/29cadabd-cbfc-4f81-82d0-ddd197253d6a/space-jam-a-new-legacy-basketball-t-shirt-GS3FtT.png",
        name: "Nike x Space Jam: A New Legacy",
        category: "T-Shirt",
        brand: "Jordon",
        color: "White",
        Price: 1795,
        Size: ["S", "M", "L", "XL"]
    },
    {
        imgUrl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/26270d1f-c0ae-444d-890e-5099263e69b3/sportswear-dri-fit-tech-pack-unlined-tracksuit-jacket-S8jRZd.png",
        name: "Nike Sportswear Dri-FIT Tech Pack",
        category: "Jacket",
        color: "Brown",
        Price: 7995,
        Size: ["S", "M", "L", "XL"]
    },
    {
        imgUrl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fb09f6c8-d455-4d09-9638-1a07f2ba3ba6/air-fleece-hoodie-bqzS7r.png",
        name: "Men's Full-Zip Fleece Hoodie",
        category: "Hoodie",
        brand: "Jordon",
        color: "Black",
        Price: 4397,
        Size: ["S", "M", "L", "XL"]
    },

    {
        imgUrl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/16788f5a-13fc-4a2a-8d65-ef9d22b9e237/jordan-essentials-woven-jacket-TsW2BP.png",
        name: "Jordan Essentials",
        category: "Jacket",
        color: "Red",
        Price: 5495,
        Size: ["S", "M", "L", "XL"]
    },
    {
        imgUrl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8c8bd0de-b76f-4011-8d98-50d35d373971/paris-saint-germain-logo-t-shirt-PkTBzc.png",
        name: "Men's Logo T-Shirt",
        category: "T-Shirt",
        brand: "Jordon",
        color: "Black",
        Price: 2195,
        Size: ["S", "M", "L", "XL"]
    },
    {
        imgUrl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2ff79d28-c6fe-42e9-bb56-519635b1b026/los-angeles-lakers-city-edition-dri-fit-nba-swingman-jersey-W4m3x8.png",
        name: "Nike Dri-FIT NBA Swingman Jersey",
        category: "T-Shirt",
        color: "Blue",
        Price: 6495,
        Size: ["S", "M", "L", "XL"]
    },
    {
        imgUrl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2cdf345c-7504-45b5-85b6-061a9aa882b2/story-pack-training-hoodie-mFzdfB.png",
        name: "Men's Full-Zip Training Hoodie",
        category: "Hoodie",
        brand: "Jordon",
        color: "Yellow",
        Price: 3995,
        Size: ["S", "M", "L", "XL"]
    },
    {
        imgUrl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/da0936a7-2f46-4964-92a1-dce53b85d3dc/liverpool-fc-football-jacket-LZZpMD.png",
        name: "Liverpool F.C.",
        category: "Jacket",
        color: "Orange",
        Price: 5495,
        Size: ["S", "M", "L", "XL"]
    },
    {
        imgUrl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/50a2d8bd-76ba-4910-81b0-652354485af6/pro-dri-fit-tight-fit-short-sleeve-top-wkRT07.png",
        name: "Nike Sportswear Alien Air ",
        category: "T-Shirt",
        brand: "Jordon",
        color: "Black",
        Price: 1795,
        Size: ["S", "M", "L", "XL"]
    },
    {
        imgUrl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ce765ddc-3819-472b-b937-708ed1057001/sacai-parka-FHqnG3.png",
        name: "Nike x sacai",
        category: "Jacket",
        color: "Olive",
        Price: 16157,
        Size: ["S", "M", "L", "XL"]
    },
    {
        imgUrl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/325c681d-9d87-42b6-9804-bdca1ab8cacf/paris-saint-germain-strike-dri-fit-football-tracksuit-gX6BLR.png",
        name: "Paris Saint-Germain Strike",
        category: "Tracksuit",
        color: "Gray",
        Price: 6995,
        Size: ["S", "M", "L", "XL"]
    },
    {
        imgUrl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2053adc6-6d9e-4765-8ebf-0f0dbc770ea0/dri-fit-academy-knit-football-tracksuit-ZKZwtz.png",
        name: "Nike Dri-FIT Academy",
        category: "Tracksuit",
        color: "Black",
        Price: 16999,
        Size: ["S", "M", "L", "XL"]
    },
    {
        imgUrl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b369e7dd-847d-4b4b-a9c6-23c798a98e1b/dri-fit-training-t-shirt-DwTR13.png",
        name: "Men's Training T-Shirt",
        category: "T-Shirt",
        brand: "Jordon",
        color: "Brown",
        Price: 2195,
        Size: ["S", "M", "L", "XL"]
    },

    {
        imgUrl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/120f0c39-3952-42b8-9591-04a6cebb8045/sportswear-polo-9LgBf1.png",
        name: "Men's Polo",
        category: "T-Shirt",
        color: "Orange",
        Price: 1795,
        Size: ["S", "M", "L", "XL"]
    },

    {
        imgUrl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/030bfeb8-2b16-459a-85eb-7271d9a4108d/skepta-tracksuit-jacket-C4JxJX.png",
        name: "Nike x Skepta",
        category: "Tracksuit",
        brand: "Jordon",
        color: "Black",
        Price: 10995,
        Size: ["S", "M", "L", "XL"]
    },
    {
        imgUrl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b54e07bf-763f-4068-80f0-403d9fd9393c/adv-run-division-running-tights-40fSxh.png",
        name: "Nike Therma-FIT ADV Run Division",
        category: "Trousers",
        brand: "NikeLab",
        color: "Gray",
        Price: 6296,
        Size: ["S", "M", "L", "XL"]
    },
    {
        imgUrl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5d133339-a9e3-4256-bf7c-877b5ddcdbbb/los-angeles-lakers-showtime-city-edition-dri-fit-nba-short-sleeve-jacket-xTrHKH.png",
        name: "Men's Nike Dri-FIT NBA Short-SleeveT-Shirt ",
        category: "T-Shirt",
        color: "Yellow",
        Price: 7995,
        Size: ["S", "M", "L", "XL"]
    },

    {
        imgUrl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/bba89688-2b9f-4cb3-b780-7465a5701686/sportswear-unlined-utility-cargo-trousers-HR5W9B.png",
        name: "Nike Sportswear",
        category: "Trousers",
        brand: "NikeLab",
        color: "Black",
        Price: 3695,
        Size: ["S", "M", "L", "XL"]
    },
    {
        imgUrl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/218a8b5b-3540-4fa5-a2e7-9d2f888f248d/sportswear-t-shirt-tqcNzg.png",
        name: "Men's T-Shirt",
        category: "T-Shirt",
        color: "White",
        Price: 1795,
        Size: ["S", "M", "L", "XL"]
    },

    {
        imgUrl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/591e86aa-32d6-4325-ba31-71d6ce3fb0c5/sportswear-tech-fleece-joggers-69b5nC.png",
        name: "Nike Sportswear Tech Fleece",
        category: "Trousers",
        brand: "NikeLab",
        color: "White",
        Price: 8219,
        Size: ["S", "M", "L", "XL"]
    },
    {
        imgUrl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3fef36e2-6c88-4ee0-a277-33d178ceee5f/fc-barcelona-strike-dri-fit-knit-football-pants-xsmS1z.png",
        name: "F.C. Barcelona Strike",
        category: "Trousers",
        color: "Black",
        Price: 3995,
        Size: ["S", "M", "L", "XL"]
    },
    {
        imgUrl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/645ad478-f702-4623-b174-5dbbae6d0e8c/sportswear-swoosh-tech-fleece-trousers-l3DTt8.png",
        name: "Nike Sportswear Swoosh Tech Fleece",
        category: "Trousers",
        brand: "NikeLab",
        color: "Gray",
        Price: 5995,
        Size: ["S", "M", "L", "XL"]
    },
    {
        imgUrl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4e77db60-a5b6-4dd8-a04f-60012ee7bb8f/dri-fit-basketball-shorts-JJVwFv.png",
        name: "Nike Dri-FIT",
        category: "Shorts",
        color: "Black",
        Price: 3225,
        Size: ["S", "M", "L", "XL"]
    },
    {
        imgUrl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/18b95d21-beaf-4614-9bc3-6a375c24538d/dri-fit-flex-stride-trail-shorts-SMQt6t.png",
        name: "Nike Dri-FIT Flex Stride",
        category: "Shorts",
        brand: "NikeLab",
        color: "Yellow",
        Price: 3295,
        Size: ["S", "M", "L", "XL"]
    },
    {
        imgUrl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9c7df46d-c91e-4fb2-a66e-366b85f5711a/dri-fit-uv-run-division-miler-long-sleeve-running-top-LhCZ1G.png",
        name: "Men's Long-Sleeve Running Top",
        category: "T-Shirt",
        color: "Black",
        Price: 2495,
        Size: ["S", "M", "L", "XL"]
    },
    {
        imgUrl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d87aac85-990d-4dab-a8b2-e01a27983164/sportswear-tech-pack-cargo-trousers-D51Dcz.png",
        name: "Nike Sportswear Tech Pack",
        category: "Trousers",
        brand: "NikePro",
        color: "Brown",
        Price: 7495,
        Size: ["S", "M", "L", "XL"]
    },
    {
        imgUrl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/1cce9249-2da0-4ac4-9d28-74867e2c85e0/sportswear-t-shirt-dw59Bv.png",
        name: "Men's T-Shirt",
        category: "T-Shirt",
        color: "White",
        Price: 1795,
        Size: ["S", "M", "L", "XL"]
    },
    {
        imgUrl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/153bb803-19e5-4e19-9b37-7e4b5e9a5566/sportswear-sport-essentials-woven-flow-shorts-3zgS9g.png",
        name: "Nike Sportswear Sport Essentials+",
        category: "Shorts",
        brand: "NikePro",
        color: "Red",
        Price: 2795,
        Size: ["S", "M", "L", "XL"]
    },
    {
        imgUrl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c7c21f4e-d6cd-40cd-869e-18195da035f0/sportswear-woven-trousers-JCmDBv.png",
        name: "Nike Sportswear",
        category: "Trousers",
        brand: "NikePro",
        color: "Black",
        Price: 3197,
        Size: ["S", "M", "L", "XL"]
    },
    {
        imgUrl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/efb1bed5-93d3-4d9b-ad2e-a4c92ab76483/dri-fit-camo-training-shorts-2qvkVl.png",
        name: "Nike Dri-FIT",
        category: "Shorts",
        color: "Gray",
        Price: 2395,
        Size: ["S", "M", "L", "XL"]
    },

    {
        imgUrl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/911b97e3-eb38-4aef-9013-7ff2a3cd7fef/sportswear-max90-t-shirt-qPnlmH.png",
        name: "Nike Sportswear Max90",
        category: "T-Shirt",
        brand: "NikePro",
        color: "Brown",
        Price: 2195,
        Size: ["S", "M", "L", "XL"]
    },
    {
        imgUrl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a2775874-5c5e-45bd-bd94-cbe31331242e/liverpool-fc-strike-football-pants-9L3GJ8.png",
        name: "Liverpool F.C. Strike",
        category: "Trousers",
        color: "Red",
        Price: 11495,
        Size: ["S", "M", "L", "XL"]
    },
    {
        imgUrl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2cdd4575-5dc5-4b6a-97a0-d6d5d4f03292/dri-fit-run-division-flex-stride-13cm-brief-lined-running-shorts-4l5Psr.png",
        name: "Nike Dri-FIT Run Division Flex Stride",
        category: "Shorts",
        brand: "NikePro",
        color: "Black",
        Price: 3295,
        Size: ["S", "M", "L", "XL"]
    },
    {
        imgUrl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/22593f2f-154f-4964-ad87-beb399ba751f/nikecourt-dri-fit-victory-tennis-polo-3dxdtm.png",
        name: "NikeCourt Dri-FIT Victory",
        category: "T-Shirt",
        color: "Blue",
        Price: 1795,
        Size: ["S", "M", "L", "XL"]
    },
    {
        imgUrl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/27c56498-f1a9-4ea9-9baa-990dfa4d41b5/backpack-KxKTNv.png",
        name: "Nike",
        category: "Backpack",
        brand: "NikePro",
        color: "Blue",
        Price: 4995,
        Size: ["S", "M", "L", "XL"]
    },
    {
        imgUrl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c14889cd-1fde-4395-9f14-401ea8276df8/utility-heat-graphic-training-backpack-n8XJNC.png",
        name: "Nike Utility Heat",
        category: "Backpack",
        brand: "NikePro",
        color: "Black",
        Price: 3995,
        Size: ["S", "M", "L", "XL"]
    },
    {
        imgUrl: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/18ac3091-5615-4b51-b833-f3d8f909b35c/vomero-16-road-running-shoes-h0KMSg.png",
        name: "Nike Vomero 16",
        brand: "Vomero",
        category: "Men Shoes",
        color: "Photon Dust/Light Crimson/White/Black",
        Price: 12815.00,
        Size: ["UK 6 ", "UK 6.5", "UK 7 ", "UK 7.5 ", "UK 9,", "UK 9.5", "UK 10", "UK 10.5", " UK 11, ", "UK 11.5", "UK 12"]
    },
    {
        imgUrl: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/833a3530-cd6c-4e27-a994-1ac4487e6a77/dunk-high-retro-shoe-DdRmMZ.png",
        name: "Nike Dunk High Retro ",
        brand: "Jordon",
        category: "Men Shoes",
        color: "Team Blue",
        Price: 8827,
        Size: ["UK 6 ", "UK 6.5", "UK 7 ", "UK 7.5 ", "UK 9,", "UK 9.5", "UK 10", "UK 10.5", " UK 11, ", "UK 11.5", "UK 12"]
    },
    {
        imgUrl: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b04d4c27-d586-46c7-809e-6b0de2bb0480/air-force-1-high-07-lx-shoes-wb31gJ.png",
        name: "Nike Air Force 1 High '07 LX",
        brand: "Air Force",
        category: "Men Shoes",
        color: "Black / beach",
        Price: 12827,
        Size: ["UK 6 ", "UK 6.5", "UK 7 ", "UK 7.5 ", "UK 9,", "UK 9.5", "UK 10", "UK 10.5", " UK 11, ", "UK 11.5", "UK 12"]
    },
    {
        imgUrl: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b7662748-4ba5-411b-b59e-2d3a83f8eb78/sb-bruin-high-iso-skate-shoes-1vgs2z.png",
        name: "Nike SB Bruin High ISO",
        brand: "Skate Shoes",
        category: "Men Shoes",
        color: "Wolf Grey/Wolf Grey/",
        Price: 8827,
        Size: ["UK 3", "UK 3.5", "UK 4", "UK 4.5", "UK 5", "UK 5.5", "UK 6 ", "UK 6.5", "UK 7 "]
    },

    {
        imgUrl: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1fafd11f-7315-4dea-98f4-d762e999ebfe/air-max-systm-shoes-l4RjXF.png",
        name: "Air Jordan 1 Elevate High",
        brand: "Jordan ",
        category: "Men Shoes",
        color: "Team Gold/Sail",
        Price: 14827,
        Size: ["UK 3", "UK 3.5", "UK 4", "UK 4.5", "UK 5", "UK 5.5", "UK 6 ", "UK 6.5", "UK 7 "]
    },

    {
        imgUrl: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/572a3c3d-8244-4e32-add1-99a080db2a60/air-griffey-max-1-mens-shoes-6q83v3.png",
        name: "Nike Air Griffey Max 1",
        brand: "Air Force",
        category: "Men Shoes",
        color: "Pure Platinum/White",
        Price: 15527,
        Size: ["UK 6 ", "UK 6.5", "UK 7 ", "UK 7.5 ", "UK 9,", "UK 9.5", "UK 10", "UK 10.5", " UK 11, ", "UK 11.5", "UK 12"]
    },

    {
        imgUrl: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d3a4c6c9-8303-4733-b6a3-d17c00cf8dab/daybreak-shoes-bs1J78.png",
        name: "Nike Daybreak",
        brand: "Nike Daybreak",
        category: "Men Shoes",
        color: "Coconut Milk/Light Bone",
        Price: 7597,
        Size: ["UK 3", "UK 3.5", "UK 4", "UK 4.5", "UK 5", "UK 5.5", "UK 6 ", "UK 6.5", "UK 7 "]
    },

    {
        imgUrl: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d3ed7f3d-cf40-4ae1-bfb8-2f73a9f9cec6/air-force-1-pltaform-shoes-pwWPHX.png",
        name: "Nike Air Force 1 PLT.AF.ORM",
        brand: "Air Force",
        category: "Men Shoes",
        color: "Photon Dust/Team Gold",
        Price: 6087,
        Size: ["UK 3", "UK 3.5", "UK 4", "UK 4.5", "UK 5", "UK 5.5", "UK 6 ", "UK 6.5", "UK 7 "]
    },

    {
        imgUrl: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/pyyixbczj6u5kiwhpjik/air-max-270-shoes-V4DfZQ.png",
        name: "Nike Air Max 270",
        brand: "Air Max",
        category: "Men Shoes",
        color: "White/White/Black",
        Price: 13287,
        Size: ["UK 3", "UK 3.5", "UK 4", "UK 4.5", "UK 5", "UK 5.5", "UK 6 ", "UK 6.5", "UK 7 "]
    }
];

localStorage.setItem("Men's Products ", JSON.stringify(products));
ShowProduct(products);

document.querySelector("#Lifestyle-2").textContent = "Men's Lifestyle " + "(" + products.length + ")";

function ClearAll() {
    location.reload();
    console.log("hello clear");
}

function CategoriesFilter() {
    var cateSelect = document.querySelector("#cateBtn").value;
    console.log(cateSelect);
    var NewProdArr = products.filter(function (element) {
        return element.category === cateSelect;
    });
    console.log(NewProdArr);
    ShowProduct(NewProdArr);
}

function brandFilter() {
    var brandSelect = document.querySelector("#BrandFilter").value;
    console.log(brandSelect);
    var NewProdArr = products.filter(function (element) {
        return element.brand === brandSelect;
    })
    console.log(NewProdArr);
    ShowProduct(NewProdArr);
}

function priceSort() {
    var priceSelect = document.querySelector("#Pricebtn").value;
    console.log(priceSelect);

    if (priceSelect == "Low") {
        products.sort(function (a, b) {
            return a.Price - b.Price;
        })
    }

    if (priceSelect == "High") {
        products.sort(function (a, b) {
            return b.Price - a.Price;
        })
    }
    console.log(products);
    ShowProduct(products)
}


// display function

function ShowProduct(products) {
    console.log(products, "prodddd")

    var product_list = document.getElementById('product-list');

    document.querySelector("#product-list").textContent = "";  // when ever Showproduct function call first it will first empty the product-list class div

    products.map((product) => {
        var div = document.createElement('div');
        div.classList.add('listElement');
        div.addEventListener("click", ShowDesc);

        var img = document.createElement('img');
        img.src = product.imgUrl;
        div.appendChild(img);

        var name = document.createElement('p');
        name.textContent = product.name;
        div.appendChild(name);

        var category = document.createElement('p');
        category.textContent = product.category;
        div.appendChild(category);

        var price = document.createElement('p');
        price.textContent = "MRP : ₹ " + product.Price;
        div.appendChild(price);

        product_list.appendChild(div);

        function ShowDesc(event) {
            console.log("show Desc");
            DescProd(product);
        }
    })
    function DescProd(product) {
        var product_pg = [];

        product_pg.push(product);
        console.log(product_pg);

        localStorage.setItem("DescProd", JSON.stringify(product_pg));
        window.location.href = "description.html";
    }
}

