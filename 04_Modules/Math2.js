 
function add(a,b){
    return a+b
}

function sub(a,b){
    return a-b
}
 
//use module export once because its overwrite the value 
/*
module.exports=add
module.exports= sub
 where we import these function we use only sub because it overwrite previous function

*/

//multi export
module.exports={add,sub};