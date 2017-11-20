$(document).ready(function(){
    console.log("fungerar?");

    

    //sätt variabler
    var ourUser = "test"
    var ourPassword = "password"
    sessionStorage.isLoggedIn = false;
    console.log(sessionStorage.isLoggedIn);

    //dölj forgotLogin och correctLogin
    $(".forgotLogin").hide();
    $(".correctLogin").hide();
    $(".logOut").hide();

    //funktion för att logga in med knapp
    $(".logInButton").click(function(){

        if (ourUser == $(".userName").val() && ourPassword == $(".passwordUser").val()) {
            
            console.log("user mail is ok");
            // Dölj helloForm, visa correctLogin
            // dölj logInForm, visa logOut    
                            
            $(".helloForm").hide();
            $(".forgotLogin").hide();
            $(".correctLogin").show();
            sessionStorage.isLoggedIn = true;
            $(".logInForm").hide();
            $(".logOut").show();

            console.log(sessionStorage.isLoggedIn);
            
        } else {
            console.log("fel ifyllt")
            
            // Dölj helloForm, visa forgotLogin
            
            $(".helloForm").hide();
            $(".forgotLogin").show();
            
            }
            
        });

        //funktion för att logga ut med knapp
            $(".logOutButton").click(function(){

                //dölj logut, visa log in
                $(".logOut").hide();
                $(".logInForm").show();
                sessionStorage.isLoggedIn = false;
            });

        //visa datum - jag är så nöjd att jag vill dricka sprit
            var date = new Date;
            console.log(date);
            $(".todaysDate").append(date.getFullYear(), "-", date.getMonth(), "-", date.getDate());

    
})