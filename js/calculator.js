function employee (level) {
  this.level = level
}


employee.prototype.calcsalary = function () {
  if (this.level === 'level1') {
    return this.baseSalary
  } else if (this.level ==='level2') {
    return (this.baseSalary * 1.10)
  } else if (this.level ==='level3') {
    return (this.baseSalary * 1.2)
  }
}


employee.prototype.transport = function () {
  if (this.level === 'level1') {
    return 0
  } else if (this.level === 'level2') {
    return (this.baseSalary * 0.1)
  } else if (this.level === 'level3') {
    return (this.baseSalary * 0.1)
  }
}


employee.prototype.Wardrope = function () {
  if (this.level === 'level1') {
    return 0
  } else if (this.level === 'level2') {
    return 0
  } else if (this.level === 'level3') {
    return (this.baseSalary * 0.1)
  }
}

function Interns (level) {
  employee.call(this, level)
  this.baseSalary = 10000
}


Interns.prototype = new employee()
function Associates (level) {
  employee.call(this, level)
  this.baseSalary = 20000
}


Associates.prototype = new employee()
function Managers (level) {
  employee.call(this, level)
  this.baseSalary = 30000
}


Managers.prototype = new employee()
function Executive (level) {
  employee.call(this, level)
  this.baseSalary = 40000
}


Executive.prototype = new employee()
function Director (level) {
  employee.call(this, level)
  this.baseSalary = 50000
}


Director.prototype = new employee()
function out () {
  var emptype = document.getElementById('employeeType').value
  var level = document.querySelector('input[name=experienceExp]:checked').value
  if (emptype === 'Interns') {
    var emp = new Interns(level)
  } else if (emptype === 'Associates') {
    var emp = new Associates(level)
  } else if (emptype === 'Managers') {
    var emp = new Managers(level)
  } else if (emptype === 'Executives') {
    var emp = new Executive(level)
  } else if (emptype === 'Directors') {
    var emp = new Director(level)
  }
  var trans = emp.transport()
  var sal = emp.calcsalary()
  var ward = emp.Wardrope()
  var Total = trans + sal + ward

  document.getElementById('sal').innerHTML = 'Basic salary is : #' + sal
  document.getElementById('trans').innerHTML = 'Transport allowance is : #' + trans
  document.getElementById('ward').innerHTML = 'Wardrope allowance is : #' + ward
  document.getElementById('Total').innerHTML = 'Total pay is : #' + Total
}
