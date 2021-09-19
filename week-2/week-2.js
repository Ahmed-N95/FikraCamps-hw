// Q1
// Create a function that returns an array of strings sorted by length in ascending order.
// Examples
// sortByLength(["a", "ccc", "dddd", "bb"]) ➞ ["a", "bb", "ccc", "dddd"]
// sortByLength(["apple", "pie", "shortcake"]) ➞ ["pie", "apple", "shortcake"]
// sortByLength(["may", "april", "september", "august"]) ➞ ["may", "april", "august", "september"]
// sortByLength([]) ➞ []
function sortByLength(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i].length > arr[j].length) {
          let temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
      }
    }
    return arr;
  }
  console.log(sortByLength(["a", "ccc", "dddd", "bb"]));
  console.log(sortByLength(["apple", "pie", "shortcake"]));
  console.log(sortByLength(["may", "april", "september", "august"]));
  
  
  // Q2
  // You will be given an array of drinks, with each drink being an object with two properties: name and price. Create a function that has the drinks array as an argument and return the drinks objects sorted by price in ascending order.
  // Assume that the following array of drink objects needs to be sorted:
  // drinks = [
  //   {name: "lemonade", price: 50},
  //   {name: "lime", price: 10}
  // ]
  // The output of the sorted drinks object will be:
  // Examples
  // sortDrinkByPrice(drinks) ➞ [{name: "lime", price: 10}, {name: "lemonade", price: 50}]
  function sortDrinkByPrice(drinks) {
    for (let i = 0; i < drinks.length; i++) {
      for (let j = i + 1; j < drinks.length; j++) {
        if (drinks[i]["price"] > drinks[j]["price"]) {
          let temp = drinks[i]["price"];
          drinks[i]["price"] = drinks[j]["price"];
          drinks[j]["price"] = temp;
        }
      }
    }
    return drinks;
  }
  let drinks = [
    { name: "lemonade", price: 50 },
    { name: "lime", price: 10 },
  ];
  console.log(sortDrinkByPrice(drinks));
  
  
  // Q3
  // Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array.
  // Examples
  // toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]
  // toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots", 12]]
  // toArray({}) ➞ []
  // Notes
  // Return an empty array if the object is empty.
  function toArray(object) {
    let array = [];
    Object.entries(object).forEach(([key, value]) => {
      let arr = [];
      arr.push(key);
      arr.push(value);
      array.push(arr);
    });
    return array;
  }
  console.log(toArray({ a: 1, b: 2 }));
  console.log(toArray({ shrimp: 15, tots: 12 }));
  console.log(toArray({}));
  

// Q4
// Create a function that takes an object and returns the keys and values as separate arrays. Return the keys sorted alphabetically, and their corresponding values in the same order.
// Examples
// keysAndValues({ a: 1, b: 2, c: 3 })
// ➞ [["a", "b", "c"], [1, 2, 3]]
// keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })
// ➞ [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]
// keysAndValues({ key1: true, key2: false, key3: undefined })
// ➞ [["key1", "key2", "key3"], [true, false, undefined]]
// Notes
// Remember to sort the keys.
function keysAndValues(myObject) {
    let keys = [];
    let values = [];
    let result = [];
    Object.entries(myObject).forEach(([key, value]) => {
      keys.push(key);
      values.push(value);
    });
  
    for (let i = 0; i < keys.length; i++) {
      for (let j = i + 1; j < keys.length; j++) {
        if (keys[i][0] > keys[j][0]) {
          let temp1 = keys[i];
          let temp2 = values[i];
          keys[i] = keys[j];
          values[i] = values[j];
          keys[j] = temp1;
          values[j] = temp2;
        }
      }
    }
    result.push(keys), result.push(values);
  
    return result;
  }
  
  console.log(keysAndValues({ a: 1, b: 2, c: 3 }));
  console.log(keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" }));
  console.log(keysAndValues({ key1: true, key2: false, key3: undefined }));
  console.log(keysAndValues({ a: 1, b: 2, c: 3 }));
  
  
  // Q5
  // Create a function that takes in a year and returns the correct century.
  // Examples
  // century(1756) ➞ "18th century"
  // century(1555) ➞ "16th century"
  // century(1000) ➞ "11th century"
  // century(1001) ➞ "11th century"
  // century(2005) ➞ "21st century"
  // Notes
  // All years will be between 1000 and 2010.
  // The 11th century is between 1001 and 1100.
  // The 18th century is between 1701-1800.
  function century(year) {
    let strYear = year.toString();
    cent = strYear.slice(0, 2);
    strYear = parseInt(cent) + 1;
    if (parseInt(cent) < 20) {
      return strYear + "th century";
    } else {
      return strYear + "st century";
    }
  }
  console.log(century(1756));
  console.log(century(1555));
  console.log(century(1000));
  console.log(century(1001));
  console.log(century(2005));
  
  
  // Q6
  // Number of Arrays in an Array
  // Return the total number of arrays inside a given array.
  // Examples
  // numOfSubbarrays([[1, 2, 3]]) ➞ 1
  // numOfSubbarrays([[1, 2, 3], [1, 2, 3], [1, 2, 3]]) ➞ 3
  // numOfSubbarrays([[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]]) ➞ 4
  // numOfSubbarrays([1, 2, 3]) ➞ 0
  function numOfSubbarrays(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        count ++ ;
      }
    }
    return count;
  }
  console.log(numOfSubbarrays([[1, 2, 3]]))
  console.log(numOfSubbarrays([[1, 2, 3], [1, 2, 3], [1, 2, 3]]))
  console.log(numOfSubbarrays([[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]]))
  console.log(numOfSubbarrays([1, 2, 3]))
  
  
  // Q7
  // Sum of Number Elements in an Array
  // Arrays can be mixed with various types. Your task for this challenge is to sum all the number elements in the given array. Create a function that takes an array and returns the sum of all numbers in the array.
  // Examples
  // numbersSum([1, 2, "13", "4", "645"]) ➞ 3
  // numbersSum([true, false, "123", "75"]) ➞ 0
  // numbersSum([1, 2, 3, 4, 5, true]) ➞ 15
  function numbersSum(arr) {
    let sum = 0;
    for (var i = 0; i < arr.length; i++) {
      if (Number.isInteger(arr[i])) {
        sum = sum + arr[i];
      }
    }
    return sum;
  }
  console.log(numbersSum([1, 2, "13", "4", "645"]));
  console.log(numbersSum([true, false, "123", "75"]));
  console.log(numbersSum([1, 2, 3, 4, 5, true]));
  
  
  // Q8 Write a program to validate if the number is from multiples of 2 .
  // ex: console.log(isMultiplesOfTwo(2))     output: true
  // ex: console.log(isMultiplesOfTwo(512))     output: true
  // ex: console.log(isMultiplesOfTwo(513))     output: false
  // ex: console.log(isMultiplesOfTwo(255))     output: false
  function isMultiplesOfTwo(num) {
    if (num % 2 == 0) {
      return true;
    } else {
      return false;
    }
  }
  console.log(isMultiplesOfTwo(2));
  console.log(isMultiplesOfTwo(512));
  console.log(isMultiplesOfTwo(513));
  console.log(isMultiplesOfTwo(255));
  