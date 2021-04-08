function compute()
{
    principal = document.getElementById("principal").value;
    rate = document.getElementById("rate").value;
    years = document.getElementById("years").value;
   
    interest = document.getElementById("result") ;
    interest.innerHTML = "The interest is " + (principal*rate*years/100);
     document.getElementById('totalAmount').innerHTML = principal + interest;
     document.getElementById('totalYears').innerHTML = 2021 + years;
    
    
    document.getElementById('p01').style.display = "none";
	document.getElementById('p02').style.display = "none";
	document.getElementById('p03').style.display = "none";
	document.getElementById('p04').style.display = "none";			
				
 }
 
 function hidePara()
 {
        document.getElementById('p01').style.display = "block";
		document.getElementById('p02').style.display = "block";
 		document.getElementById('p03').style.display = "block";
		document.getElementById('p04').style.display = "block"
	
		
 }       