console.log("Exceuted");

const salon = {
    name:"The fashion Pet",
    phone:"555-555-5555",
    address:{
        city:"Tijuana",
        av:"Calz Universidad",
        number:"125-K"
    },
    pets:[]
}

console.log(salon);

let{ name, phone, address:{city,av,number}} =salon;
console.log(city);

document.getElementById("info").innerHTML=
"<p>"+name+"<b>"+city+"</b> </p>";

document.getElementById("info").innerHTML=`
<p class="footer-info"> ${name} 
<b> ${city}, ${av} ${number}</b>
<br>
${phone}
</p>
`;

class Pet{
    constructor(name,age,type,breed,gender,service,ownersName,conctactPhone){
        this.name=name;
        this.age=age;
        this.type=type;
        this.breed=breed;
        this.gender=gender;
        this.service=service;
        this.ownersName=ownersName;
        this.conctactPhone=conctactPhone;

    }
}

const scooby = new Pet("Scooby",27,"Dog","Dane","Male","Full Service","Shaggy","555-555-555");
console.log(scooby);

const scooby2 = new Pet("Scooby2",27,"Dog","Dane","Male","Full Service","Shaggy","555-555-555");
console.log(scooby2);

const scooby3 = new Pet("Scooby3",27,"Dog","Dane","Male","Full Service","Shaggy","555-555-555");
console.log(scooby2);

const scooby4 = new Pet("Scooby4",27,"Dog","Dane","Male","Full Service","Shaggy","555-555-555");
console.log(scooby2);

salon.pets.push(scooby);
salon.pets.push(scooby2);
salon.pets.push(scooby3);
salon.pets.push(scooby4);




/*
var names="";
for(let i=0;i<salon.pets.length;i++)
    names+=salon.pets[i].name +"\n";
alert(names);
*/

var txtName=document.getElementById("petName");
var txtAge=document.getElementById("petAge");
var txtType=document.getElementById("petType");
var txtBreed=document.getElementById("petBreed");
var txtGender=document.getElementById("petGender");
var txtService=document.getElementById("petService");
var txtOwner=document.getElementById("petOwnersName");
var txtContactPhone=document.getElementById("petContactPhone");

function register(){

    console.log(txtName.value);
    console.log(txtAge.value);
    console.log(txtType.value);
    console.log(txtBreed.value);
    console.log(txtGender.value);
    console.log(txtService.value);
    console.log(txtOwner.value);
    console.log(txtContactPhone.value);

    var thePet = new Pet(txtName.value,
    txtAge.value,
    txtType.value,
    txtBreed.value,
    txtGender.value,
    txtService.value,
    txtOwner.value,
    txtContactPhone.value);

    salon.pets.push(thePet);
    console.log(salon.pets);
    clear();
    console.log(thePet);
    displayTable(thePet);
}

function clear(){
    txtAge.value="";
    txtType.value="";
    txtBreed.value="";
    txtGender.value="";
    txtService.value="";
    txtOwner.value="";
    txtContactPhone.value="";
}

function displayTable(aPet){
    var tbody=document.getElementById("rowPet");
    var row = `<tr>
        <td>${aPet.name}</td>
        <td>${aPet.age}</td>
        <td>${aPet.type}</td>
        <td>${aPet.gender}</td>
        <td>${aPet.breed}</td>
        <td>${aPet.service}</td>
        <td>${aPet.ownersName}</td>
        <td>${aPet.conctactPhone}</td>   
         `;
         tbody.innerHTML+=row;

}
for(let i=0;i<salon.pets.length;i++)
displayTable(salon.pets[i]);

//old and young pet 
//add css