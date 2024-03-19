const Math2=require("./Math2");
const Math1=require("./Math1");
 
const  {multiply }= require("./with arrow func");


//handle single import
console.log(Math1(9,5))



//handle multiple imports
console.log(Math2.add(7,5))


//via arrow

console.log(multiply(4,5))