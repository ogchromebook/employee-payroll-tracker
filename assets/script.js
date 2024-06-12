// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector("#add-employees-btn");
// Created an array named employeeData to store employee data
// Created Seed Data with Chat GPT
let employeeData = [
  {
    "firstName": "John",
    "lastName": "Doe",
    "salary": "50000"
  },
  {
    "firstName": "Jane",
    "lastName": "Smith",
    "salary": "60000"
  },
  {
    "firstName": "Alice",
    "lastName": "Johnson",
    "salary": "55000"
  },
  {
    "firstName": "Bob",
    "lastName": "Brown",
    "salary": "70000"
  },
  {
    "firstName": "Charlie",
    "lastName": "Davis",
    "salary": "65000"
  },
  {
    "firstName": "Diana",
    "lastName": "Miller",
    "salary": "72000"
  },
  {
    "firstName": "Ethan",
    "lastName": "Wilson",
    "salary": "48000"
  },
];

// Collect employee data
const collectEmployees = function () {
  const firstName = prompt("Enter first name");
  console.log(firstName);
  const lastName = prompt("Enter last name");
  console.log(lastName);
  const salaryAmount = prompt("Enter salary");
  console.log(salaryAmount);

  // Created an object containing each variable for the employee
  const uniqueEmployee = {
    firstName: firstName,
    lastName: lastName,
    salary: salaryAmount,
  };
  console.log(uniqueEmployee);

  // Created a method to append newly collected data to the end of the array employeeData
  employeeData.push(uniqueEmployee);

  // Prompt to continue adding employees or not as well as posting the employee data inside of the chart
  const addAnotherEmployee = confirm("Add another employee?");
  console.log(addAnotherEmployee);
  if(addAnotherEmployee) {
    return collectEmployees()
    
  } else {
    displayEmployees(employeeData)
  }

  // TODO: Get user input to create and return an array of employee objects
  // Use an Array to see if the user is wanting to add more employees or not
  // Use boolean to see if we need to more add employees to the array
};

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary
  let sumSalary = 0
  for (let i = 0; i < employeesArray.length; i++) {
    const element = employeesArray[i];
    console.log(element.salary)
    sumSalary = sumSalary + parseInt(element.salary)
    console.log(sumSalary)
  }

  const averageSalary = sumSalary/employeesArray.length
  console.log('averageSalary; ', averageSalary)

  
};

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  const randomEmployee = employeesArray[Math.round(Math.random()*employeesArray.length-1)]
  console.log('randomEmployee ', randomEmployee)
  // TODO: Select and display a random employee
};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector("#employee-table");

  // Clear the employee table
  employeeTable.innerHTML = "";

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
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log("==============================");

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};
displayEmployees(employeeData)
// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener("click", trackEmployeeData);
