$(document).ready(function() {
    sessionStorage.user = "test";
    sessionStorage.pass = "password"

  
    
    $("#login").click(function()
    {
        if (user === "test" && pass === "password") {
            alert("välkommen in")
        } else {
            alert("Skriv in rätt lösenord");
        }
    });    
    
    
 
 

});