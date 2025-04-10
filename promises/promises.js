// const promiseOne= new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async task completed");
//         resolve()
//     },1000)
// })
// promiseOne.then(function(){
// console.log("promise fulfilled");
// }
// )

const promiseTwo=new Promise(function(resolve,reject){
    let error=true;
    if(!error){
    setTimeout(function(){
        console.log("User Detais are")
        resolve({username:"Adishesha.R", 
            id:04})
    },1000)
}
else{
        reject("Error: User not found")
    }
})

promiseTwo.then(function(user){
    console.log(user);
}).catch(function(err){
    console.log("Error",err)
})