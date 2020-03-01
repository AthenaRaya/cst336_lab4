//Dispalying City from API after typing a zip code

 var usernameAvailable = false;
 
$("#zip").on("change",function(){
       //alert($("#zip").val());
 
     $.ajax({
        method: "GET",
        url: "https://itcdland.csumb.edu/~milara/ajax/cityInfoByZip.php",
        dataType: "json",
        data: { "zip": $("#zip").val() },
        success: function(result,status){
     
             $("#city").html(result.city);
         } 
    }); //ajax
}); //zip  
  

    
    $("#state").on("change",function(){
    alert($("#state").val());
        $.ajax({
         method: "GET",
         url: " https://itcdland.csumb.edu/~milara/ajax/countyList.php",
         dataType:"json",
         data:{"state":$("#state").val()},
         success: function(result,status){
             
          //  alert(result[0].county);
            $("#country").html("<option> Select One </option>");
            for (let i = 0; i < result.length; i++){
                $("#county").append("<option>" + result[i].county + "</option>");
             }
           
           
            }
      
         });//ajax
     
    });// state 
    
    $("#username").change(function() {
        //alert($("username").val());
        
        $.ajax({
            
            method: "GET",
            url: " https://itcdland.csumb.edu/~milara/ajax/countyList.php",
            dataType:"json",
            data:{"state":$("#state").val()},
           success: function(result,status){
               
               if(result.available){
                   $("#usernameError").html("username is available");
                   $("#usernameError").css("color","greeen");
                    usernameAvailable = true; 
               }else{
                    $("#usernameError").html("username is unavailable");
                    $("#usernameError").css("color","red");
                    usernameAvailable = false; 
                   
                    }
             
            
           }
            
            
        }); //ajax 
    }); //username
    
      $("#signupForm").submit(function(event) {
        //alert("sumbmitint form ");
        
        if(!isFormVaild()){
            event.preventDefault();
        }
        
    }); //sign up form
    
    function isFormVaild(){
        var isValid = true;
        if(!usernameAvailable){
            isValid = false;
        }
        
        if($("#username").val().length == 0){
            isValid = false;
            $("#usernameError").html("username is required")
        }
         if($("#password").val().length < 6){
             $("#passwordAgainError").html("Passoword must be at least 6 character long!")
         }
         if($("#password").val() != $("#passwordAgain").val()){
             $("#passwordAgainError").html("Password Mismatch");
             isValid = false; 
         }
         return isValid;
    }
    
   