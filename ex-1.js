// Exercise #1: For Each Function

// สมมุติว่าเรามี Variable ตั้งต้น employeeSalaries ซึ่งบรรจุข้อมูลเงินเดือนของพนักงานในบริษัท ดังนี้ [20005, 40000, 32000, 14500, 344000]
// วันหนึ่งบริษัทแห่งหนึ่งต้องการเพิ่มเงินเดือนให้กับพนักงานทุกคน 5,000 บาท
// ให้เขียนโปรแกรมในการเพิ่มเงินเดือนให้กับพนักงานทุกคน 5,000 บาท ( เขียนโค้ดในรูปแบบของ Callback และ Higher Order Function )
// เมื่อโปรแกรมทำงานสำเร็จ ควรจะแสดงผลลัพธ์ทางหน้าจอแบบนี้

// [25005, 45000, 37000, 19500, 349000]

function addEach(salary){
  return salary + 5000 ;
}

function forEach(array, operation) {
  // Start coding here
  for(let i of array){
    newEmployeeSalaries.push(operation(i));
  }
}

const employeeSalaries = [20005, 40000, 32000, 14500, 344000];
const newEmployeeSalaries = [];

// Using `forEach` function here
forEach(employeeSalaries,addEach);

console.log(newEmployeeSalaries); // [25005, 45000, 37000, 19500, 349000]
