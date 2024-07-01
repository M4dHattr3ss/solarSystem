/**
 * Make sure to read the e17.md file!
 * For this exercise we want you to make custom `maxBy` and `minBy` methods. 
 * In order to do this it is ok to use any type of FOR loops. 
 * REQUIREMENTS: functions should:
 * * Take an array of things
 * * minBy(): Return the element where the callback function on that element yields the lowest value
 * * maxBy(): Return the element where the callback function on that element yields the highest value
 */

// Input: array, callback
// where the cb takes the element and it is the lowest value
// Outputs: element in the original array

export function minBy(array, cb) {
  if(array.length === 0){
    return undefined;
  }
  let min = cb(array[0]);
  let minElement = array[0];
  for (let i = 0; i < array.length; i++){
      if(cb(array[i]) < min){
        min = cb(array[i]);
        minElement = array[i];
        console.log('min: ', min); 
      }
  }
  return minElement;
}

// write and a simple callback
// use that to test the function
// place console logs in the function

// Error1: Returning too early or returning when you shouldn't be. Give you a result that you don't wait.
// Solution1: Place strategic console logs in loops or after reassignment to figure out where we stop iterating/processing the data
// Error2: Not returning. When you get an unexpected undefined result. Make sure you are using the return key word. 

export function maxBy(array, cb) {
    if (array.length === 0) {
      return undefined;
    }
  let max = cb(array[0]);
  let maxElement = array[0];
  
    for (let i = 0; i < array.length; i++){  
      if(cb(array[i]) > max){
        max = cb(array[i]);
        maxElement = array[i];
      }
  }
  return maxElement;
}
// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-17"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function