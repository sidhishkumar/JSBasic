var Person = function(){

    
    this.firstName = 'Sid',
    this.lastName  = 'Kumar'
    
}

var john = new Person();
var jena = new Person();

console.log(john)
console.log(jena)
Person.prototype.getName = function() {
    return this.firstName
}