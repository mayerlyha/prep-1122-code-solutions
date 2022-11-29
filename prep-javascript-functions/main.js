function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

var sum = addTwoNumbers(2, 2);
console.log('addTwoNumbersResult', sum);

function convertHoursToMinutes(hours) {
  var result = hours * 60;
  return result;
}

var minutes = convertHoursToMinutes(2);
console.log('minutes:', minutes);

function getGreeting(name) {
  var result = 'Hello ' + name + '!';
  return result;
}

var greeting = getGreeting('World');
console.log('greeting:', greeting);

function addAndMultiplyBy5(num1, num2) {
  var result = (num1 + num2) * 5;
  return result;
}

var operacion = addAndMultiplyBy5(10, 5);
console.log('operacion:', operacion);

function multiplyAndDivideBy5(num1, num2) {
  var result = (num1 * num2) / 5;
  return result;
}

var multiplicacion = multiplyAndDivideBy5(35, 10);
console.log('multiplicacion:', multiplicacion);

function substractTwoNumbers(num1, num2) {
  var result = num1 - num2;
  return result;
}

var resta = substractTwoNumbers(22, 7);
console.log('resta:', resta);

function getCircleCircumference(radius) {
  var result = (2 * Math.PI) * radius;
  return result;
}

var circunferencia = getCircleCircumference(5);
console.log('circunferencia:', circunferencia);

function getFullName(firstName, lastName) {
  var result = firstName + ' ' + lastName;
  return result;
}

var fullName = getFullName('Juan', 'Ramirez');
console.log('fullName:', fullName);

function cube(number) {
  var result = number * number * number;
  return result;
}

var cubo = cube(5);
console.log('cubo:', cubo);
