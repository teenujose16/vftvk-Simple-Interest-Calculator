function compute(principal, rate, years)
{
    principal = document.getElementById("principal").value;
    rate = document.getElementById("rate").value;
    years = document.getElementById("years").value;
   
    var interest = document.getElementById("result") ;
    interest.innerHTML = "The interest is " + (principal*rate*years/100);
    
    var totalAmount = principal + interest;
    var totalYear = 2021 + years
    
     document.getElementById("p01").innerHTML = "If you deposit " + principal;
     document.getElementById("p02").innerHTML = "at an interest rate of " + rate;                     
 	 document.getElementById("p03").innerHTML = "You will receive an amount of " + totalAmount;		
	 document.getElementById("p04").innerHTML = "in the year " + totalYear;			
 }
 
 function hidePara()
 {
        document.getElementById('p01').style.display = "block";
		document.getElementById('p02').style.display = "block";
 		document.getElementById('p03').style.display = "block";
		document.getElementById('p04').style.display = "block"
	
		
 }       