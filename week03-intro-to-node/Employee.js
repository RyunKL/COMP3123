//TODO - Create Employee Module here and export to use in index.js

let employees = [
    {id: 1, firstName: "Pritesh", lastName: "Patel", email: "pritesh@gmail.com", Salary:5000},
    {id: 2, firstName: "Krish", lastName: "Lee", email: "krish@gmail.com", Salary:4000},
    {id: 3, firstName: "Racks", lastName: "Jacson", email: "racks@gmail.com", Salary:5500},
    {id: 4, firstName: "Denial", lastName: "Roast", email: "denial@gmail.com", Salary:9000}
];
//Function to add an employee
function getAllEmployees(){
    return employees;
}
//Function to search employee by ID
function getEmployeeById(id){
    return employees.find(employee => employee.id == id);
}
//Function to add employee
function addEmployee(employee){
    employees.push(employee);
}
//Function to delete employee
function deleteEmployee(id){
    let index = employees.findIndex(employee => employee.id == id);
    if(index != -1){
        employees.splice(index, 1);
    }
}
//export all functions for use
module.exports = {
    getAllEmployees, addEmployee, getEmployeeById, deleteEmployee
};


