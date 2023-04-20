let arr = ["sidhish" , "kumar"] 

let object = {
  name : "sidhish",
  city : "dhampur",

  getIntro : function(){
    console.log(this.name + " is from " + this.city)
  }

}

console.log(arr.__proto__) 
