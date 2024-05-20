//Exercise #2: At Least Five Function

// สมมุติว่าเรามี Variable ตั้งต้น studentScoresRoom1 , studentScoresRoom2 และ studentScoresRoom3 ซึ่งบรรจุข้อมูลคะแนนสอบของนักเรียนในแต่ละห้อง ดังนี้

// studentScoresRoom1 = [12, 40, 67, 80, 100, 15, 40, 78, 75, 80]
// studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100]
// studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67]
// ต่อมาโรงเรียนมีเกณฑ์ในการตรวจสอบคุณภาพของนักเรียนแต่ละห้อง ดังนี้

// ถ้ามีนักเรียนจำนวนตั้งแต่ 5 คนขึ้นไป ที่ได้คะแนนมากกว่า 70 จะถือว่าผ่านเกณฑ์ ✅
// ถ้ามีนักเรียนจำนวนไม่ถึง 5 คน ที่ได้คะแนนมากกว่า 70 จะถือว่าไม่ผ่านเกณฑ์ ❌
// เมื่อโปรแกรมทำงานสำเร็จ ควรจะได้ผลลัพธ์แบบนี้


// นักเรียนห้องที่ 1 ผ่านเกณฑ์ ✅
// นักเรียนห้องที่ 2 ไม่ผ่านเกณฑ์ ❌
// นักเรียนห้องที่ 3 ไม่ผ่านเกณฑ์ ❌

const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

function countMore70(array){
  let counting = 0 ;
  for(let i of array){
    if(i >= 70){
      counting++ ;
    }
  }
  return counting ; 
}

function whichRoom(room){
  let num = 0;
  if(room == studentScoresRoom1){
    num = 1;
  } else if(room == studentScoresRoom2){
    num = 2;
  } else if(room == studentScoresRoom3){
    num = 3;
  }
  return num;
}

function atLeastFive(roomNum,operation) {
  
  let message = "";
  if(operation >= 5){
    message = `เด็กห้องที่ ${roomNum} ผ่านเกณฑ์ ✅`
    return message;
  } else {
    message = `เด็กห้องที่ ${roomNum} ไม่ผ่านเกณฑ์ ❌`
    return message;
  } 

};

let scoreRoom1Result = atLeastFive(whichRoom(studentScoresRoom1),countMore70(studentScoresRoom1));
let scoreRoom2Result = atLeastFive(whichRoom(studentScoresRoom2),countMore70(studentScoresRoom2));
let scoreRoom3Result = atLeastFive(whichRoom(studentScoresRoom3),countMore70(studentScoresRoom3));

console.log(scoreRoom1Result);
console.log(scoreRoom2Result);
console.log(scoreRoom3Result);
