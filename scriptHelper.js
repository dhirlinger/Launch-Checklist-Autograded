// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
 }
 
 function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    } else if (!isNaN(testInput)) {
        return "Is a Number";
    } else {
        return "Not a Number";
    }
 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) {
    //validations
    let inputs = [pilot, copilot, fuelLevel, cargoMass];
    for (let i = 0; i < inputs.length; i++) {
        if (validateInput(inputs[i]) === "Empty") {
            return alert("All fields are required!");
            
        }
    }
    if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" 
    || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoMass) === "Not a Number") {
        return alert("Make sure to enter valid information for each field");
        
            
    } 
   //list update
   
   let goodFuelStatus = 'Fuel level high enough for launch';
   let goodCargoStatus = 'Cargo mass low enough for launch';
   list = list.children[0].children;
   
   list[0].innerHTML = `Pilot ${pilot} is ready for launch`;
   list[1].innerHTML = `Co-pilot ${copilot} is ready for launch`;

   document.getElementById("faultyItems").style.visibility = "visible";

   if (fuelLevel < 10000 || cargoMass > 10000) {
    document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
    document.getElementById("launchStatus").style.color = "red";
   } else {
    document.getElementById("launchStatus").innerHTML = "Shuttle is Ready for Launch";
    document.getElementById("launchStatus").style.color = "green";

   }

   if (fuelLevel < 10000) {
    
    list[2].innerHTML = `Fuel level too low for launch`;
    /*document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
    document.getElementById("launchStatus").style.color = "red";*/

   } else if (fuelLevel >= 10000) {
    list[2].innerHTML = `${goodFuelStatus}`;
    /*document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch";
    document.getElementById("launchStatus").style.color = "green";*/

    }

   if (cargoMass > 10000) {
    //document.getElementById("faultyItems").style.visibility = "visible";
    list[3].innerHTML = `Cargo mass too heavy for launch`;
    /*document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
    document.getElementById("launchStatus").style.color = "red";*/
  
    } else if (cargoMass <= 10000) {
    list[3].innerHTML = `${goodCargoStatus}`;
    /*document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch";
    document.getElementById("launchStatus").style.color = "green";*/
   
    }

 }
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();   
    });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;