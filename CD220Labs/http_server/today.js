 // Export a function named 'getDate' from the module
module.exports.getDate = function getDate() {
    // Get the current date and time in the timezone "Australia/Brisbane"
    let aestTime = new Date().toLocaleString("en-US", {timeZone: "Australia/Brisbane"});
    return aestTime; // Return the formatted date and time
};

 // Export a function named 'getHours' from the module
 module.exports.getHours = function getHours() {
    // Get the current date and time in the timezone "Australia/Brisbane"
    let aestTime = new Date(new Date().toLocaleString("en-US", {timeZone: "Australia/Brisbane"}));
    let hours = aestTime.getHours();

    return hours; // Return the formatted date and time
};
