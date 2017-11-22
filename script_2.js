$(document).ready(function(){
    console.log("fungerar?");

    
    //sätt globala variabler
    var ourUser = "test"
    var ourPassword = "password"
   
    showStartPage();
    
    



    function showStartPage() {
        $(".forgotLogin").hide();
        $(".correctLogin").hide();
        $(".logOut").hide();
        $(".welcomeBack").hide();
        };
    
    });