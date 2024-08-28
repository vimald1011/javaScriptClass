import arrayEmployees from "./18-filterMethod.mjs"
console.log(`===== 1. Sort the ‘arrayEmployees’ in descending order of Employee Id’s and log employee details → Id, Name, Department=====`);
const newEmployeeArray = arrayEmployees.sort((a, b) => a.emp_id - b.emp_id);
newEmployeeArray.forEach((element) => {
    console.log(`Employee details: Name- ${element.emp_name}, ID- ${element.emp_id} and Department- ${element.emp_dept}`);
});
console.log(`===== 2. Sort the ‘arrayEmployees’ in ascending order of employee department & log Id, dept, & Company =====`);
const empDepartmentArray = arrayEmployees.sort((a, b) => a.emp_dept > b.emp_dept ? 1 : -1);
empDepartmentArray.forEach((element) => {
    console.log(`Employee details: ID- ${element.emp_id} and Department- ${element.emp_dept} and Company- ${element.emp_company}`);
});
console.log(`===== 3. Sort the employee array in descending order of employee salary and log Name, Salary & Company =====`);
const empSalaryArray = arrayEmployees.sort((a, b) => a.emp_salary - b.emp_salary).reverse();
empSalaryArray.forEach((element) => console.log(`Employee details: Name- ${element.emp_name}, Salary- ${element.emp_salary} and Company- ${element.emp_company}`));

