$(document).ready(function() {
    sessionStorage.userName = "test";
    sessionStorage.pass = "password"

  
    
    $("#login").click(function()
    {
        $(".userName").text(sessionStorage.userName);
        $(".pass").text(sessionStorage.pass);
    });    
    
    
 
 

});