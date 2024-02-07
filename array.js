let crickter=new Array("Mahi", 7, "Ruturaj", 31, "Raina", 48);
//console.log(crickter);

/*Accessing Elements of an Array
console.log(crickter[0]);
console.log(crickter[2]);
console.log(crickter[4]); */

/*Modifying the Array Elements
crickter[4]="Jadeja";
console.log(crickter); */

/*Adding Elements to the Array
//Add elements using methods like  push and unshift

//Add Element to the end of Array
console.log(crickter.push("Shivam"));

//Add Element to the Start of Array
console.log(crickter.unshift("Conway"));
console.log(crickter)  */

/*Removing Elements from an Array
Remove elements using methods like pop(), shift(), or splice(). */

/* Removes and returns the last element
console.log(crickter.pop());
console.log(crickter); */

/* Removes and returns the first element
console.log(crickter.shift());
console.log(crickter); */

/* Removes 3 elements starting from index 1 
console.log(crickter.splice(1,3));
console.log(crickter); */

/*Increase and Decrease the Array Length
crickter.length=8;
console.log(crickter);

crickter.length=2;
console.log(crickter);*/

/*Array Concatenation

let blue=new Array("Virat", "Rohit", "Kl rahul", "Hardik");
let newTeam=crickter.concat(blue);
console.log(newTeam); */

/*Spread Operator in Arrays

let blue=new Array("Virat", "Rohit", "Kl rahul", "Hardik");
let newTeam=[...crickter, ...blue];
console.log(newTeam); */

//Conversion of an Array to String

//console.log(crickter.toString());


/* Nested Array

let foreigner=["faf du plesis", "jos Buttler", "Russhel", "Kane Williamson", ["Sam curran", "Liam Livingston"], ["David Warner, Dj bravo",["Daryl Mitchel","Mitchel Santner", "ABD"]] ]

Remove all nested array and display in a single array

let team=foreigner.flat(Infinity);
console.log(team); */
 
/*ArrayinArray
let player1=34;
let player2=84;
let player3=54;
console.log(Array.isArray(player1,player2,player3)); */








