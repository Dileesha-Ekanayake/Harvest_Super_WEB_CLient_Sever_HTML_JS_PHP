window.addEventListener("load", loading);


function loading() {

    f1();
    loadGender();
    loadDesignation();
    loadStatusEmployee();

}

function loadStatusEmployee(){

    var httpStatusEmployee = new XMLHttpRequest();
    httpStatusEmployee.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var jasonDataStatusEmployee = this.responseText;
            funStatusEmployee(jasonDataStatusEmployee);

        }
    }
    httpStatusEmployee.open("GET", "../server/statusemployeeDao.php", true);
    httpStatusEmployee.send()

}

function funStatusEmployee(jasonDataStatusEmployee) {

    var rows = JSON.parse(jasonDataStatusEmployee);

    for (let index = 0; index < rows.length; index++) {
        const statusemployee = rows[index];

        var opStatusEmployee = document.createElement("option");
        opStatusEmployee.innerHTML = statusemployee['statusemployee'];
        opStatusEmployee.value = statusemployee['id'];
        cmbStatusEmployee.appendChild(opStatusEmployee);
    }
}


function loadDesignation(){

    var httpDesignation = new XMLHttpRequest();
    httpDesignation.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var jasonDataDesignation = this.responseText;
            funDesignation(jasonDataDesignation);

        }
    }
    httpDesignation.open("GET", "../server/designationDao.php", true);
    httpDesignation.send()

}

function funDesignation(jasonDataDesignation) {

    var rows = JSON.parse(jasonDataDesignation);

    for (let index = 0; index < rows.length; index++) {
        const designation = rows[index];

        var opDesignation = document.createElement("option");
        opDesignation.innerHTML = designation['designation'];
        opDesignation.value = designation['id'];
        cmbDesignation.appendChild(opDesignation);
    }
}

function loadGender() {

    var httpGender = new XMLHttpRequest();
    httpGender.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var jasonDataGender = this.responseText;
            funGender(jasonDataGender);

        }
    }
    httpGender.open("GET", "../server/genderDao.php", true);
    httpGender.send()
}

function funGender(jasonDataGender) {

    var rows = JSON.parse(jasonDataGender);

    for (let index = 0; index < rows.length; index++) {
        const gender = rows[index];

        var opGender = document.createElement("option");
        opGender.innerHTML = gender['gender'];
        opGender.value = gender['id'];
        cmbGender.appendChild(opGender);
    }
}

function f1() {
    var http = new XMLHttpRequest();
    http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var jasonData = this.responseText;
            f2(jasonData);
        }
    }
    http.open("GET", "../server/employeeDao.php", true);
    http.send();
}

function f2(jasonData) {
    var rows = JSON.parse(jasonData);
    for (let index = 0; index < rows.length; index++) {
        const employee = rows[index];

        var tr = document.createElement("tr");

        var idTd = document.createElement("td");
        idTd.innerHTML = employee['id'];
        tr.appendChild(idTd);

        var nameTd = document.createElement("td");
        nameTd.innerHTML = employee['name'];
        tr.appendChild(nameTd);

        var dobTd = document.createElement("td");
        dobTd.innerHTML = employee['dob'];
        tr.appendChild(dobTd);

        var nicTd = document.createElement("td");
        nicTd.innerHTML = employee['nic'];
        tr.appendChild(nicTd);

        var genderTd = document.createElement("td");
        genderTd.innerHTML = employee['gender'];
        tr.appendChild(genderTd);

        var designationTd = document.createElement("td");
        designationTd.innerHTML = employee['designation'];
        tr.appendChild(designationTd);

        var tdModify = document.createElement("td");
        var btnModify = document.createElement("button");
        btnModify.setAttribute("class", "btn btn-danger");
        btnModify.innerHTML = "Modify";
        btnModify.addEventListener("click", function () { employeeModify(employee['id']) });

        tdModify.appendChild(btnModify);
        tr.appendChild(tdModify);

        display.appendChild(tr);
    }

}