$(document).ready(function() {  // Här startar jquery funktionen

    updateView(); // Här hämtar jag min updateView funktion, eftersom man inte loggt in ännu.

    $(".login").click(function() // Här skapar jag min login funktion som är synkad med  mitt formulär
    {

        var user= $('.user').val(); // Här skapar vi våran user och pass variablar, och ger dom ett värde.
        var pass = $('.pass').val(); // Detta är det samma som att säga "getbyID" i javascript

        if (user === "test" && pass === "password") { // Här skriver vi ut ifall man skriver in rätt lösen,
            alert("välkommen in");                    
            sessionStorage.username = user;           // här skapar vi våran Sessionstorage med det som skrivs in i USER och sparar infon
            sessionStorage.loginSuccess = 1;          // 

        } else {
            alert("Skriv in rätt lösenord");          // Hit kommer man om man misslyckas, 
            sessionStorage.loginSuccess = 0;          // och det blir 0 eftersom det inte är sant
        }
        updateView(); // Vilket då leder till att man får en updaterad vy
    });

    $(".logout").click(function()       // Här är min logga ut knappsfunktion
    {
        sessionStorage.username = "";   
        sessionStorage.loginSuccess = 2;
        updateView();
    });
    
});


/* Här börjar min funktion som avgör vilken vy som visas på sidan */

function updateView() {                 

    if(sessionStorage.loginSuccess == 0) {
        // Fel lösenord
        $('#start').hide();         // Här så gömmer vi start menyn eftersom man misslyckas.
        $('#forgot-password').show(); // Och visar då istället glömt bort lösen
        $('#logged-in').hide();       // Vilket då betyder att vi gömmer de andra elementen
        $('#logout').hide();
        $('#login').show();
    } else if(sessionStorage.loginSuccess == 1) {
        // Inloggad
        $('#start').hide();
        $('#forgot-password').hide();
        $('#logged-in h2').append("Välkommen " + sessionStorage.username + ", här är din todo-lista:");
        $('#logged-in').show();
        $('#logout').show();
        $('#login').hide();
    } else {
        // Har inte ens försökt logga in
        $('#start').show();
        $('#forgot-password').hide();
        $('#logged-in').hide();
        $('#logout').hide();
        $('#login').show();
    }

}

