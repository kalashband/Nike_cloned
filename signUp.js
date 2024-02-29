const country = document.getElementsByClassName("country");

const countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "USA",
    "Canada",
    "Japan",
    "Germany"
]

// its handle publising of list of country
function handlerChange() {
    const dropElement = document.getElementsByClassName("countryList");
    countries.forEach(function (country) {
        var option = document.createElement("option");
        option.value = country;
        option.text = country;
        dropElement.appendChild(option);
        console.log(option);
    })
}

// handle drop down list on  click at "india"
function dropDown() {
    const dropElement = document.getElementsByClassName("dropdown");
    if (dropDown.style.display === "none") {
        dropDown.style.display = "block";
        handlerChange();
    }
    else {
        dropDown.style.display === "none";
    }
}

// change country as selected by user at place of "india"
function changeCountry(selectedCountry) {
    var countryText = document.getElementById("country");
    if (selectedCountry !== "") {
        countryText.textContent = selectedCountry;
    }
    var dropdown = document.getElementById("dropdown");
    dropdown.style.display = "none";
}

