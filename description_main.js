

var products = [
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
        brand: " Vomero",
        category: "Men Shoes",
        color: "Photon Dust/Light Crimson/White/Black",
        Price: "12,815.00",
        Size: ["UK 6", "UK 6.5", "UK 7", "UK 7.5", "UK 9", "UK 9.5", "UK 10", "UK 10.5", " UK 11 ", "UK 11.5", "UK 12"]
    },
    {
        imgUrl: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/833a3530-cd6c-4e27-a994-1ac4487e6a77/dunk-high-retro-shoe-DdRmMZ.png",
        name: "Nike Dunk High Retro ",
        brand: "Jordon",
        category: "Men Shoes",
        color: "Team Blue",
        Price: "8,827",
        Size: ["UK 6", "UK 6.5", "UK 7", "UK 7.5", "UK 9", "UK 9.5", "UK 10", "UK 10.5", " UK 11 ", "UK 11.5", "UK 12"]
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
// var sizes = products[0].Size;

// Create label elements for each size and append to the container
// sizes.forEach(Size => {
//     var label = document.createElement('button');
//     label.textContent = Size;
//     sizesContainer.appendChild(label);
// });




const fetchData = () => {
    // data fatch from url 
    // const data = await fetch(url);
    // const json = await data.json();
    // console.log(json, "body");
    // const detail = json?.product;

    const imageElements = document.querySelectorAll(".small_img");
    const primary_img = document.querySelector(".pri_img");
    const vendor = document.querySelector(".product_vendor");
    const title = document.querySelector(".product_title")
    const price = document.querySelector(".product_price");
    const comp_price = document.querySelector(".product_Comp_price");
    const color = document.querySelector(".product_color");
    const size = document.querySelector(".product_size");
    const disc = document.querySelector(".discount");
    const desc = document.querySelector(".product_desc");

    var menProducts = JSON.parse(localStorage.getItem("DescProd"));
    console.log(menProducts, "MEN PRODUCT");

    const size_box = menProducts[0]?.Size;
    console.log(menProducts[0].brand);

    vendor.innerHTML = menProducts[0].brand;
    title.innerHTML = menProducts[0].name;
    price.innerHTML = menProducts[0].Price + ".00";
    var org_price = menProducts[0].Price / (1 - 0.35)
    console.log(org_price);
    comp_price.innerHTML = Math.trunc(org_price) + ".00";


    // Calculate the percentage discount

    let discount = 19999 - 12999;
    let discountPercentage = 0;
    discountPercentage = (discount / 19999) * 100;
    console.log(discountPercentage);
    disc.innerHTML = Math.trunc(discountPercentage) + "%" + " Off";


    // Update the src attribute for each image class small_img

    const newSrc = (menProducts[0].imgUrl);
    primary_img.src = newSrc;


    // let selectedButtons = null;
    let selectedButtonColor = null;
    //  Each color display  

    // color_box.forEach((colorObj) => {
    //     const colorName = Object.keys(colorObj)[0];
    //     const colorValue = colorObj[colorName];
    //     // creating div 
    //     const color_Cont = document.createElement('div');
    //     color_Cont.classList.add('color_cont');
    //     color_Cont.style.background = colorValue;

    //     color_Cont.addEventListener('click', function () {
    //         if (selectedButtons !== null) {
    //             selectedButtons.classList.remove('clicked');
    //         }
    //         this.classList.add('clicked');
    //         selectedButtons = this;
    //         selectedButtonColor = colorName;
    //         console.log(selectedButtonColor);
    //     });

    //     // append to color_cont
    //     color.appendChild(color_Cont);
    // })

    // Each size display 
    let selectedButton = null;
    let selectedButtonValue = null;

    size_box.forEach((sizeObj) => {
        const sizeName = Object.keys(sizeObj)[0];
        const sizeValue = sizeObj[sizeName];

        const size_cont = document.createElement('button');
        size_cont.classList.add('Size_cont');
        size_cont.textContent = `${sizeValue}`;

        size_cont.addEventListener('click', function () {
            if (selectedButton !== null) {
                selectedButton.classList.remove('selected');
            }
            this.classList.add('selected');
            selectedButton = this;
            selectedButtonValue = sizeValue;
            console.log(selectedButtonValue);
        });

        size.appendChild(size_cont);
    })

    // add to cart display 
    const addToCartButton = document.querySelector('.addtobag');
    const cartMessage = document.getElementById('cartMessage');

    addToCartButton.addEventListener('click', function () {
        // Check if the product is selected
        if (selectedButtonValue && counterValue >= 1) {
            // Display the cart message
            cartMessage.textContent = `${menProducts[0].name} ${menProducts[0].category} with Size ${selectedButtonValue} added to cart`;
            cartMessage.style.display = 'block';

            // Check if localStorage is supported
            if (typeof (Storage) !== "undefined") {
                // Retrieve selected products from localStorage
                let selectedProducts = JSON.parse(localStorage.getItem('selectedProducts')) || [];

                // Add the selected product to the array
                selectedProducts.push({
                    productName: menProducts[0].name,
                    productSize: selectedButtonValue,
                    productCount: counterValue
                });

                console.log(selectedProducts);
                // Save the updated array back to localStorage
                localStorage.setItem('selectedProducts', JSON.stringify(selectedProducts));

                // Alert the user that the product has been added to the cart
                alert('Product added to cart!');
            } else {
                // Alert the user if localStorage is not supported
                alert('Sorry, your browser does not support web storage. Please try a different browser.');
            }
        } else {
            // Alert the user if the product is not selected
            alert('Please select Quantity and Size before adding to cart.');
        }
    });



    // Check if localStorage is supported by the browser

};
fetchData();

// counter of add quantity of product 
let counterValue = 0;
const counterElement = document.getElementById('counter');
function updateCounterDisplay() {
    counterElement.textContent = counterValue;
}

function addProduct() {
    counterValue++;
    updateCounterDisplay();
}

function subProduct() {
    if (counterValue > 0) {
        counterValue--;
        updateCounterDisplay();
    }
}


