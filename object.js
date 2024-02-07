let Emp1={
    name:"kunal",
    id:2124,
    designation:"developer",
    location:"kolkata",
    salary:500000,
    company:"deloitte"
}

let Emp2={
    name:"amit",
    id:2125,
    designation:"developer",
    location:"kolkata",
    salary:500000,
    company:"deloitte"
}


// Accessing the property of an object 
//console.log(Emp1.name);
//console.log(Emp2.id);

//const value=Object.assign(Emp2,Emp1)
//console.log(value);

//spread opearator
let value={...Emp2, ...Emp1};
console.log(value);
