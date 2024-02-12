/*function to add two numbers

function add(num1, num2){
   let sum=num1+num2;
   return sum;
}
let a=10;
let b=20;
const c=add(a,b)
console.log(c); */

//Handle texts and messages

/* function LoginPage(username){
   if(username===undefined){
      console.log("Please tell username")
      return
   }
   return `${username} just logged in`
}

console.log(LoginPage("kunal")); */

//function to add unknown numbers

/*function add(...num1){
   return num1
}
console.log(add(20,30,45,60,70)); */

//objects and functions or how to use functions to manipulate the values stored in objects

/*function cricket(kits) {
   kits.object = "bat";
 }
 
 const player = {
   object: "bowl",
   type: "bowler",
   pace: "152kmh"
 };
 
 console.log(player.object); 
 cricket(player);
 console.log(player.object);  */


 //change method through function

 /*const batsman = {
   name: "amit",
   age: 18,
}

function change(allrounder){
   allrounder.name = "kunal"
}

change(batsman);
console.log(batsman); */

//functions to manipulate the values stored in Arrays.

const player = ["kunal","amit","vishal","abhishek"]

  function manipulateArray(change){
    change[3] = "Mahi"
  }

  manipulateArray(player)
  console.log(player)
