/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

/*
  maxby to find greatest number of Asteroids
  INPUT: object 'data' with arrays inside
  OUTPUT: year of the greatest asteroids
  Take each year and add how many asteroids per year


Search through data and access asteroids
check the discovery year of each asteroid
itterate!
find the year and the number of times it occurs
media type
REVIEW OBJECTS

1. figure how to create an array of objects from an Object
2. create your callback function
3. plug the array and cb into your maxBy function 
4. Profit


*/
import { maxBy } from "./e17";  // This imports a function ( or any exported value) from ANOTHER MODULE 
export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  // feel free to import your `maxBy` or `minBy` methods from previous lessons

  const asteroidFreq = {};
  data.asteroids
  .forEach(asteroid => {
    asteroidFreq[asteroid.discoveryYear] = (asteroidFreq[asteroid.discoveryYear] || 0) + 1;
  })
  //console.log(asteroidFreq);

  // Create the array of objects - that have this shape {Year: number, quantity :number} 
  const arrayOfFrequencies = Object.keys(asteroidFreq).map((key) =>{ 
    return {year:parseInt(key), quantity:asteroidFreq[key]};
  });
  console.log(arrayOfFrequencies);

  // create the callback function to find the highest quantity, return the year 
  // Return the YEAR (as a number)
  const cb = (asteroid) => asteroid.quantity;
  const answerObj = maxBy(arrayOfFrequencies, cb);

  return answerObj.year;

  
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
