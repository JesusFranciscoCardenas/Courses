
function Calculate(){
    var firstNumber = parseInt(prompt("First Number: "));
    while(!Number.isInteger(firstNumber))
    {  
        alert("Only Numbers please");
        firstNumber= parseInt(prompt("First Number: "));
    }


    var secondNumber = parseInt(prompt("Second Number: "));
    while(!Number.isInteger(secondNumber))
    {
        alert("Only Numbers please");
        secondNumber= parseInt(prompt("Second Number: "));
    }

    var validOperation=false
    var operation;
    do{
        operation = prompt("Operation: ");
        if(operation=="+" || operation =="-" || operation=="*" || operation =="/")
            validOperation=true;
        else
            alert("Please input a valid operation");
    }while(!validOperation);


    console.log("Your operation:");
    console.log(firstNumber + operation + secondNumber+ "="+ eval(firstNumber + operation+secondNumber) );
    document.getElementById("init").innerHTML= "Your operation is "+firstNumber + operation + secondNumber+ "="+ eval(firstNumber + operation+secondNumber);
    console.log("\nOther operations:");
    console.log(firstNumber+"+"+secondNumber+"="+sum(firstNumber,secondNumber));
    document.getElementById("operations").innerHTML="Other Operations <br>"+firstNumber + "+" + secondNumber+ "="+ sum(firstNumber,secondNumber) + "<br>";
    console.log(firstNumber+"-"+secondNumber+"="+sub(firstNumber,secondNumber));
    document.getElementById("operations").innerHTML+=firstNumber + "-" + secondNumber+ "="+ sub(firstNumber,secondNumber) + "<br>";
    console.log(secondNumber+"-"+firstNumber+"="+sub(secondNumber,firstNumber));
    document.getElementById("operations").innerHTML+= secondNumber+ "-" + firstNumber+ "="+ sub(secondNumber,firstNumber) + "<br>";
    console.log(firstNumber+"*"+secondNumber+"="+mul(firstNumber,secondNumber));
    document.getElementById("operations").innerHTML+= secondNumber+ "*" + firstNumber+ "="+ mul(firstNumber,secondNumber) + "<br>";
    
    validaDivision(firstNumber,secondNumber);
    validaDivision(secondNumber,firstNumber);

    


    function sum(a,b){
        return a+b;
    };
    function sub(a,b){
        return a-b;
    };

    function mul(a,b){
        return a*b;
    };

    function div(a,b){
        return (b==0) ? undefined : a/b;      
    };

    function validaDivision(nominador, denominador)
    {
        var divisionResult = div(nominador,denominador);
        if(divisionResult!=undefined)
        {
         console.log(nominador+"/"+denominador+"="+divisionResult);
         document.getElementById("operations").innerHTML+= nominador+ "/" + denominador+ "="+ divisionResult + "<br>";
        }
        else
        {
            console.log(nominador+"/"+denominador+"= division by zero is not defined");
            document.getElementById("operations").innerHTML+= nominador+ "/" + denominador+ "= <a href=https://en.wikipedia.org/wiki/Division_by_zero>division by zero is not defined</a>" + "<br>";
        }
    }
}