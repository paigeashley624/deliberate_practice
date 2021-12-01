// iven a sequence of bracket-like characters, determine if you can make it into a valid sequence with at most one deletion of any character. Return 1 if it is possible to make it into a valid sequence and return 0 if it is not possible.

// Definition of a valid sequence:
// 1. all the parentheses are matched (every opening bracket-like character has a corresponding closing bracket-like character)
// 2. the matched parentheses are in the correct order (an opening bracket-like character should come before the closing bracket-like character)

// Assume '{', '(', '[' are the only opening bracket-like characters we will see 
// Assume '}', ')', ']' are the only closing brakcet-like characters we will see

// Examples of a valid sequence:
// - '[ hello (world) ]'
// - '(h[s])'

// Examples of an invalid sequence:
// - ') hello ('
// - '[ world }'
// - '[ ( ] )'

// Sample Tests:

// Input: '[hyperscience )rocks]'
// Output: 1
// Explanation: Delete ')' to get '[hyperscience rocks]' and '[hyperscience rocks]' is a valid sequence. Therefore return 1.

// Input: '[hello(,]world)'
// Output: 0
// Explanation: Will not get a valid sequence with zero or one delete.

// Input: '[h(s]'
// Output: 1

// Input: '([(h](s))'
// Output: 1

// Input: '()h[]])s'
// Output: 0

// solution = function(s) {
//   let counterArray = []

//   counterArray.push(s.indexOf('['))
//   counterArray.push(s.indexOf(']'))
//   counterArray.push(s.indexOf('('))
//   counterArray.push(s.indexOf(')'))
  
//   return counterArray

// }
// console.log(solution('hello[(world)]'))
// console.log(solution(') hello ('))

// ====================================================

// Given an array of strings, return a hash that provides of a count of how many times each string occurs.

// Input: ["Dewey", "Truman", "Dewey", "Dewey", "Truman", "Truman", "Dewey", "Truman", "Truman", "Dewey", "Dewey"]

// Output: {"Dewey" => 6, "Truman" => 5}

// Explanation: "Dewey" occurs 6 times in the array, while "Truman" occurs 5 times.

function countVotes(votes) {
  var tally = {};
  
  for(const num of votes){
    tally[num] = tally[num] ? tally[num]+ 1 : 1;
  }

  tally.set(vote[0], 1)
  console.log(tally.display);
}

countVotes(["Dewey", "Truman", "Dewey", "Dewey", "Truman", "Truman", "Dewey", "Truman", "Truman", "Dewey", "Dewey"])

// votes =["Dewey", "Truman", "Dewey", "Dewey", "Truman", "Truman", "Dewey", "Truman", "Truman", "Dewey", "Dewey"]

// var tally = new Map();
// tally.set(votes[0], 1)
// tally.set(votes[0], tally.get +1)
// tally.display
// console.log(tally); // map(1) {'paige' => "1"}

// const collection = new Map();

// collection.set("Nathan", "555-0182");
// collection.set("Jane", "555-0182");

// console.log(collection.get("Nathan")); // 555-0182
// console.log(collection.size); // 2
// console.log(collection); // 2