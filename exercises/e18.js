/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */
import { maxBy } from "./e17";  // This imports a function ( or any exported value) from ANOTHER MODULE 
export function getGreatestDiscoveryYear(data) {
  const asteroidFreq = {};
  data.asteroids
  .forEach(asteroid => {
    asteroidFreq[asteroid.discoveryYear] = (asteroidFreq[asteroid.discoveryYear] || 0) + 1;
  })
  const arrayOfFrequencies = Object.keys(asteroidFreq).map((key) =>{ 
    return {year:parseInt(key), quantity:asteroidFreq[key]};
  });
  const cb = (asteroid) => asteroid.quantity;
  const answerObj = maxBy(arrayOfFrequencies, cb);
  return answerObj.year;
}
// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
