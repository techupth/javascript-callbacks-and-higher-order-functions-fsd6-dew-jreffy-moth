//Exercise #2: At Least Five Function

function atLeastFive(array, operation) {
  // Start coding here
  let countScores = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 70) {
      countScores++;
    }
  }
  let scoreResult = operation(countScores);
  return scoreResult;
}

const checkScores = (score) => {
  return score >= 5 ? "ผ่านเกณฑ์ ✅" : "ไม่ผ่านเกณฑ์ ❌";
};

const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

// Using `atLeastFive` function here

let scoreRoom1Result;
let scoreRoom2Result;
let scoreRoom3Result;

scoreRoom1Result = atLeastFive(studentScoresRoom1, checkScores);
scoreRoom2Result = atLeastFive(studentScoresRoom2, checkScores);
scoreRoom3Result = atLeastFive(studentScoresRoom3, checkScores);

console.log(scoreRoom1Result);
console.log(scoreRoom2Result);
console.log(scoreRoom3Result);
