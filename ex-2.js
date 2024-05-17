//Exercise #2: At Least Five Function

function atLeastFive(array, operation) {
  let num = 0;
  for (let i = 0; i < array.length; i++) {
    if (operation(array[i])) {
      num++;
    }
  }
  if (num >= 5) {
    return "ผ่านเกณฑ์ ✅";
  } else if (0 <= num < 5) {
    return "ไม่ผ่านเกณฑ์ ❌";
  }
}

function scoreOver70(score) {
  return score > 70;
}

const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

// Using `atLeastFive` function here

let scoreRoom1Result = atLeastFive(studentScoresRoom1, scoreOver70);
let scoreRoom2Result = atLeastFive(studentScoresRoom2, scoreOver70);
let scoreRoom3Result = atLeastFive(studentScoresRoom3, scoreOver70);

console.log(scoreRoom1Result);
console.log(scoreRoom2Result);
console.log(scoreRoom3Result);

