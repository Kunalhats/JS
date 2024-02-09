let Emp1={
    name:"kunal",
    id:2124,
    designation:"developer",
}

let Emp2={
    location:"kolkata",
    salary:500000,
    company:"deloitte"
}


// Accessing the property of an object 
//console.log(Emp1.name);
//console.log(Emp2.id);

//const value=Object.assign( Emp2,Emp1);
//console.log(value);

//spread opearator
//let value={...Emp2, ...Emp1};
//console.log(value);

//How to make objects using constructor
 /*const owner=new Object() //This is called a singleton object\

 owner.id=2323;
 owner.name="kunal";
 owner.salary=500000;
 console.log(owner); */

 //Working with Objects/arrays inside an Object.

 const owner = {
    name: "kunal",
    city:"dhanbad",
    id:{
        salary: 4400000,
        design: "developer"
    },
    company:"google"
 }
 //console.log(owner.id.design);

 //console.log(Object.keys(owner));
 //console.log(Object.values(owner));


 // Object destructure

const {design: name}=owner;
console.log(name);

