const PENDING = 0
const FULFILLED = 1
const REJECTED = 2

function CustomPromise(executor){
   let state = PENDING;
   let value = null;
   let handlers = []
   let catches = []
   
   function resolve(result){
    if(state !== PENDING) return;
    
   }
}