
var a= 10, b=20
function runThis(otherFn){
    // console.log("Function Running.....")
    otherFn(a,b)
}

Number = 2 ;

runThis(()=>{
    console.log('Running other function 1')
});


runThis(()=>{
    console.log('Running other function 2')
});


function sum(a, b){
    console.log(a + b);
}

runThis(sum);