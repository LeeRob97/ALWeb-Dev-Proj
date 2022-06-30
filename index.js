function User(username, firstName, lastName) {
    this.id = Math.floor(Math.random() * 100);
    this.username = username;
    this.firstName = firstName;
    this.lastName = lastName;
}

window.addEventListener("load", function () {

    document.getElementById("submit").addEventListener("click", function() {
        // Triggered when the user clicks submit
    });
})