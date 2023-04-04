// //1.  Remove the duplicate values from the array using filter method

let arr = [1, 2, 3, 4, 4, 5, 6, 7, 8, 9, 7, 1];
let students = [
  {
    id: 1,
    name: "John",
    age: 20,
  },
  {
    id: 2,
    name: "Doe",
    age: 20,
  },
  {
    id: 2,
    name: "Doe",
    age: 20,
  },
  {
    id: 3,
    name: "Harry",
    age: 20,
  },
  {
    id: 4,
    name: "Marry",
    age: 20,
  },
];

//ans

let uniqueArr = arr.filter((value, index, self) => {
  return self.indexOf(value) === index;
});

console.log(uniqueArr); 


let uniqueStudents = students.filter((value, index, self) => {
  return self.findIndex((s) => s.id === value.id) === index;
});

console.log(uniqueStudents); 



// // Remove false,0,null,undefined, NaN,'' from the array;
let array = [false, 0, NaN, 6, undefined, "", "Hi"];

//ans
let array = [false, 0, NaN, 6, undefined, "", "Hi"];

let filteredArray = array.filter((value) => {
  return Boolean(value); // check if the value is truthy
});

console.log(filteredArray); 





// // 2 . Get the initial from the string
const input = "George Raymond Richard Martin";
//ans
const input = "George Raymond Richard Martin";

let initials = input.split(" ").map((word) => {
  return word.charAt(0);
});

console.log(initials.join("")); 

// // Result ="GRRM";



// // 3. calculate the total number of votes from the given array
var voters = [
  { name: "Bob", age: 30, voted: true },
  { name: "Jake", age: 32, voted: true },
  { name: "Kate", age: 25, voted: false },
  { name: "Sam", age: 20, voted: false },
  { name: "Phil", age: 21, voted: true },
  { name: "Ed", age: 55, voted: true },
  { name: "Tami", age: 54, voted: true },
  { name: "Mary", age: 31, voted: false },
  { name: "Becky", age: 43, voted: false },
  { name: "Joey", age: 41, voted: true },
  { name: "Jeff", age: 30, voted: true },
  { name: "Zack", age: 19, voted: false },
];
function totalVotes(arr) {
  let total = arr.reduce((acc, curr) => {
    return curr.voted ? acc + 1 : acc;
  }, 0);
  
  return total;
}

console.log(totalVotes(voters))

// 7 votes


// 4. convert the voters array into this format:
var contacts = [
  { name: "Bob", age: 30, voted: true },
  { name: "Jake", age: 32, voted: true },
  { name: "Kate", age: 25, voted: false },
  { name: "Sam", age: 20, voted: false },
  { name: "Phil", age: 21, voted: true },
  { name: "Ed", age: 55, voted: true },
  { name: "Babin", age: 55, voted: true },
  { name: "Tami", age: 54, voted: true },
  { name: "Telesko", age: 54, voted: true },
  { name: "Mary", age: 31, voted: false },
  { name: "Becky", age: 43, voted: false },
  { name: "Joey", age: 41, voted: true },
  { name: "Jeff", age: 30, voted: true },
  { name: "Zack", age: 19, voted: false },
  { name: "Zack", age: 19, voted: false },
];
