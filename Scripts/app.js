
//Filename : app.js
//@author Aayushi Shah
//@date July 08,2016
//StudentID : 300874124
//website : http://comp125-s2016-300874124-lab4.azurewebsites.net/
//@description : This file is the main javascript of this file.
//*/
// IIFE = Immediately Invoked Function Expression
(function () {

    // Code goes here
    "use strict";

        // Event listner with inline anonymous event handler function
        LoginPage.addEventListener("submit", function (event) {
        event.preventDefault();

        formInputOnConsole();

        LoginPage.reset();
        })




    // formInputOnConsole function 
    function formInputOnConsole() {

        //creating user object
        function User(username, password)
        {
            this.userName = username;
            this.Password = password;
        }

        var user = new User(username.value, password.value)

        console.log(user);
 
    }



})()