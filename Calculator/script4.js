
//calculate the grade
var calif =[80,77,88,95,68];
var average=0;

for(var i=0;i<calif.length;i++)
    average+=calif[i];
average/=calif.length;

console.log("Grade: " + String.fromCharCode((65+(10-(parseInt(average/10))))));

