/* eslint-disable no-console */
// base class
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// add method to base class prototype
Person.prototype.greet = function() {
  return this.name;
};

// derieved class
function Employee(name, age, title, salary) {
  // calling the base class constructor
  Person.call(this, name, age);
  this.title = title;
  this.salary = salary;
}

// set the Employee prototype from Person prototype
Employee.prototype = Object.create(Person.prototype);
// this is to preserve the original constructor of Employee function
Employee.prototype.constructor = Employee;

Employee.prototype.addBonus = function() {
  this.salary += 1000;
};

var me = new Employee('Hridayesh', 22, 'Software Engineer', 2500);
