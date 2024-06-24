/**
 * Make sure to read the e16.md file!
 * For this exercise we want you to make a custom `find` method. 
 * In order to do this it is ok to use any type of FOR loops.
 * REQUIREMENT: A find function should
 * * Take an array of things
 * * Return a the first thing where the applied callback is truthey
 * The function MUST NOT use the find() method.
 */


export function find(array, callback) {
  // Your code goes here...

  for(let element of array){
    if(callback(element)){
      return element;
      //break;
    }
  }
  return undefined;
}
/*inputs: array and callback
    array is the data set
    callback is the function passed
  outputs: only the FIRST true statement
  Doing: 
  Take a data set
  itterate over it
  test each index if it is true
  stop at the first true
  push to variable

*/


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function