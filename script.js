$(document).ready(function(){
    console.log("fungerar?");

    

    //sätt variabler
    var toDoList;
    var numberOfThingsToDo = 0;
    var ourUser = "test"
    var ourPassword = "password"
    sessionStorage.isLoggedIn = false;
    console.log(sessionStorage.isLoggedIn);

    fetch("./todo.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(todo) {
        toDoList = todo;
        createUIFromThingsToDo();
    });

    /* Kod för att läsa in todo-listan till index.html */
    function createUIFromThingsToDo() {

    /*hämta det som finns i main. inte helt säker på om detta verkligen behövs, men if it aint broken ...  
    var main = document.getElementById("main"); */

    //rita ut productList (produktlistan), sätt en klass på den
    /*var productList = document.createElement("div");
    productList.className = 'productListClass';*/
    $(".toDoForgetAndDie").append

    //dölj forgotLogin och correctLogin
    $(".forgotLogin").hide();
    $(".correctLogin").hide();
    $(".logOut").hide();
    $(".welcomeBack").hide();

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

                //dölj logut, visa log in och welcomeBack
                $(".logOut").hide();
                $(".correctLogin").hide();
                $(".logInForm").show();
                $(".welcomeBack").show();
                sessionStorage.isLoggedIn = false;
            });

        //visa datum - jag är så nöjd att jag vill dricka sprit
            var date = new Date;
            console.log(date);
            $(".todaysDate").append(date.getFullYear(), "-", date.getMonth(), "-", date.getDate());

    
})