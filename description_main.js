

var products = [
    {
        imgUrl: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/18ac3091-5615-4b51-b833-f3d8f909b35c/vomero-16-road-running-shoes-h0KMSg.png",
        name: "Nike Vomero 16",
        brand: " Vomero",
        category: "Men Shoes",
        color: "Photon Dust/Light Crimson/White/Black",
        Price: "12,815.00",
        Size: ["UK 6" , "UK 6.5" , "UK 7" , "UK 7.5" , "UK 9" , "UK 9.5" , "UK 10" , "UK 10.5" , " UK 11 " , "UK 11.5" , "UK 12" ]
    },
    {
        imgUrl: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/833a3530-cd6c-4e27-a994-1ac4487e6a77/dunk-high-retro-shoe-DdRmMZ.png",
        name: "Nike Dunk High Retro ",
        brand: "Jordon",
        category: "Men Shoes",
        color: "Team Blue",
        Price: "8,827",
        Size: ["UK 6" , "UK 6.5" , "UK 7" , "UK 7.5" , "UK 9" , "UK 9.5" , "UK 10" , "UK 10.5" , " UK 11 " , "UK 11.5" , "UK 12" ]
    },
    {
        imgUrl: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b04d4c27-d586-46c7-809e-6b0de2bb0480/air-force-1-high-07-lx-shoes-wb31gJ.png",
        name: "Nike Air Force 1 High '07 LX",
        brand: "Air Force",
        category: "Men Shoes",
        color: "Black / beach",
        Price: "12,827",
        Size: ["UK 6 ", "UK 6.5", "UK 7 ", "UK 7.5 ", "UK 9,", "UK 9.5", "UK 10", "UK 10.5", " UK 11, ", "UK 11.5", "UK 12"]
    },
    {
        imgUrl: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b7662748-4ba5-411b-b59e-2d3a83f8eb78/sb-bruin-high-iso-skate-shoes-1vgs2z.png",
        name: "Nike SB Bruin High ISO",
        brand: "Skate Shoes",
        category: "Men Shoes",
        color: "Wolf Grey/Wolf Grey/",
        Price: "8,827",
        Size: ["UK 3", "UK 3.5", "UK 4", "UK 4.5", "UK 5", "UK 5.5", "UK 6 ", "UK 6.5", "UK 7 "]
    },

    {
        imgUrl: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1fafd11f-7315-4dea-98f4-d762e999ebfe/air-max-systm-shoes-l4RjXF.png",
        name: "Air Jordan 1 Elevate High",
        brand: "Air Jordan 1",
        category: "Women's Shoes",
        color: "Team Gold/Sail",
        Price: "14,827",
        Size: ["UK 3", "UK 3.5", "UK 4", "UK 4.5", "UK 5", "UK 5.5", "UK 6 ", "UK 6.5", "UK 7 "]
    },

    {
        imgUrl: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/572a3c3d-8244-4e32-add1-99a080db2a60/air-griffey-max-1-mens-shoes-6q83v3.png",
        name: "Nike Air Griffey Max 1",
        brand: "Air Griffey",
        category: "Men's Shoes",
        color: "Pure Platinum/White",
        Price: "15,527",
        Size: ["UK 6 ", "UK 6.5", "UK 7 ", "UK 7.5 ", "UK 9,", "UK 9.5", "UK 10", "UK 10.5", " UK 11, ", "UK 11.5", "UK 12"]
    },

    {
        imgUrl: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d3a4c6c9-8303-4733-b6a3-d17c00cf8dab/daybreak-shoes-bs1J78.png",
        name: "Nike Daybreak",
        brand: "Nike Daybreak",
        category: "Women's Shoes",
        color: "Coconut Milk/Light Bone",
        Price: "7,597",
        Size: ["UK 3", "UK 3.5", "UK 4", "UK 4.5", "UK 5", "UK 5.5", "UK 6 ", "UK 6.5", "UK 7 "]
    },


    {
        imgUrl: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d3ed7f3d-cf40-4ae1-bfb8-2f73a9f9cec6/air-force-1-pltaform-shoes-pwWPHX.png",
        name: "Nike Air Force 1 PLT.AF.ORM",
        brand: "Nike Air Force",
        category: "Women's Shoes",
        color: "Photon Dust/Team Gold",
        Price: "6,087",
        Size: ["UK 3", "UK 3.5", "UK 4", "UK 4.5", "UK 5", "UK 5.5", "UK 6 ", "UK 6.5", "UK 7 "]
    },


    {
        imgUrl: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/pyyixbczj6u5kiwhpjik/air-max-270-shoes-V4DfZQ.png",
        name: "Nike Air Max 270",
        brand: " Air Max",
        category: "Women's Shoes",
        color: "White/White/Black",
        Price: "13,287",
        Size: ["UK 3", "UK 3.5", "UK 4", "UK 4.5", "UK 5", "UK 5.5", "UK 6 ", "UK 6.5", "UK 7 "]
    }
]

var sizesContainer = document.getElementById('SizeBox');
var sizes = products[1].Size;

// Create label elements for each size and append to the container
sizes.forEach(Size => {
    var label = document.createElement('button');
    label.textContent = Size;
    sizesContainer.appendChild(label);
});
