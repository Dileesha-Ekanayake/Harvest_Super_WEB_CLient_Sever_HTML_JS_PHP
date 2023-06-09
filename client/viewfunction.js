  // Entity Objects====================================================
  function Employee(name, nic, dob, mobile, email, gender, designation, statusemployee) {
    this.name, this.nic, this.dob, this.mobile, this.email, this.gender, this.designation, this.statusemployee;
}

// Controllre Logic==================================================
window.addEventListener("load", initialize);

// Global Variables==================================================

var employees;
var employee;
var oldemployee;
var genders;
var opdata;

var d = new Date();
// console.log(parseInt(d.getFullYear()));

var valid = "lightgreen";
var invalid = "pink";
var Initial = "white"
var Update = "khaki";
var selected = "skyblue";
var baseurl = "http://localhost/harvestsuper2/S2V2%20-%20My/server/";

// Intialize Functions==============================================
function initialize() {

    btnAdd.addEventListener("click", btnAddMC);
    btnSearch.addEventListener("click", btnSearchMC);
    btnSearchClear.addEventListener("click", btnSearchClearMC);
    btnClear.addEventListener("click", btnClearMC);
    btnUpdate.addEventListener("click", btnUpdateMC);
    btnDelete.addEventListener("click", btnDeleteMC);
    btnForm.addEventListener("click", btnFormMC);
    btnSearchForm.addEventListener("click", btnSearchFormMC);

    txtName.addEventListener("keyup", txtNameKU);
    txtNic.addEventListener("keyup", txtNicKU);
    txtMobile.addEventListener("keyup", txtMobileKU);
    txtEmail.addEventListener("keyup", txtEmailKU);
    txtDOB.addEventListener("keyup", txtDOBKU);
    cmbGender.addEventListener("change", cmbGenderCH);
    cmbDesignation.addEventListener("change", cmbDesignationCH);
    cmbStatusEmployee.addEventListener("change", cmbStatusEmployeeCH);

    genders = get(baseurl + "genderview.php");
    designations = get(baseurl + "designationview.php");
    statusemployees = get(baseurl + "statusemployeeview.php");
    employees = get(baseurl + "employeeview.php");

    loadForm();
    loadView();

}

function filterTable(table) {

    var name = txtNameSearch.value.toLowerCase();
    var dob = txtDobSearch.value.toLowerCase();
    var nic = txtNicSearch.value.toLowerCase();          
    var gender = txtGenderSearch.value.toLowerCase();
    var designation = txtDesignationSearch.value.toLowerCase();

    // console.log(Object.getPrototypeOf(tblMain.children[1]));

    var value = txtSearch.value.toLowerCase();

    // var tbl = document.getElementById("tblMain");
    // for ( var i = 3; row = tbl.rows[i]; i++ ) {
    
    for ( var i = 3; row = table.rows[i]; i++ ) {
        // row = tbl.rows[i];
     
        var rowname = row.children[1].innerHTML.toLowerCase();
        var rowdob = row.children[2].innerHTML.toLowerCase();
        var rownic = row.children[3].innerHTML.toLowerCase();
        var rowgender = row.children[4].innerHTML.toLowerCase();
        var rowdesignation = row.children[5].innerHTML.toLowerCase();

        var conditions = [
            rowname.includes(name),
            rowdob.includes(dob),
            rownic.includes(nic),
            rowgender.includes(gender),
            rowdesignation.includes(designation),

            rowname.includes(value) ||
            rowdob.includes(value) ||
            rownic.includes(value) ||
            rowgender.includes(value) ||
            rowdesignation.includes(value)
        ];

        if (!(conditions.includes(false))) {
            row.style.display='table-row';
        }else{
            row.style.display='none';
        }  
    }
}

function loadForm() {

    employee = new Employee(null, null, null, null, null, null, null, null);
    oldemployee = null;

    // txtID.value = "";
    txtName.value = "";
    txtNic.value = "";
    txtDOB.value = "";
    txtMobile.value = "";
    txtEmail.value = "";
    cmbGender.value = 0;
    cmbDesignation.value = 0;
    cmbStatusEmployee.value = 0;

    setStyle(Initial);

    clearCombo(cmbGender);
    clearCombo(cmbDesignation);
    clearCombo(cmbStatusEmployee);
    fillCombo(cmbGender, genders, "name");
    fillCombo(cmbDesignation, designations, "name");
    fillCombo(cmbStatusEmployee, statusemployees, "name");

    disabledButtons(false, true, true, false, false, false, false);

}

function setStyle(color) {

    // txtID.style.backgroundColor = color;
    txtName.style.backgroundColor = color;
    txtDOB.style.backgroundColor = color;
    txtNic.style.backgroundColor = color;
    txtMobile.style.backgroundColor = color;
    txtEmail.style.backgroundColor = color;
    cmbGender.style.backgroundColor = color;
    cmbDesignation.style.backgroundColor = color;
    cmbStatusEmployee.style.backgroundColor = color;

}

function disabledButtons(add, upd, dele, srh, src, frm ,srcfrm) {
    if (add) btnAdd.setAttribute("disabled", "disabled");
    else btnAdd.removeAttribute("disabled");

    if (upd) btnUpdate.setAttribute("disabled", "disabled");
    else btnUpdate.removeAttribute("disabled");

    if (dele) btnDelete.setAttribute("disabled", "disabled");
    else btnDelete.removeAttribute("disabled");

    if (srh) btnSearch.setAttribute("disabled", "disabled");
    else btnSearch.removeAttribute("disabled");

    if (src) btnSearchClear.setAttribute("disabled", "disabled");
    else btnSearchClear.removeAttribute("disabled");

    if (frm) btnForm.setAttribute("disabled", "disabled");
    else btnForm.removeAttribute("disabled");

    if (srcfrm) btnSearchForm.setAttribute("disabled", "disabled");
    else btnSearchForm.removeAttribute("disabled");

}

function loadView() {
    txtSearchName.value = "";
    cmbSearchGender.value = 0;
    cmbSearchDesignation.value = 0;
    // oldemployee = employees;
    clearCombo(cmbSearchGender);
    clearCombo(cmbSearchDesignation);
    fillCombo(cmbSearchGender, genders, "name");
    fillCombo(cmbSearchDesignation, designations, "name");
    fillTable(tblMain.children[1], employees, ["id","name","dob","nic", function (e) { return e.gender.name }, function (e) { return e.designation.name}], fillForm);

}

// Validation and Binding Functions=====================================
function txtNameKU() {

    var name = txtName.value;
    if (name.match("^[A-Z][a-z]*$")) {
        txtName.style.backgroundColor = valid;
        employee.name = name;
        if (oldemployee != null && employee.name != oldemployee.name) {
            txtName.style.backgroundColor = Update;
        }
        else {
            txtName.style.backgroundColor = valid;
        }
    }
    else {
        txtName.style.backgroundColor = invalid;
        employee.name = null;
    }

}

function txtNicKU() {
    var nic = txtNic.value;
    if (nic.match("^([0-9]{9}[x|X|v|V]|[0-9]{12})$")) {
        employee.nic = nic;
        txtNic.style.backgroundColor = valid;
        if (oldemployee != null && oldemployee.nic != employee.nic)
            txtNic.style.backgroundColor = Update;
        else
            txtNic.style.backgroundColor = valid;
    } else {
        employee.nic = null;
        txtNic.style.backgroundColor = invalid;
    }
}

function txtMobileKU() {
    var mobile = txtMobile.value;
    if (mobile.match("^0[0-9]{9}$")) {
        employee.mobile = mobile;
        txtMobile.style.backgroundColor = valid;
        if (oldemployee != null && oldemployee.mobile != employee.mobile)
        txtMobile.style.backgroundColor = Update;
        else
        txtMobile.style.backgroundColor = valid;
    } else {
        employee.mobile = null;
        txtMobile.style.backgroundColor = invalid;
    }
}

function txtEmailKU() {
    var email = txtEmail.value;
    if (email.match("^[a-z]*@[a-z]*.[a-z]*$")) {
        employee.email = email;
        txtEmail.style.backgroundColor = valid;
        if (oldemployee != null && oldemployee.email != employee.email)
        txtEmail.style.backgroundColor = Update;
        else
        txtEmail.style.backgroundColor = valid;
    } else {
        employee.email = null;
        txtEmail.style.backgroundColor = invalid;
    }
}

function txtDOBKU() {

    var dob = txtDOB.value;
    var c = dob.substr(0,4);
    var year = parseInt(d.getFullYear());
    // console.log(year);
    // console.log(dob.substr(0,4));
    // console.log((year - c));
    var yer = (year - c)
    // console.log(yer);
    if ( yer >= 18) {
        employee.dob = dob;
        console.log(employee.dob);
        txtDOB.style.backgroundColor = valid;
        if (oldemployee != null && oldemployee.dob != employee.dob)
        txtDOB.style.backgroundColor = Update;
        else
        txtDOB.style.backgroundColor = valid;
    } else {
        employee.dob = null;
        txtDOB.style.backgroundColor = invalid;
    }
}


function cmbGenderCH() {
    var gendervalue = cmbGender.value;
    if (gendervalue != 0) {
        employee.gender = JSON.parse(gendervalue);
        employee.gender = employee.gender;
        cmbGender.style.backgroundColor = valid;
        if (oldemployee != null && oldemployee.gender.name != employee.gender.name)
            cmbGender.style.backgroundColor = Update;
        else
            cmbGender.style.backgroundColor = valid;
    }

}

function cmbDesignationCH() {
    var designationvalue = cmbDesignation.value;
    if (designationvalue != 0) {
        employee.designation = JSON.parse(designationvalue);
        employee.designation = employee.designation;
        cmbDesignation.style.backgroundColor = valid;
        if (oldemployee != null && oldemployee.designation.name != employee.designation.name)
            cmbDesignation.style.backgroundColor = Update;
        else
            cmbDesignation.style.backgroundColor = valid;
    }

}

function cmbStatusEmployeeCH() {
    var employeestatusvalue = cmbStatusEmployee.value;
    if (employeestatusvalue != 0) {
        employee.statusemployee = JSON.parse(employeestatusvalue);
        employee.statusemployee = employee.statusemployee;
        cmbStatusEmployee.style.backgroundColor = valid;
        if (oldemployee != null && oldemployee.statusemployee.name != employee.statusemployee.name)
            cmbStatusEmployee.style.backgroundColor = Update;
        else
            cmbStatusEmployee.style.backgroundColor = valid;
    }

}

// Form Operation Function==============================================
function btnAddMC() {

    var errors = getErrors();
    if (errors != "") { window.alert("You have following errors,\n\n" + errors); }
    else {
        var confirm = window.confirm("Are you sure to Add\n\n" + employee.name + "\n" + employee.dob + "\n" + employee.nic + "\n" + employee.mobile + "\n" + employee.email + "\n" + employee.gender.name + "\n" + employee.designation.name + "\n" + employee.statusemployee.name);
        if (confirm == true) {
            var qry = "employee=" + JSON.stringify(employee);
            var result = post(baseurl + "employee_add.php", qry);
            if (result == 1) {
                window.alert("Successfully Saved");
                loadForm();
                employees = get(baseurl + "employeeview.php");
                loadView();
            }
            else window.alert("Failed to Saved As \n\n" + result);
        }
    }

}

// Search Function==============================================
function btnSearchMC() {

    var name = txtSearchName.value;
    var qry = "";

    if (name != "") qry = "name=" + name;
    if (cmbSearchGender.value != 0) qry = qry + "&gender=" + cmbSearchGender.value;
    if (cmbSearchDesignation.value != 0) qry = qry + "&designation=" + cmbSearchDesignation.value;

    employees = get(baseurl + "employeeview.php?" + qry);
    fillTable(tblMain.children[1], employees, ["id","name","dob","nic", function (e) { return e.gender.name }, function (e) { return e.designation.name}], fillForm);

}

function btnSearchClearMC() {

    employees = get(baseurl + "employeeview.php");
    loadView();

}

function btnClearMC() {
    var confirm = window.confirm("Are you sure to Clear the Form?");
    if (confirm == true) {
        loadForm();
        clearTableSelection();
    }

}

function btnUpdateMC() {

    var errors = getErrors();
    if (errors != "") {
        window.alert("Please Enter Correct Details");
    }
    else {
        var updates = getUpdates();
        if (updates == "") {
            window.alert("Nothing to Update")
        }
        else {
            var confirm = window.confirm("Are you sure to update \n\n" + updates);
            if (confirm == true) {
                var qry = "employee=" + JSON.stringify(employee);
                var result = post(baseurl + "employee_update.php", qry);
                if (result == 1) {
                    window.alert("Successfully Update");
                    employees = get(baseurl + "employeeview.php");
                    btnSearchMC();
                    loadForm();
                }
                else window.alert("Failed to Update As \n\n" + result);
            }
        }

    }
}

function btnDeleteMC() {
    var confirm = window.confirm("Are You Sure to Delete Following Employee \n\n" + employee.name);
    if (confirm == true) {
        var qry = "employee=" + JSON.stringify(employee);
        var result = post(baseurl + "employee_delete.php", qry);
        if (result == 1) {
            window.alert("Successfully Delete");
            loadForm();
            employees = get(baseurl + "employeeview.php");
            loadView();
        }
        else window.alert("Failed to Delete As \n\n" + result);
    }
}

function btnFormMC() {

    d1.style.display = "block";
    d2.style.display = "none";
    d1.style.display = "inline-table";
    d3.style.display = "inline-table";

}

function btnSearchFormMC(){
    d1.style.display = "none";
    d2.style.display = "block";
    d2.style.display = "inline-table";
    d3.style.display = "inline-table";
}

function getUpdates() {

    var updates = "";

    if (oldemployee != null) {

        if (employee.name != oldemployee.name) updates = updates + "Name Updated\n";
        if (employee.dob != oldemployee.dob) updates = updates + "DOB Updated\n";
        if (employee.nic != oldemployee.nic) updates = updates + "NIC Updated\n";
        if (employee.mobile != oldemployee.mobile) updates = updates + "Mobile Updated\n";
        if (employee.email != oldemployee.email) updates = updates + "Email Updated\n";
        if (employee.gender.name != oldemployee.gender.name) updates = updates + "Gender Updated\n";
        if (employee.designation.name != oldemployee.designation.name) updates = updates + "Designation Updated\n";
        if (employee.statusemployee.name != oldemployee.statusemployee.name) updates = updates + "Status Updated\n";
    }
    return updates;
}

function getErrors() {

    var errors = "";

    if (employee.name == null) errors = errors + "Name Invalid \n";
    if (employee.dob == 0) errors = errors + "DOB Invalid \n";
    if (employee.nic == null) errors = errors + "NIC Invalid \n";
    if (employee.mobile == null) errors = errors + "Mobile Invalid \n";
    if (employee.email == null) errors = errors + "Email Invalid \n";
    if (employee.gender == null) errors = errors + "Gender Not Selected\n";
    if (employee.designation == null) errors = errors + "Designation Not Selected\n";
    if (employee.statusemployee == null) errors = errors + "Status Not Selected\n";

    return errors;
}

function clearTableSelection() {
    var allrows = tblMain.children[1].children;
    for (r = 0; r < allrows.length; r++) {
        allrows[r].style.backgroundColor = Initial;
    }
}

function fillForm(row) {

    var confirm = true;
    var updates = getUpdates();
    if (updates != "")
        confirm = window.confirm("Are you sure Discard Following Updates! \n\n" + updates);
    if (confirm) {
        clearTableSelection();
        row.style.backgroundColor = selected;
        oldemployee = employees[row.getAttribute("data-id")];
        employee = JSON.parse(JSON.stringify(oldemployee));
        // txtID.value = employee.id;
        txtName.value = employee.name;
        txtNic.value = employee.nic;
        txtMobile.value = employee.mobile;
        txtEmail.value = employee.email;
        txtEmail.value = employee.email;
        txtDOB.value = employee.dob;
        cmbGender.value = JSON.stringify(employee.gender);
        cmbDesignation.value = JSON.stringify(employee.designation);
        cmbStatusEmployee.value = JSON.stringify(employee.statusemployee);
        setStyle(valid);
        disabledButtons(true, false, false, true, true, false, false);
    } else {
        window.alert("You Have Updates");
    }
}


// Genaralized Functions==============================================
function get(url) {

    var ajax = new XMLHttpRequest();
    ajax.open("GET", url, false);
    ajax.send();
    var objects = JSON.parse(ajax.responseText);
    return objects;

}

function post(url, data) {

    var ajax = new XMLHttpRequest();
    ajax.open("POST", url, false);
    ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    ajax.send(data);
    console.log(ajax.responseText + "(" + ajax.status + ")");
    sereverResponse.innerHTML = "(" + ajax.status + ")</br>" + ajax.responseText;
    return (ajax.responseText);

}

function fillCombo(combo, data, prop) {
    for (i in data) {
        var op = document.createElement("option");
        op.setAttribute("value", JSON.stringify(data[i]));
        opdata = document.createTextNode(data[i][prop]);
        op.appendChild(opdata);
        combo.appendChild(op);
    }

}

// function fillCombo3() {
//     for (let i = 0; i < genders.length; i++) {
//         const gender = genders[i];
//         var gen = JSON.stringify(gender);
        
//     }
// }



function clearCombo(combo) {

    for (i = 1; i < combo.children.length;) {
        combo.removeChild(combo.children[i]);
    }

}

function fillTable(parent, data, props, fun) {

    parent.innerHTML = "";
    for (i in data) {
        var tr = document.createElement("tr");
        tr.setAttribute("data-id", i);

        if(oldemployee != null && data[i].id == oldemployee.id)
        tr.style.backgroundColor = selected;

        for (j in props) {
            if (typeof props[j] == 'function') {
                trdata1 = document.createTextNode(props[j](data[i]));
            }
            else {
                var trdata1 = document.createTextNode(data[i][props[j]]);
            }
            var td1 = document.createElement("td");
            td1.appendChild(trdata1);
            tr.appendChild(td1);
        }

        var btnModify = document.createElement("button");
        btnModify.innerHTML = "Modify";
        btnModify.setAttribute("color", "green");
        btnModify.addEventListener("click", function () { fillForm(this.parentNode.parentNode); });
        var tdBtn = document.createElement("td");
        tdBtn.appendChild(btnModify);
        tr.appendChild(tdBtn);

        parent.appendChild(tr);

    }

}