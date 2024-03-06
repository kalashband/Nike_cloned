

var cartProduct = JSON.parse(localStorage.getItem("selectedProducts"));
console.log(cartProduct, "cart PRODUCT");


// Select the container where you want to display the products
var bagContainer = document.getElementById("Detail");
var totalAmount = document.querySelector(".totalAmount");
var charges = document.querySelector(".charges");
var totalPay = document.querySelector("#totalPay");
var sum = 0;

// Select all trash icon elements
var trashIcons = document.querySelectorAll(".fa-trash");


// Loop through each product in the array
cartProduct.forEach((product) => {
    // Create elements for each product
    var productDiv = document.createElement("div");
    productDiv.classList.add("bag-product");

    var imgDiv = document.createElement("div");
    imgDiv.setAttribute('id', 'img-bag')
    var img = document.createElement("img");
    img.setAttribute('id', 'prod_img');
    img.src = product.img_url;
    img.alt = product.productName;
    imgDiv.appendChild(img);

    var descDiv = document.createElement("div");
    descDiv.setAttribute('id', 'dis-bag');
    descDiv.innerHTML = `
            <h id="prod_cate" >${product.productCate}</h>
            <h  id="prod_name" >${product.productName}</h>
            `;

    var measureDiv = document.createElement("div");
    measureDiv.setAttribute('id', 'prod_measure');
    measureDiv.innerHTML = `
    <h id="prod_size"
    style="background-color: rgba(0, 0, 0, 0.079); padding: 0px 5px; border-radius: 5px;">
    Size: <h id="prod_fit"> ${product.productSize}</h> </h>
    <h id="prod_qty"
    style="background-color: rgba(0, 0, 0, 0.079); margin-left: 15px; padding: 0px 5px; border-radius: 5px;">
    Qty: <h id="prod_count">${product.productCount}</h>
    </h>`
    descDiv.appendChild(measureDiv);

    var buttonDiv = document.createElement("div");
    buttonDiv.setAttribute('id', 'bag-button');
    buttonDiv.innerHTML = `
    <button class="fa-regular fa-heart" style=" font-size: 18px; border:none; background-color: white;" ></button>
    <button class="fa-solid fa-trash" style="padding-left: 6%; font-size: 18px; border:none; background-color: white;" onclick="removeFromCart(${index})></button>
    `
    descDiv.appendChild(buttonDiv);

    var returnDiv = document.createElement("div");
    returnDiv.innerHTML = `
    <span style="font-size: 13px; ">
    <h style="font-weight: 600;">14 days</h> Return Available
    </span>
    `
    descDiv.appendChild(returnDiv);

    var priceDiv = document.createElement("div");
    priceDiv.setAttribute('id', 'price-bag');
    var price = product.productPrice * product.productCount;
    priceDiv.innerHTML = `
    <h id="productPrice">MRP: ₹ ${price}</h> 
    `
    // console.log(product.productPrice);
    sum += price;

    // Append the elements to the product div
    productDiv.appendChild(imgDiv);
    productDiv.appendChild(descDiv);
    buttonDiv.appendChild(priceDiv);
    productDiv.appendChild(buttonDiv);
    bagContainer.appendChild(productDiv);

});
function removeFromCart(index) {
    // Remove the corresponding product from the cartProduct array
    cartProduct.splice(index, 1);

    // Update the localStorage with the modified cartProduct array
    localStorage.setItem("selectedProducts", JSON.stringify(cartProduct));

    // Remove the product's HTML from the DOM
    this.closest(".bag-product").remove();

    // Recalculate the total sum
    sum -= cartProduct[index].productPrice;
    totalAmount.innerHTML = sum;

    // Recalculate the total pay including charges
    totalPay.innerHTML = sum + total_charges;
}



totalAmount.innerHTML = sum
const total_charges = 65;
totalPay.innerHTML = sum + total_charges;
charges.innerHTML = total_charges
