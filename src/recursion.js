/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {
  if (n < 0) {return null};
  if (n === 1 || n === 0) {return 1};
  return n * factorial(n-1);
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {
  if (array.length === 1) {
    return array[0];
  } else if (array.length < 1){
    return 0;
  };
  arrayCopy = array.slice();
  arrayCopy[0] = arrayCopy[0] + arrayCopy[arrayCopy.length - 1];
  return sum(arrayCopy.slice(0,arrayCopy.length - 1));
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
  if (array.length < 1) {
    return 0;
  };
  var arrayCopy = array.slice();

  if (typeof(arrayCopy[0]) !== 'number') {
    arrayCopy[0] = arraySum(arrayCopy[0]);
  }
  if (arrayCopy.length === 1) {
    return arrayCopy[0];
  }
  if (typeof(arrayCopy[1]) !== 'number') {
    arrayCopy[1] = arraySum(arrayCopy[1]);
  }
  return arrayCopy[0] + arraySum(arrayCopy.slice(1));
};

// 4. Check if a number is even.
var isEven = function(n) {
  if (n === 1){return false}
  return n === 2 ? true : isEven(Math.abs(n-2))
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  if (n === 0) {
    return 0;
  }
  if (n + Math.abs(n) === 0) {
    return n + 1 + sumBelow(n + 1);
  } else {
    return n - 1 + sumBelow(n - 1);
  }
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function(x, y) {
  var result = [];
  if (x < y) {
    if (x + 1 >= y) {
    return result;
    }
    result.push(x + 1);

    result = result.concat(range(x + 1, y));
  } else {
    if (x - 1 <= y) {
      return result;
    }
    result.push(x - 1);

    result = result.concat(range(x - 1, y));
  }
  return result;
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  if (exp === 0) {
    return 1;
  }
  if (exp < 0) {
    return 1 / (base * exponent(base, (-exp - 1)));
  }
  if (exp % 2 === 0) {
    var even = exponent(base, exp / 2);
    return even * even;
  }
  return base * exponent(base, exp - 1);
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  if (n === 2 || n === 1 || n === -1) {
    return true
  } else if (!Number.isInteger(n) || n === 0) {
    return false;
  }
  return powerOfTwo(n / 2);
};

// 9. Write a function that reverses a string.
var reverse = function(string) {
  if (string.length === 0) {
    return '';
  }
  var result = string[string.length - 1];
  result += reverse(string.slice(0, string.length - 1))
  return result;
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  if (string.length === 1 || string.length === 0) {
    return true
  }
  string = string.split(' ').join('').toUpperCase();
  if (string[0] === string[string.length - 1]) {
    return palindrome(string.slice(1, string.length - 1))
  }
  return false
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
  if (y === 0) {
    return NaN;
  }
  if (x < 0) {
    return -modulo(-x,  y);
  }
  if (y < 0) {
    return  modulo( x, -y);
  }
  if (x < y) {
    return x;
  }
  return modulo(x - y, y);
};

  // return modulo(x - y, y);
// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {
  if (y === 0) {
    return 0;
  }
  if (y < 0) {
    if (x < 0) {
      return -x + multiply(-x, -y - 1);
    }
    return x + multiply(-x, -y + 1);
  }
  return x + multiply(x, y - 1);
};
// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function(x, y) {
  if (y === 0) {
    return NaN;
  }
  if (x < 0) {
    if (y < 0) {
      if (x > y){
        return 0
      }
      return 1 + divide(-(x - y), -y)
    }
    if (-x < y) {
      return 0
    }
    return -1 + divide(x + y, y)
  }
  if (y < 0) {
    if (x < -y) {
      return 0
    }
    return -1 + divide(x + y, y)
  }
  if (x < y) {
    return 0
  }
  return 1 + divide(x - y, y);
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
  if (x < 0 || y < 0) {
    return null;
  }
  if (x === 0) {
    return y
  }
  if (y === 0) {
    return x
  }
  if (y > x) {
    var temp = x;
    x = y;
    y = temp
  }
  return gcd(y, x % y)
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  if (str1.length === 0 && str2.length === 0) {
    return true
  }
  if (str1[0] === str2[0]){
    return compareStr(str1.slice(1), str2.slice(1))
  }
  return false
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {

  var result = [str[0]];
  if (str.length > 1) {
    result = result.concat(createArray(str.slice(1)))
  }
  return result
};

// 17. Reverse the order of an array
var reverseArr = function(array) {
  var result = [array[array.length - 1]];
  if (array.length > 1) {
    result = result.concat(reverseArr(array.slice(0, array.length - 1)))
  }
  return result
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  var result = [value];
  if (length > 1) {
    result = result.concat(buildList(value,length - 1));
  }
  return result
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
  var result = [];
  if (n % 3 === 0 && n % 5 === 0) {
    result.push('FizzBuzz');
  } else if (n % 3 === 0) {
    result.push('Fizz');
  } else if (n % 5 === 0) {
    result.push('Buzz');
  } else {
    result.push(JSON.stringify(n));
  }
  if (n > 1) {
    result = fizzBuzz(n-1).concat(result);
  }
  return result
};

// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  var result = 0;
  if (array[0] === value) {
    result += 1;
  }
  if (array.length > 1) {
    result += countOccurrence(array.slice(1), value);
  }
  return result
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  var result = [];
  result.push(callback(array[0]))
  if (array.length > 1) {
    result = result.concat(rMap(array.slice(1), callback))
  }
  return result
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {
  var clone = {...obj};
  var result = 0;
  var keys = Object.keys(clone);
  if (keys.length === 0) {
    return result;
  }
  if (typeof(clone[keys[0]]) === 'object') {
    result += countKeysInObj(clone[keys[0]], key);
  };
  if (keys[0] === key) {
    delete clone[keys[0]];
    result += 1 + countKeysInObj(clone, key);
  } else {
    delete clone[keys[0]];
    result += countKeysInObj(clone, key);
  }

  return result;
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
  var clone = {...obj};
  var result = 0;
  var keys = Object.keys(clone);
  if (keys.length === 0) {
    return result;
  }
  if (typeof(clone[keys[0]]) === 'object') {
    result += countValuesInObj(clone[keys[0]], value);
  };
  if (clone[keys[0]] === value) {
    delete clone[keys[0]];
    result += 1 + countValuesInObj(clone, value);
  } else {
    delete clone[keys[0]];
    result += countValuesInObj(clone, value);
  }
  return result;
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {
  Object.keys(obj).map((key) => {
    if (typeof obj[key] === 'object') {
      replaceKeysInObj(obj[key], oldKey, newKey);
    }
    if (key === oldKey) {
      obj[newKey] = obj[oldKey]
      delete obj[oldKey];
    }
  });

  return obj;
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
  if (n < 1) {
    return null;
  }
  if (n === 1) {
    return [0, 1];
  }
  var arr = fibonacci(n - 1);
  return arr.concat(arr[n-1] + arr[n-2]);
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  if (n < 0) {
    return null;
  }
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  return nthFibo(n - 1) + nthFibo(n - 2);
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
  var result = [];
  if (array.length === 0) return result;

  result.push(array[0].toUpperCase());

  return array.length > 1 ? result.concat(capitalizeWords(array.slice(1))) : result;
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
  var result = [];
  if (array.length === 0) return result;
  result.push(array[0][0].toUpperCase() + array[0].slice(1));

  return array.length > 1 ? result.concat(capitalizeFirst(array.slice(1))) : result;
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
  var result = 0;

  if (obj % 2 === 0) {
    result += obj;
  }
  if (typeof(obj) === 'object') {
    for (key in obj) {
      result += nestedEvenSum(obj[key])
    }
  }

  return result;
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
  var result = [];
  if (typeof(array) !== 'object') {
    result.push(array);
  }
  if (Array.isArray(array)) {
    for (item in array) {
      result = result.concat(flatten(array[item]))
    }
  }

  return result
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj = {}) {

  if (obj[str[0]]) {
    obj[str[0]] += 1
  } else {
    obj[str[0]] = 1
  }

  if (str.length > 1) {
    return letterTally(str.slice(1), obj)
  }

  return obj
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
  var result = [];

  result.push(list[0]);
  var counter = 1;
  while (list[counter] === result[0]) {
    counter++
  }
  if (list.length > counter) {
    result = result.concat(compress(list.slice(counter)))
  }

  return result
};

// 33. Augment every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
  var result = [];

  if (typeof array !== 'object') {
    result.push(aug)
  }
  if (Array.isArray(array)) {
    if (array.length === 0) {
      result.push(aug)
    } else {
      for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
         result.push(array[i].concat(augmentElements(array[i], aug)))
        } else {
          result.push(aug)
        }
      }
    }
  }
  return result
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
  var result = [];

  result.push(array[0]);
  var counter = 1;
  while (array[counter] === result[0] && array[counter] === 0) {
    counter++
  }
  if (array.length > counter) {
    result = result.concat(minimizeZeroes(array.slice(counter)))
  }

  return result
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
  var result = [];

  result.push(Math.abs(array[0]));

  if (array.length > 1) {
    result.push(-Math.abs(array[1]));
  }
  if (array.length > 2) {
    result = result.concat(alternateSign(array.slice(2)))
  }
  return result
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
  var nums = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

  var result = '';
  var array = str.split(' ')

  if (Number(array[0])) {
    result += nums[Number(array[0])];
  } else {
    result += array[0];
  }

  if (array.length > 1) {
    result += ' ' + numToText(array.slice(1).join(' '));
  }

  return result
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min = 0, max = array.length) {
  var median = Math.floor((min + max) / 2)

  if (min > max) {
    return null;
  }
  if (array[median] === target) {
    return median
  }
  if (array[median] > target) {
    return binarySearch(array, target, min, median - 1)
  }
  return binarySearch(array, target, median + 1, max);
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
};
