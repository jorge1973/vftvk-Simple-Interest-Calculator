function compute()
{
    var principal = document.getElementById("principal").value;
    var rate=document.getElementById("rate").value;
    var years=document.getElementById("years").value;
    var interes=principal*years*rate/100;
    var year=new Date().getFullYear()+parseInt(years);
    if(document.getElementById("principal").value !=""){
        document.getElementById("result").innerHTML= `If you deposit: <mark>${principal}</mark>,<br>at an interest rate of: <mark>${rate}</mark>.<br>You will receive an amount of: <mark>${interes}</mark>, <br>in the year: <mark>${year}</mark><br>`
    }else{
        alert("Please enter a positive number");
        document.getElementById("principal").style.borderColor="red";
        document.getElementById("principal").focus();
        
    }
   
}

function updateRate(){
    var rateval=document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
} 
        
function principalValidation(){
    if (document.getElementById("principal").value<=0 ){
        alert("Please enter a positive number");
        document.getElementById("principal").value="";
        document.getElementById("principal").focus();
        document.getElementById("principal").style.borderColor="red";
    }
    else{
        document.getElementById("principal").style.borderColor="black";
    }
}