function employee(level){
  this.level=level
}
employee.prototype.calcsalary= function(){
	if (this.level== "level 1"){
	      return this.baseSalary
	} else if ( this.level=='level 2'){
		return (this.baseSalary*1.1);
	} else if ( this.level =='level 3'){
		return (this.baseSalary*1.2)
	}
}
function Interns (level){
	employee.call(level)
	this.baseSalary= 10000
}
Interns.prototype = new employee()
function Associates (level){
	employee.call(level)
	this.baseSalary=20000

}
Associates.prototype = new employee()
function Managers (level){
	employee.call(level)
	this.baseSalary=30000
}
Managers.prototype = new employee()
function Executive(level){
	employee.call(level)
	this.baseSalary=40000
}
Executive.prototype = new employee()
function Director(level){
	employee.call(level)
  this.baseSalary=50000
}
Director.prototype = new employee()
function out(){
//var epmtype= document.getElementById("employee").value
//var level= document.getElementById("level").value
alert(document.querySelector('input[name=experienceExp]:checked').value);
alert(document.querySelector('input[name=experienceExp]:checked').value);

var bola= new emptype(level)
var a = bola.calcsalary()
document.getElementById("change").innerHTML=a;
}