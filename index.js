/*function User(username, firstName, lastName) {
    this.id = Math.floor(Math.random() * 100);
    this.userName = userName;
    this.firstName = firstName;
    this.lastName = lastName;
}
*/

//grabbing the filled out inputs
function readFromData(){
	var fromData = {}; //declaring an object
	fromData["ID"] = Math.floor(Math.random() * 100);
	fromData["uName"] = document.getElementById("userName").value;
	fromData["fName"] = document.getElementById("firstName").value;
	fromData["lName"] = document.getElementById("lastName").value;
	return fromData;	
}


function insertNewRecord(data){
	var table = document.getElementById("accountList").getElementsByTagName('tbody')[0];
	var newRow = table.insertRow(table.length);
	cell0 = newRow.insertCell(0);
	cell0.innerHTML = data.ID;
	cell1 = newRow.insertCell(1);
	cell1.innerHTML = data.uName;
	cell2 = newRow.insertCell(2);
	cell2.innerHTML = data.fName;
	cell3 = newRow.insertCell(3);
	cell3.innerHTML = data.lName;
	cell4 = newRow.insertCell(4);
	cell4.innerHTML = '<button onclick="onDelete(this)">Delete</button>';
}

function reset(){
	document.getElementById("userName").value = "";
	document.getElementById("firstName").value = "";
	document.getElementById("lastName").value = "";
}

function onDelete(td){
	row = td.parentElement.parentElement; // 
	document.getElementById("accountList").deleteRow(row.rowIndex);
}


window.addEventListener("load", function () {

    document.getElementById("submit").addEventListener("click", function() {
        // Triggered when the user clicks submit
		
		// The variables of each input
		var uName = document.getElementById("userName").value;
		var fName = document.getElementById("firstName").value;
		var lName = document.getElementById("lastName").value;
		
		if (uName.length == 0 || fName.length == 0 || lName.length == 0){
			document.getElementById("error").innerHTML = "Please complete form";
		}
		else{
			//To take out the error if there was one prior
			document.getElementById("error").innerHTML = "";
			var formData = readFromData();
			insertNewRecord(formData);
			reset();
		}
		
		
		
    });
})