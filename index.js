// code your solution here
// Function to find a number whose multiplication result equals 62
function multiply() {
    for (let i = 1; i <= 62; i++) {
      if (62 % i === 0) {
        return `${i} * ${62 / i} = 62`;
      }
    }
  }
  
  // Function to generate a random integer greater than 0
  function random() {
    return Math.floor(Math.random() * Number.MAX_SAFE_INTEGER) + 1;
  }
  
  // Function to calculate a remainder that is equal to 4
  function mod(number) {
    return number % 4 === 0;
  }
  
  // Function to find the highest number in a set
  function max(numbers) {
    if (Array.isArray(numbers) && numbers.length > 0) {
      return Math.max(...numbers);
    }
  }
  
  // Example usage:
  console.log(multiply()); // Output: "1 * 62 = 62"
  console.log(random());   // Output: A random integer greater than 0
  console.log(mod(12));    // Output: true (12 % 4 = 0)
  console.log(max([10, 15, 20, 5])); // Output: 20

  // 1) Define the saturdayFun function declaration
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
  
  // 4) Define the mondayWork function expression
  const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  }
  
  // 7) Define the wrapAdjective function
  function wrapAdjective(flair = "*") {
    return function(adjective) {
      return `You are ${flair}${adjective}${flair}!`;
    }
  }
  
  // Example usage:
  console.log(saturdayFun()); // Output: "This Saturday, I want to roller-skate!"
  console.log(saturdayFun("play football")); // Output: "This Saturday, I want to play football!"
  console.log(mondayWork()); // Output: "This Monday, I will go to the office."
  console.log(mondayWork("work from home")); // Output: "This Monday, I will work from home."
  const wrapStar = wrapAdjective("*");
  const wrapPipe = wrapAdjective("||");
  console.log(wrapStar("awesome")); // Output: "You are *awesome*!"
  console.log(wrapPipe("creative")); // Output: "You are ||creative||!"
  