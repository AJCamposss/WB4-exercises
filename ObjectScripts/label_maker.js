let info = {                     //Object - created a file system to hold information
     name: "John James",
    address: "1456 1st Street",
     city: "Phoenix",
    state: "Arizona",
    zip: "85001"
};
printContact(info); //calling a function and passing info into it.

function printContact(info) {  // inside this function passed the info object
    console.log(info.name)     // then I logged the properties
    console.log(info.address)
    console.log(`${info.city}, ${info.state} ${info.zip}`)
}