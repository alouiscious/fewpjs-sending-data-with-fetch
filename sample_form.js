// Add your code here
//  Base fetch syntax:  fetch(destinationUrl, configurationObject);


// send a POST request
// fetch('http://localhost:3000/dogs', configurationObject = {
  // method: "POST",
  // headers: {
  //   "Content-Type": "application/json",
  //   "Accept": "application/json"
  // },
  // body: JSON.stringify({  
  //   dogName: "Byron",
  //   dogBreed: "Poodle"
  // })
  // Always convert body to a string (i.e json.srtringify)
// });

// send a fetch POST with more separated concerns POST request
let formData = {
  dogName: "Byron",
  dogBreed: "Poodle"
};

let configObj = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify(formdata)
};

fetch("http://localhost:3000/dogs", configObj) // see .then below

// manageing fetch function callbacks

.then(function(response) {  //  takes in response as an argument
  return response.json();  //  converts the response JSON to a JavaScript object
})
.then(function(object) { // funtion to
  console.log(object);  // manage what comes back in response.json()
})
// how to manage when fetch goes wrong
.catch(function(error) {
  alert("Nope, that wasn't it!");
  console.log(error.message);
});