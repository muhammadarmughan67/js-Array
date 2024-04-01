let cities = ["Faisalabad", "Lahore", "Karachi", "Islamabad", "Burawala", "Shekhupura", "Kashmir"]

// clear output button 
function clearOutput (){
    document.getElementById("output").innerHTML = " "
}

// simple alert 
function simpleAlert(){
    alert("alert button is clicked")
    document.getElementById("output").innerHTML = "alert button is clicked"
}
// print name
function printName() {
    let userName = document.getElementById("userNameInput").value.trim();
    if (userName === "") {
        alert("Please enter your name in the input field.");
        return;
    }
    document.getElementById("output").innerText = userName;
    document.getElementById("userNameInput").value = "";
}


function clearInput() {
    document.getElementById("userNameInput").value = "";
}

// print all cities 
function printAllCities(){
    document.getElementById("output").innerHTML = " "
    for (let i=0; i<cities.length; i++){
        document.getElementById("output").innerHTML += i+1 +") " + cities[i] + "<br />"
    }
}
// add cities
function addCity() {
    let newCity = document.getElementById("userNameInput").value.trim();
    if (newCity === "") {
        alert("Please enter a city name in the input field.");
        return;
    }
    cities.push(newCity);
    document.getElementById("userNameInput").value = "";
    let output = "";
    for (let i = 0; i < cities.length; i++) {
        output += (i + 1) + ") " + cities[i] + "<br>";
    }
    document.getElementById("output").innerHTML = output;
}


// table generate
function generateTable() {
    let tableNumber = document.getElementById("userNameInput").value.trim();
    if (tableNumber === "") {
        alert("Please enter a number in the input field.");
        return;
    }
    if (isNaN(tableNumber)) {
        alert("Please enter a valid number in the input field.");
        return;
    }
    document.getElementById("userNameInput").value = "";
    tableNumber = +tableNumber;
    let output = `<h3>Table of ${tableNumber}</h3><hr>`;
    for (let i = 1; i < 11; i++) {
        let row = `${tableNumber} * ${i} = ${tableNumber * i}<br>`;
        output += row;
    }
    document.getElementById("output").innerHTML = output;
}
