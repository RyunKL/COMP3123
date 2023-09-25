var http = require("http");
//TODO - Use Employee Module here
const employeeModule = require('./package.json');
console.log("Lab 03 -  NodeJs");

//TODO - Fix any errors you found working with lab exercise

//Define Server Port
const port = process.env.PORT || 8081

//Create Web Server using CORE API
const server = http.createServer((req, res) => {
    if (req.method !== 'GET') {
        res.end(`{"error": "${http.STATUS_CODES[405]}"}`)
    } else {
        if (req.url === '/') {
            //TODO - Display message "<h1>Welcome to Lab Exercise 03</h1>"
            console.log('<h1>Welcome to Lab Exercise 03</h1>');
        }

        if (req.url === '/employee') {
            //TODO - Display all details for employees in JSON format
            const AllEmployees = employeeModule.getAllEmployees();
            const AllEmployeesJSON = JSON.stringify(AllEmployees, null, 2);
            console.log('All Employees:\n', allEmployeesJSON);
        }

        if (req.url === '/employee/names') {
            //TODO - Display only all employees {first name + lastname} in Ascending order in JSON Array
            //e.g. [ "Ash Lee", "Mac Mohan", "Pritesh Patel"]
            const AllEmployees = employeeModule.getAllEmployees();
            const fullNames = AllEmployees.map(employee => ({
                firstName: employee.firstName,
                lastName: employee.lastName
            }))
            .sort((a, b) => {
                const lastNameComparison = a.lastName.localeCompare(b.lastName);
                if (lastNameComparison != 0) {
                  return lastNameComparison;
                }
                return a.firstName.localeCompare(b.firstName);
              });
            
            // Display sorted employee names in JSON format
            const fullNamesJSON = JSON.stringify(fullNames, null, 2);
            console.log('Sorted Employee Names:\n', fullNamesJSON);

        }

        if (req.url === '/employee/totalsalary') {
            //TODO - Display Sum of all employees salary in given JSON format 
            //e.g. { "total_salary" : 100 }
            const AllEmployees = employeeModule.getAllEmployees();
            const totalSalary = AllEmployees.reduce((sum, employee) => sum + employee.Salary, 0);
            const totalSalaryJSON = { totalSalary };
            const totalSalaryJSONString = JSON.stringify(totalSalaryJSON, null, 2);
            console.log('Total Salary:\n', totalSalaryJSONString);  
    }
    res.end(`{"error": "${http.STATUS_CODES[404]}"}`)
    }
})

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})