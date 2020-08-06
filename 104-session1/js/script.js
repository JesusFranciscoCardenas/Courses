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



var names="";
for(let i=0;i<salon.pets.length;i++)
    names+=salon.pets[i].name +"\n";
console.log(names);

for(let i=0;i<salon.pets.length;i++)
   {
        document.getElementById("name-"+i).innerHTML=salon.pets[i].name;
        document.getElementById("age-"+i).innerHTML=salon.pets[i].age;
        document.getElementById("type-"+i).innerHTML=salon.pets[i].type;
        document.getElementById("breed-"+i).innerHTML=salon.pets[i].breed;
        document.getElementById("gender-"+i).innerHTML=salon.pets[i].gender;
        document.getElementById("service-"+i).innerHTML=salon.pets[i].service;
        document.getElementById("owner-"+i).innerHTML=salon.pets[i].ownersName;
        document.getElementById("contactPhone-"+i).innerHTML=salon.pets[i].conctactPhone;

        

   } 
   names+=salon.pets[i].name +"\n";
    console.log(names);


