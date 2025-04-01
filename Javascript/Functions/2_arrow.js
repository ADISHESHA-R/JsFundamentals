//  function adishesha(){
//     username: "adibro";
//     function two(){
//         return `The buddy name is ${username} this is new webseite`;
//     }
//     console.log(two());
//  }
//  adishesha();

const addTwo=(num1,num2)=>(num1+num2);
console.log(addTwo(3,4));
  
//While Calling Objects
const addBro=(num1)=>({username:"adishesha"});
console.log(addBro());

//Different method of functions Like IIFE
(function chai(){
    console.log(`DB CONNECTED SUCCESFULLY`);
})();
 