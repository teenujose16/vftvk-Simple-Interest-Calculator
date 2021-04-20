 function compute(principal, interestRate, years) {
    
    principal = document.getElementById("principalId").value;
    if (principal == "" || principal == 0 || principal < 0) { 
       
              document.getElementById("divContainer").style.display = "none";
              console.log("validatingNull");
              window.alert("Enter a positive number");
              //focus used for take the user back to input box
              document.getElementById("principalId").focus();
            
        }
       else
       {
       
          document.getElementById("divContainer").style.display = "block";
           //assigning value variables
          principal = document.getElementById("principalId").value;
          interestRate = document.getElementById("rateId").value;
          years = document.getElementById("yearsId").value;
          
          //formulate result 
          var resultInterest = (principal * interestRate * years / 100);
          var totalAmount =  parseInt(principal) + parseInt(resultInterest); 
          var dateobj = new Date();
            // Year from above object 
            // is being fetched using getFullYear() 
           var dateObject = dateobj.getFullYear();
          
            var totalYear = dateObject + parseInt(years);
           
           //assigning value in textbox text
          document.getElementById("principalOutput").innerHTML =  principal;
          document.getElementById("interestOutput").innerHTML = interestRate;
          document.getElementById("totalamountOutput").innerHTML =  totalAmount;
          document.getElementById("yearOutput").innerHTML =  totalYear;
          
       }
  }
  
function hideDetails()
{
       //hide output display
      document.getElementById("divContainer").style.display = "none";

}
