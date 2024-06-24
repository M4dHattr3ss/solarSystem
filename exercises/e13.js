import { data } from "../data/data";

// SPACE DATA EXERCISE 13
// Return the average temperature of all the Planets
// Return example: 132.53

export function getAveragePlanetsTemperature(data) {
  // Your code goes here...
  const sumOfTemps = data.planets.reduce((acc, currValue) => {
    return (acc + currValue.avgTemp)
  },0 )
    return sumOfTemps / data.planets.length
}

// Inputs: Array of planet objects
// Outputs: average temp
// Examine the structure of data and consider edge cases

// iterate over our planets array (reduce)
// sum our temperatures (reduce)
// divide by the number of planets 


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-13"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
