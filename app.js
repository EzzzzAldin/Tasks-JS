// PROGRAM1
let date = new Date();
// Create loop date between 2014 and  2050
for (let i = -7; i < 30; i++) {
  // Get first day month jun From All Year Between 2014 & 2050
  date.setFullYear(date.getFullYear() + i, date.getMonth() - 11, 1);
  if (date.getDay() === 0) {
    // Show Onyly Sunday
    console.log(date.toDateString());
  }
  // to rest date and start now date
  date = new Date();
}

console.log("=".repeat(50));

// PROGRAM 2
// Get Date christmas
const christmas = new Date(date.getFullYear(), 11, 25);
// day calculate
const oneDay = 1000 * 60 * 60 * 24;
// when sub date christmas and now date convert result to day integr number
const daysLeft = Math.ceil((christmas.getTime() - date.getTime()) / oneDay);
console.log(`days left until Christmas is ${daysLeft}`);

console.log("=".repeat(50));

// PROGRAM 3
function checkNumber(num) {
  // Use Math.abs To return postive value
  return Math.abs(100 - num) <= 20 || Math.abs(400 - num) <= 20;
}

console.log(checkNumber(90));
console.log(checkNumber(200));

console.log("=".repeat(50));

// PROGRAM 4
function largest(x, y, z) {
  if (x > y && x > z) return x;
  if (y > x && y > z) return y;
  if (z > x && z > y) return z;
}

console.log(largest(2, 5, 20));
console.log(largest(2, 30, 1));
console.log(largest(700, 2, 1));

console.log("=".repeat(50));

// PROGRAM 5
function upperCase(str) {
  // Used Slice to split sentence
  const words = str.toLowerCase().split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1);
  }
  // Directly return the joined string
  return words.join(" ");
}

console.log(
  upperCase(
    "orem ipsum dolor sit amet consectetur adipisicing elit. Soluta consequatur"
  )
);

console.log("=".repeat(50));

// PROGRAM 6
const myStr = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur dolor'

// Give first value is first char and second value is last char
const result = myStr.substring(1, myStr.length -1);

console.log(result);

console.log("=".repeat(50));

// PROGRAM 7
function rotatearr(arr) {
    // Change index Of Array To Rotate Left
    return [arr[1], arr[2], arr[0]]
}

console.log(rotatearr([2 , 4 , 7]));
console.log(rotatearr([1 , 3 , 5]));
console.log(rotatearr([8 , 9 , 50]));

console.log("=".repeat(50));

// PROGRAM 8
function checkarr(arr) {
    if(arr[0] === arr[arr.length - 1]) return ' first and last elements are equal'
    return ' first and last elements are not equal'
}

console.log(checkarr([2 , 4 , 2]));
console.log(checkarr([1 , 3 , 5]));
console.log(checkarr([7 , 4 , 7]));