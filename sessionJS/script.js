var product = prompt("Product: ");
var quantity = null;
var price = null;

quantity= parseInt(prompt("Quantity: "));
while(!Number.isInteger(quantity))
{  
    alert("Only Numbers please");
    quantity= parseInt(prompt("Quantity: "));
}

price= parseInt(prompt("Price: "));
while(!Number.isInteger(price))
{
    alert("Only Numbers please");
    price= parseInt(prompt("Price: "));
    
}

console.log ("Purchase receipt");
console.log ("\n");
console.log ("Product: " + product);
console.log ("Price: $" + price);
console.log ("Quantity: " +quantity );

console.log ("\n");

var subtotal = Number(quantity) * Number(price);
var tax = subtotal * 0.16;
console.log ("Subtotal: $" + subtotal);
console.log ("Tax: $" + tax);

console.log ("\n");

var total = subtotal + tax;
console.log ("Total: $" + total);