/** Q1
 * Assume you have the USD prices for this week from Saturday to Thursday
 * in contrast to the Iraqi Dinar as an array
 * arr = [150, 146, 142, 143, 145, 144]
 * calculate the max profit at which day you should buy at and what day should you sell at
 * for this example we buy at Monday an we sell at Wednesday
 */

function BestProfit(arr) {
  let max = arr[0];
  let min = arr[0];
  let weekdays = [
    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
  ];
  let sellDay = weekdays[0];
  let buyDay = weekdays[0];

  for (let i = 1; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
      buyDay = weekdays[i];
    }
    if (max < arr[i]) {
      max = arr[i];
      sellDay = weekdays[i];
    }
  }
  return "we should buy at " + buyDay + " and sell at " + sellDay;
}
console.log(BestProfit([150, 146, 142, 143, 145, 144]))


/** Q2
 * assume you have two time periods
 * for example
 * period1 = 13/5/2021 01:00 to 14/5/2021 01:00
 * period2 = 15/5/2021 01:00 to 16/5/2021 01:00
 * write a function that tells us whether two given periods overlap or not
 * example CheckOverlap("13/5/2021 13:00","14/5/2021 13:00", "15/5/2021 13:00","16/5/2021 13:00" ) => no overlap
 * example CheckOverlap("13/5/2021 13:00","14/5/2021 13:00", "14/5/2021 13:00","16/5/2021 13:00" ) => overlap
 */
 function CheckOverlap(t1Start, t1End, t2Start,  t2End) {
  let start_time1 = Date.parse(t1Start);
  let end_time1 = Date.parse(t1End);
  let start_time2 = Date.parse(t2Start);
  let end_time2 = Date.parse( t2End);

  if ((start_time1 <= end_time2) && (start_time2 <= end_time1)) {
    return "overlap";
  }
  else {
   return "no overlap";
  }
}
console.log(CheckOverlap("5/13/2021 13:00","5/14/2021 13:00","5/15/2021 13:00","5/16/2021 13:00"))
console.log(CheckOverlap("5/13/2021 13:00","5/14/2021 13:00","5/14/2021 13:00","5/16/2021 13:00"))

/** Q3
 * assume you have a shoes factory and the production lines produces shoes as follows
 * L R LL R R RR LL
 * write a function that takes these shoes as in a string
 * shoes = "RLRLRRLL"
 * then return how many pairs in it
 * result = 4
 * example HowManyPairs("RLRLRRLL") => 4
 * example HowManyPairs("RRLLRRRLLR") => 2
 */
 function HowManyPairs(shoes) {
  let myList = [] ;
  for (let i = 0 ; i < shoes.length ; i++) {
      myList.push(shoes[i])
  }
  let  count = 0 ;
  for (let i = 0 ; i < myList.length ; i++) {
      for (let j = i +1  ; j < myList.length ; j++) {
          if ( (myList[i] == 'R' && myList[j] == 'L' ) || (myList[i] == 'L'  && myList[j] == 'R')) {
              count ++ ;
              myList[i] = "E" ;
              myList[j] = "E" ;
          }
      }
  }
  for (let i = 0 ; i < myList.length ; i++) {
      if ( myList[i] == 'L' || myList[i] == 'R') {
          count -- ;
      }
  }
return count ;
}
console.log(HowManyPairs("RLRLRRLL"))
console.log(HowManyPairs("RRLLRRRLLR"))


/** Q4
 *    Write a function that takes a string and return JSON of all the letters and its count. check the example to know more
 *    letterCount('abcac') => {a: 2, b: 1, c: 2}
 */
 function letterCount(name){
  myCounter = {} ;
  let count = 0 ;
  for (let i = 0 ; i < name.length ; i++){
      count = 1 ;
      for (let j = i+1 ; j < name.length ; j++){
          if (name[i] == name[j]) {
              count ++
          }
      }
if (myCounter [name[i]] == null) {
  myCounter [name[i]] = count ;
}

  }
return myCounter
}
console.log(letterCount("abcac"))



/** Q5
  * Create a function that takes an array of integers as an argument and returns the same array in ascending order. Using sort() would be easy, but for this challenge YOU have to sort the array creating your own algorithm.
 
 Examples
 sortArray([2, -5, 1, 4, 7, 8]) ➞ [-5, 1, 2, 4, 7, 8]
 
 sortArray([23, 15, 34, 17, -28]) ➞ [-28, 15, 17, 23, 34]
 
 sortArray([38, 57, 45, 18, 47, 39]) ➞ [18, 38, 39, 45, 47, 57]
 Notes
 The arrays can contain either positive or negative elements.
 The arrays will only contain integers.
 The arrays won't contain duplicate numbers.
 This is a challenge to enhance your ability, using the sort built-in won't enhance your skills.
  */
 function  sortArray (input) {
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] > input[j]) {
        let temp = input[i];
        input[i] = input[j];
        input[j] = temp;
      }
    }
  }
  return input;
}
console.log(sortArray([2, -5, 1, 4, 7, 8])) ;
console.log(sortArray([23, 15, 34, 17, -28]))
console.log(sortArray([38, 57, 45, 18, 47, 39]))


/** Q6
  * Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.
 
 Examples
 minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
 
 minMax([2334454, 5]) ➞ [5, 2334454]
 
 minMax([1]) ➞ [1, 1]
  */
 function minMax(arr) {
  let min_max = [];
  let min = arr[0];
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  min_max.push(min);
  min_max.push(max);
  return min_max;
}
console.log(minMax([1, 2, 3, 4, 5]))
console.log(minMax([2334454, 5]))
console.log(minMax([1]))


/** Q7
  * Create a function that takes an array of numbers between 1 and 10 (excluding one number) and returns the missing number.
 
 Examples
 missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10]) ➞ 5
 
 missingNum([7, 2, 3, 6, 5, 9, 1, 4, 8]) ➞ 10
 
 missingNum([10, 5, 1, 2, 4, 6, 8, 3, 9]) ➞ 7
 Notes
 The array of numbers will be unsorted (not in order).
 Only one number will be missing.
  */
 function missingNum(array) {
  array.sort();
  let missingNum = 0;

  for (let i = 0; i < array.length - 1; i++) {
    if (array[0] == 1) {
      if ((array[i] + 1) != (array[i + 1])) {
        missingNum = array[i] + 1;
      }
      if ((i == array.length - 2) && missingNum == 0) {
        missingNum = array[i] + 2;
      }
    } else {
      missingNum = 1;
      return missingNum;
    }
  }
  return missingNum;
}
console.log(missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10]))
console.log(missingNum([7, 2, 3, 6, 5, 9, 1, 4, 8]))
console.log(missingNum([10, 5, 1, 2, 4, 6, 8, 3, 9]))


/** Q8
  * Write a function that accepts a positive integer between 0 and 999 inclusive and returns a string representation of that integer written in English.
 
 Examples
 numToEng(0) ➞ "zero"
 
 numToEng(18) ➞ "eighteen"
 
 numToEng(126) ➞ "one hundred twenty six"
 
 numToEng(909) ➞ "nine hundred nine"
 Notes
 There are no hyphens used (e.g. "thirty five" not "thirty-five").
 The word "and" is not used (e.g. "one hundred one" not "one hundred and one").
  */
 function numToEng(num) {
  let oneToTwenty = [
    "zero",
    "one ",
    "two ",
    "three ",
    "four ",
    "five ",
    "six ",
    "seven ",
    "eight ",
    "nine ",
    "ten ",
    "eleven ",
    "twelve ",
    "thirteen ",
    "fourteen ",
    "fifteen ",
    "sixteen ",
    "seventeen ",
    "eighteen ",
    "nineteen ",
    "twenty ",
  ];

  let twentyToNinty = [
    "",
    "ten ",
    "twenty ",
    "thirty ",
    "forty ",
    "fifty ",
    "sixty ",
    "seventy ",
    "eighty ",
    "ninety ",
  ];

  let result;
  let value = num.toString();
  let valueLength = value.length;

  if (num == 0) {
    result = oneToTwenty[value[0]];
  }
  if ((valueLength == 1 || num <= 20) && num != 0) {
    result = oneToTwenty[num];
  }
  if (valueLength == 2 && num > 20) {
    result = twentyToNinty[value[0]] + oneToTwenty[value[1]];
  }
  if (valueLength == 3) {
    result =
      oneToTwenty[value[0]] +
      "hundred " +
      twentyToNinty[value[1]] +
      oneToTwenty[value[2]];
  }

  return result;
}
console.log(numToEng(0));
console.log(numToEng(18));
console.log(numToEng(126));
console.log(numToEng(909));

