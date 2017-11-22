$(document).ready(function(){
    console.log("fungerar?");

    
    //sätt globala variabler
    var ourUser = "test"
    var ourPassword = "password"

    if (sessionStorage.ourUser != null) {
            showCorrectLogIn();
    } else {
        showHelloForm();
    }



   
   //funktion för att logga in med knapp
    $(".logInButton").click(function(){

        if (ourUser == $(".userName").val() && ourPassword == $(".passwordUser").val()) 
        
        {
            showCorrectLogIn();
            
   
        } else {
                       
            // Dölj helloForm, visa forgotLogin
            showForgotLogin();
            }
            
        });

        
        //funktion för att logga ut med knapp
            $(".logOutButton").click(function(){

                //dölj logut, visa log in och welcomeBack
                showWelcomeBack();
            });


            //visa datum - jag är så nöjd att jag vill dricka sprit
            var date = new Date;
            console.log(date);
            /* $(".todaysDate").append(date); */
            $(".todaysDate").append(date.getFullYear(), "-", date.getMonth(), "-", date.getDate());

            //funktion för att visa startsida
        function showHelloForm() {
            $(".helloForm").show();
            $(".forgotLogin").hide();
            $(".correctLogin").hide();
            $(".logOut").hide();
            $(".welcomeBack").hide();
            };
            
            //funktion för att visa rätt inloggning
            function showCorrectLogIn() {
                $(".helloForm").hide();
                $(".forgotLogin").hide();
                $(".correctLogin").show();
                $(".logInForm").hide();
                $(".logOut").show();
                $(".welcomeBack").hide();
                sessionStorage.isLoggedIn = $(".userName").val();
                };

        //funktion för att visa glömt inloggning
        function showForgotLogin() {
            $(".helloForm").hide();
            $(".forgotLogin").show();
            $(".correctLogin").hide();
            $(".welcomeBack").hide();
            $(".logOut").hide();
        };


        //funktion för att visa välkommen tillbaka efter inloggning
        function showWelcomeBack() {
            $(".logOut").hide();
            $(".correctLogin").hide();
            $(".logInForm").show();
            $(".welcomeBack").show();
            sessionStorage.isLoggedIn = false;
        };
})
        var stuffToDo = [
            "Klipp gräset", 
            "Betala räkningar",
            "Köp mjölk", 
            "Spika upp tavlor"
            ];
        var myJSON = JSON.stringify(arr);
        
        console.log(stuffToDo);
            

        