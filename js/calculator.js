function Employee(level){
	this.baseSalary = 10000;
	this.level = level;
}
Employee.prototype.calcsalary= function(){
	if (this.level== "level1"){
		console.log(this.baseSalary);
	    return this.baseSalary
	} else if ( this.level=='level2'){
		return (this.baseSalary * 1.1);
	} else if ( this.level =='level3'){
		return (this.baseSalary * 1.2)
	}
} 

function createEmployee (type, level) {
	var employee;
	switch (type) {
		case "interns":
			employee = new Interns(level);
			console.log(employee.level);
			break;
		case "associates":
			employee = new Associates(level);
			break;
		case "managers":
			employee = new Managers(level);
			break;
		case "directors":
			employee = new Director(level);
			console.log(employee);
			break;
		case "executives":
			employee = new Executive(level);
			break;
		default:
			employee = new employee(level);
			console.log(employee);
	}
	return employee;
}
function Interns (level) {
	var employee = new Employee(level);
	employee.baseSalary = 10000;
	return employee;
}
// Interns.prototype = new employee()
console.log(Interns.prototype);
function Associates (level){
	var employee = new Employee(level);
	employee.baseSalary = 20000;
	return employee;

}
// Associates.prototype = new employee()
function Managers (level){
	var employee = new Employee(level);
	employee.baseSalary = 30000;
	return employee;
}
// Managers.prototype = new employee()
function Executive(level){
	var employee = new Employee(level);
	employee.baseSalary = 40000;
	return employee;
}
// Executive.prototype = new employee()
function Director(level){
	var employee = new Employee(level);
	employee.baseSalary = 50000;
	return employee;
  }
// Director.prototype = new employee()
function out(e){
	if(e.preventDefault) e.preventDefault();
	//var epmtype= document.getElementById("employee").value
	//var level= document.getElementById("level").value
	// console.log('got here');
	var level = document.querySelector('input[name=experienceExp]:checked').value;
	var e = document.getElementById('employeeType');
	var employeeType = e.options[e.selectedIndex].value;
	// alert(document.querySelector('input[name=experienceExp]:checked').value);
	// alert(document.querySelector('input[name=experienceExp]:checked').value);

	var bola = new createEmployee(employeeType, level)
	var a = bola.calcsalary()
	document.getElementById("change").innerHTML = a;
}

var form = document.getElementById('SalaryForm');
if (form.attachEvent) {
    form.attachEvent("submit", out);
} else {
    form.addEventListener("submit", out);
}