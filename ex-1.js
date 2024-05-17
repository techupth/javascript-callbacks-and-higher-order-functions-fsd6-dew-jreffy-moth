// Exercise #1: For Each Function

function forEach(array, operation) {
  for (let i = 0; i < array.length; i++) {
    operation(array[i]);
  }
}

function increasedSalary (num) {
  return newEmployeeSalaries.push(num+5000);
}
const employeeSalaries = [20005, 40000, 32000, 14500, 344000];
const newEmployeeSalaries = [];

forEach(employeeSalaries,increasedSalary);

console.log(newEmployeeSalaries); 
