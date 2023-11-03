
var products = [
    {
        imgUrl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/bd85b857-b87f-4bdd-8c7a-51483a609692/dri-fit-swoosh-air-force-1-support-laced-sports-bra-vlcgfT.png",
        name: "Nike Dri-FIT Swoosh Air Force 1",
        category: "SportsBra",
        brand: "Jordon",
        color: "White",
        Price: 1590,
        Size: ["S", "M", "L", "XL"]
    },
    {
        imgUrl: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d3a4c6c9-8303-4733-b6a3-d17c00cf8dab/daybreak-shoes-bs1J78.png",
        name: "Nike Daybreak",
        brand: "Nike Daybreak",
        category: "Shoes",
        color: "Coconut Milk/Light Bone",
        Price: 7597,
        Size: ["UK 3", "UK 3.5", "UK 4", "UK 4.5", "UK 5", "UK 5.5", "UK 6 ", "UK 6.5", "UK 7 "]
    },

    {
        imgUrl: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d3ed7f3d-cf40-4ae1-bfb8-2f73a9f9cec6/air-force-1-pltaform-shoes-pwWPHX.png",
        name: "Nike Air Force 1 PLT.AF.ORM",
        brand: "Air Force",
        category: "Shoes",
        color: "Photon Dust/Team Gold",
        Price: 6087,
        Size: ["UK 3", "UK 3.5", "UK 4", "UK 4.5", "UK 5", "UK 5.5", "UK 6 ", "UK 6.5", "UK 7 "]
    },
    {
        imgUrl: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/pyyixbczj6u5kiwhpjik/air-max-270-shoes-V4DfZQ.png",
        name: "Nike Air Max 270",
        brand: "Air Max",
        category: "Shoes",
        color: "White/White/Black",
        Price: 13287,
        Size: ["UK 3", "UK 3.5", "UK 4", "UK 4.5", "UK 5", "UK 5.5", "UK 6 ", "UK 6.5", "UK 7 "]
    },
    {
        imgUrl: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1fafd11f-7315-4dea-98f4-d762e999ebfe/air-max-systm-shoes-l4RjXF.png",
        name: "Air Jordan 1 Elevate High",
        brand: "Jordan ",
        category: "Shoes",
        color: "Team Gold/Sail",
        Price: 14827,
        Size: ["UK 3", "UK 3.5", "UK 4", "UK 4.5", "UK 5", "UK 5.5", "UK 6 ", "UK 6.5", "UK 7 "]
    },
    {
        imgUrl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a7f68ae6-59c4-4ed9-a725-00ecec16ff68/pro-365-13cm-shorts-Xtrrs6.png",
        name: "Nike Pro 365",
        category: "Shorts",
        brand: "Jordon",
        color: "Black",
        Price: 2000,
        Size: ["S", "M", "L", "XL"]
    },
    {
        imgUrl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a86eed38-25b0-4ab0-acfe-1eb355b449e4/air-max-pre-day-shoes-gmmQLc.png",
        name: "Nike Air Max Pre-Day",
        category: "Shoes",
        color: "Blue",
        Price: 14495,
        Size: [6, 7, 8, 9, 10],
    },
    {
        imgUrl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/35b4b368-6e69-45d0-bc94-1b08e96e0d7b/flex-run-2021-road-running-shoes-HDXVTm.png",
        name: "Nike Flex Run 2021",
        category: "Shoes",
        color: "Red",
        Price: 9495,
        Size: [6, 7, 8, 9, 10],
    },
    {
        imgUrl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d263149f-fbaf-4c9d-88ca-4a1ebe6c420f/sportswear-icon-clash-woven-wide-leg-trousers-shCw2G.png",
        name: "Nike Sportswear Icon Clash",
        category: "Trousers",
        brand: "Jordon",
        color: "White",
        Price: 5490,
        Size: ["S", "M", "L", "XL"]
    },

    {
        imgUrl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3da3eacc-a092-4793-8e6e-735d52e5b5d4/air-max-ap-shoe-twPB9x.png",
        name: "Nike Air Max AP",
        category: "Shoes",
        color: "Pink",
        Price: 8495,
        Size: [6, 7, 8, 9, 10],
    },
    {
        imgUrl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/30c34ec4-f51e-442a-aa68-c85f4a4e79ac/dri-fit-swoosh-icon-clash-support-1-piece-pad-printed-sports-bra-qd2H1j.png",
        name: "Nike Dri-FIT Swoosh Icon Clash",
        category: "SportsBra",
        brand: "Jordon",
        color: "Gray",
        Price: 3519,
        Size: ["S", "M", "L", "XL"]
    },
    {
        imgUrl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/37d58ae7-b41b-4adc-9b0c-28bc827db057/sportswear-icon-clash-mock-long-sleeve-top-TlH8QM.png",
        name: "Nike Sportswear Icon Clash",
        category: "Top",
        brand: "NikePro",
        color: "Blue",
        Price: 1999,
        Size: ["S", "M", "L", "XL"]
    },
    {
        imgUrl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b5ad81cf-9e9b-4c29-9114-e8a8dea8ed7a/nikecourt-legacy-serena-design-crew-shoes-3n9JGl.png",
        name: "NikeCourt Legacy Serena Design Crew",
        category: "Shoes",
        color: "Cream",
        Price: 6495,
        Size: [6, 7, 8, 9, 10],
    },
    {
        imgUrl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7df7e2e9-d4f0-4e5a-9884-c5d0f561f8b2/swoosh-ultrabreathe-support-padded-sports-bra-GX5mln.png",
        name: "Nike Swoosh UltraBreathe",
        category: "SportsBra",
        brand: "Jordon",
        color: "Cream",
        Price: 2250,
        Size: ["S", "M", "L", "XL"]
    },
    {
        imgUrl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-f1f1618e-4686-4efe-bafc-973e72e8b9a2/aqua-rift-shoes-C3VX3v.png",
        name: "Nike Aqua Rift",
        category: "Shoes",
        color: "White",
        Price: 9495,
        Size: [6, 7, 8, 9, 10],
    },
    {
        imgUrl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a887d100-9f0b-40d1-8def-7a11824f2f8b/sportswear-woven-trousers-5SNDjM.png",
        name: "Nike Sportswear",
        category: "Trousers",
        brand: "Jordon",
        color: "Blue",
        Price: 2795,
        Size: ["S", "M", "L", "XL"]
    },
    {
        imgUrl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0f3b5329-af6b-47cf-a9ee-de5ee81f1003/air-force-1-fontanka-shoes-LtBCnn.png",
        name: "Nike Air Force 1 Fontanka",
        category: "Shoes",
        color: "Cream",
        Price: 10495,
        Size: [6, 7, 8, 9, 10],
    },
    {
        imgUrl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/99b5746b-3441-456d-80e3-a628a115b4d4/air-force-1-pixel-shoes-7wnvvn.png",
        name: "Nike Air Force 1 Pixel",
        category: "Shoes",
        color: "Olive",
        Price: 8495,
        Size: [6, 7, 8, 9, 10],
    },
    {
        imgUrl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ccca2586-358d-46a2-850f-8b5aab8b62c2/air-velour-jacket-dvCWBC.png",
        name: "Nike Air",
        category: "Jacket",
        brand: "NikeLab",
        color: "Cream",
        Price: 4459,
        Size: ["S", "M", "L", "XL"]
    },
    {
        imgUrl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fd15d125-76ca-441d-8b6a-57c0a081116a/dri-fit-one-mid-rise-printed-leggings-NkRcqk.png",
        name: "Nike Dri-FIT One",
        category: "Trousers",
        brand: "NikeLab",
        color: "Brown",
        Price: 3950,
        Size: ["S", "M", "L", "XL"]
    },
    {
        imgUrl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/05a53af7-c641-43e4-805b-c7f89e569fb0/air-velour-mid-rise-trousers-6lgdlP.png",
        name: "Nike Air",
        category: "Trousers",
        color: "Brown",
        Price: 4950,
        Size: ["S", "M", "L", "XL"]
    },
    {
        imgUrl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5e266a82-cc5e-48f2-becf-1b88776c991b/zoom-fly-4-road-running-shoes-HMG6C0.png",
        name: "Nike Zoom Fly 4",
        category: "Shoes",
        color: "Black",
        Price: 15495,
        Size: [6, 7, 8, 9, 10],
    },
    {
        imgUrl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d4d3a055-d6e8-40c7-8cdc-f9e421008a44/10k-2-in-1-running-shorts-QBd76d.png",
        name: "Nike 10K",
        category: "Shorts",
        brand: "NikeLab",
        color: "Black",
        Price: 2249,
        Size: ["S", "M", "L", "XL"]
    },
    {
        imgUrl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/56cbf3f1-1004-468d-90c8-0c1738e2b7c2/dunk-high-lx-shoes-4gJ041.png",
        name: "Nike Dunk High LX",
        category: "Shoes",
        color: "Cream",
        Price: 11495,
        Size: [6, 7, 8, 9, 10],
    },
    {
        imgUrl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/70a0f845-1f2e-433e-b2b5-11455817442f/jordan-heritage-t-shirt-4nJvCx.png",
        name: "Jordan Heritage",
        category: "Top",
        brand: "NikeLab",
        color: "Blue",
        Price: 2508,
        Size: ["S", "M", "L", "XL"]
    },
    {
        imgUrl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/aee896ce-0062-42bd-bfad-4ae4ab086219/swoosh-run-running-jacket-N6QMRT.png",
        name: "Nike Swoosh Run",
        category: "Jacket",
        brand: "NikeLab",
        color: "Olive",
        Price: 5019,
        Size: ["S", "M", "L", "XL"]
    },
    {
        imgUrl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b72d5987-443c-4a20-ba27-f98e711c5ab1/dunk-low-se-shoes-zmKqzw.png",
        name: "Nike Dunk",
        category: "Shoes",
        color: "White",
        Price: "₹18,495",

    },
    {
        imgUrl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/64a37e1a-69b2-4f55-8189-6cfe94158324/dri-fit-indy-light-support-padded-v-neck-sports-bra-P6hxlh.png",
        name: "Nike Dri-FIT Indy",
        category: "SportsBra",
        brand: "NikePro",
        color: "Blue",
        Price: 1890,
        Size: ["S", "M", "L", "XL"]
    },
    {
        imgUrl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/abea3bf7-0dc8-4f4f-aff1-02e7e3b6b369/jordan-new-classics-capsule-2-top-KRJqcx.png",
        name: "Jordan New Classics Capsule 2.0",
        category: "Jacket",
        brand: "NikePro",
        color: "Black",
        Price: 8999,
        Size: ["S", "M", "L", "XL"]
    },
    {
        imgUrl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5d4f847a-9877-4b71-99b4-4554c4246c6d/jordan-fleece-all-over-printed-trousers-5sfqN3.png",
        name: "Women's Fleece All-over Printed",
        category: "Trousers",
        color: "Red",
        Price: 3500,
        Size: ["S", "M", "L", "XL"]
    },
    {
        imgUrl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7daa139d-91eb-43f2-a9b8-fb8cd81607bd/sportswear-boxy-t-shirt-GNXQld.png",
        name: "Nike Sportswear",
        brand: "NikePro",
        category: "Top",
        color: "White",
        Price: 1295,
        Size: ["S", "M", "L", "XL"]
    },
    {
        imgUrl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9f1978b5-1115-406d-ac3a-236c54e8be8a/sportswear-crew-Rk7hCz.png",
        name: "Nike Sportswear Femme",
        category: "Top",
        brand: "NikePro",
        color: "Lavender",
        Price: 4109,
        Size: ["S", "M", "L", "XL"]
    },
    {
        imgUrl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/gffibzzmtmhe5ldjkiwv/everyday-lightweight-training-ankle-socks-ShtJfk.png",
        name: "Nike Everyday Lightweight",
        category: "Socks",
        color: "Black",
        Price: "595",

    },
    {
        imgUrl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/22535aa1-9c51-48f1-bca3-e584dd26a02c/air-everyday-plus-lightweight-training-no-show-socks-GFxTKh.png",
        name: "Nike Air Everyday Plus Lightweight",
        category: "Socks",
        color: "Gray",
        Price: 795,

    },

]


localStorage.setItem("Men's Products ", JSON.stringify(products));
ShowProduct(products);

document.querySelector("#Lifestyle-2").textContent = "Women's Lifestyle " + "(" + products.length + ")";

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
