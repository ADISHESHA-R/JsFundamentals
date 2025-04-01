//if
const isUserLoggedIn=true;
if(isUserLoggedIn){
 console.log("executed");
}

const balance=1000;
if(balance>500) console.log("Successfull"),console.log("transacted");
;  


// //Nullish operator
// let val1=null??80;
// console.log(val1);

let a = undefined ?? "default";
console.log(a);  // Output: "default"

let b = 0 ?? "default";
console.log(b);  // Output: 0 (because `0` is not nullish)

let c = "" ?? "default";
console.log(c);  // Output: "" (empty string is not nullish)

let d = false ?? "default";
console.log(d);  // Output: false (because `false` is not nullish)


//ternary operator
// return condition?true:false;