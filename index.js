//  Creating Object
var person = new Object();
person['firstname'] = "Tony"
person.lastname     = 'Kumar'

var firstNameProperty = 'firstname'
console.log(person)
console.log(person[firstNameProperty])


person.address = new Object()
person.address.street = 'Jaitra'
person.address.pincode = 246761
console.log(person)


// Object Literals
var person2 = {}
console.log(person2)

var person3 = {
    firstname : 'tony3',
    lastname : 'kumar3',
    demo : function(){
      console.log(this.name)
    }
}



data = {

    "fistname" : "sid",
    "isAProgrammer" : true
}

console.log(data)
