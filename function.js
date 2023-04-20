//  In Javascript function are known as first class citizen and it is special type of object having name property.
//  we can attached property, object and function with function in JS.


function greet(){
    console.log('Hello')
}

greet.language = 'English'
console.log(greet)
console.log(greet.name)

// *************************************
//           Function as a expression 
// Expression : A unit of code that return a value
        //  a = 3 => 3
        //  1 + 2 => 3
        // a = { greeting : 'hi'} 


 var anonymousGreet = function(){
    console.log('hi')
 }       

//  Function as a statement
    function demo(){
        console.log('hi')
    } 
