// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
// Created an array named employeeData to store employee data
let employeeData = []

// Collect employee data
const collectEmployees = function() {
const firstName = prompt("Enter first name")
console.log(firstName)
const lastName = prompt("Enter last name")
console.log(lastName)
const salaryAmount = prompt("Enter salary")
console.log(salaryAmount)


// Created an object containing each variable for the employee
const uniqueEmployee = {
  firstName:firstName,
  lastName:lastName,
  salaryAmount:salaryAmount
}
console.log(uniqueEmployee)

// Created a method to append newly collected data to the end of the array employeeData
employeeData.push(uniqueEmployee)

const addAnotherEmployee = confirm("Add another employee?")
console.log(addAnotherEmployee)
  // TODO: Get user input to create and return an array of employee objects
  // Use an Array to see if the user is wanting to add more employees or not
  // Use boolean to see if we need to more add employees to the array
  
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
