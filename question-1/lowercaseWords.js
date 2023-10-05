const lowerCaseWords = (inputArray) => {
    return new Promise((resolve, reject) => {
      if (!Array.isArray(inputArray)) {
        reject(new Error("Input is not an array"));
      } else {
        const filteredAndLowercased = inputArray
          .filter(item => typeof item === 'string')
          .map(item => item.toLowerCase());
          
        resolve(filteredAndLowercased);
      }
    });
  }
  
  // Question 1
  const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];
  lowerCaseWords(mixedArray)
    .then(result => {
      console.log(result); // Output: [ 'pizza', 'wings' ]
    })
    .catch(error => {
      console.error(error.message); // This will not be triggered for the given input.
    });
  


