// for of method

// In string
/*const msg="welcome";
for (const greet of msg) {
    console.log(greet)
}
// In Array
const text=["hello","world","to", "programm"]
for (const msg of text) {
    console.log(msg)
}
*/
// In Object
// Objects are ont iterable by for-of loop
/*
const list={
    name:"kunal",
    age:21,
    design:"developer",
    salary:"8L"
}
for (const data of list) {
    console.log(data)
}
*/


// for in method


// In object
/*for (const data in list) {
    console.log(`${data} => ${list[data]}`)
}
*/
// For in Method 
//In array
/*const text=["hello","world","to", "programm"]

for(const result in text){
    console.log(text[result])

}
*/

//for-each-method

// In Array
/*
const Name=["kunal","badu"]
Name.forEach((result)=>console.log(result))
Name.forEach((item,index,arr)=>console.log(item,index,arr))
const details=[{
    name:"kunal",
    age:21,
    design:"developer",
    salary:"8L"
}]
details.forEach((key,value)=>{

    console.log(key,value)
})
*/
// for each doesn't return a value. That is why we use filter
/*
const number=[1,2,3,4,5,6,7,8,9]
const result=number.filter((value) => value>4)
console.log(result);
*/

/* ****************************MAP******************************/
/*
const map=new Map()
map.set ("name","kunal")
map.set ("age","21")
map.set ("design","developer")
map.set ("salary","5L")
//console.log(map)
for(const[key,value] of map)
//console.log(key,value)
*/
// This way of attaching ultiple methods in one block of code is called chaining.
/*
const number=[1,2,3,4,5,6,7,8,9]
const output=number.map((value)=>value+10).map((value)=>value+10)
console.log(output)
console.log(output.filter((value)=>value>25))
*/

// ++++++++++++++++++++++   Reduce     +++++++++++++++++++++

// It is posibly the most widely used method


const number=[20,50,70,80]

let result=number.reduce(function (sal,bas) {
    return sal + bas
},100)
console.log(result)
