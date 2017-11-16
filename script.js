$(document).ready(function(){
    console.log("fungerar?");

    //sätt variabler
    var ourUser = "test"
    var ourPassword = "password"

    //dölj forgotLogin och correctLogin
    $(".forgotLogin").hide();
    $(".correctLogin").hide();

    //funktion för att logga in med knapp
    $(".submitButton").click(function(){

        if (ourUser == $(".userName").val() && ourPassword == $(".passwordUser").val()) {
            
            console.log("user mail is ok");
            // Dölj helloForm, visa correctLogin
                
            /* $(".hejString").append(" hej " + $(".userEmail").val() ); */
                
            $(".helloForm").hide();
            $(".correctLogin").show();
            
        } else {
            console.log("fel ifyllt")
            
            // Dölj helloForm, visa forgotLogin
            
            $(".helloForm").hide();
            $(".forgotLogin").show();
            
            }
            
        });
            

    
})