class Employees {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}

const emp_anil = new Employees("22", "Anil", "IT", "50000", "TCS");
const emp_radha = new Employees("33", "Radha", "HR", "74000", "Wipro");
const emp_rishi = new Employees("55", "Rishi", "Finance", "47000", "TCS");
const emp_sonali = new Employees("66", "Sonali", "Finance", "45000", "Infy");
const emp_monika = new Employees("77", "Monika", "IT", "40000", "Wipro");
const emp_viny = new Employees("88", "Vinayak", "IT", "75000", "TCS");
const emp_mahi = new Employees("99", "Mahesh", "HR", "85000", "Infy");

const arrayEmployees = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];

console.log(`Filter out all the IT department employees and list their names in array `);
// console.log(`Show the IT Department employee names`);
const arrayTCSEmployees = arrayEmployees.filter((employee) => {
    return employee.emp_dept == "IT";
}).map((employee) => {
    return employee.emp_name;
});
console.log(arrayTCSEmployees);

export default arrayEmployees;