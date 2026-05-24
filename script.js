
//  Variable
 
  var name = prompt("Enter your name")
  var age = prompt("Enter your age");
  var country = prompt("Enter your country");
   if(age >= 18  && country == "Pakistan"){
    alert("Hello Citizen");
   }
   else if(age < 18  && country != "Pakistan"){
    alert("you are not allowed");
   }
   else{
    alert("Access Denied");
   }
   
