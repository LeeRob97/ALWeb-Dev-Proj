function User(username, firstName, lastName) {
    this.id = Math.floor(Math.random() * 100);
    this.userName = userName;
    this.firstName = firstName;
    this.lastName = lastName;
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
		}
		
    });
})