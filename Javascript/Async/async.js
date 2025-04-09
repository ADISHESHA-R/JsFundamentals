// setTimeout(function(){
//     console.log("Adishesha.R");
// },5000);
// const chaibro=function(){
//     document.querySelector('h1').innerHTML = "Best javascript developer"
// }
// const changeMe=setTimeout(chaibro,2000)
// document.querySelector('stop').addEventListener('click',function(){
//     clearTimeout(changeMe);
//     console.log("Timeout cleared");
// });
let timerId;
document.getElementById('start').addEventListener('click',function(){
    document.querySelector('h1').innerHTML = "Best javascript developer";
    console.log("Timer Started");
    clearInterval(timerId);
    timerId=setInterval(()=>{console.log("Timer is running", new Date().toLocaleString());},1000);
    });

document.getElementById('stop').addEventListener('click',function(){
    clearInterval(timerId);
    document.querySelector('h1').innerHTML = "Ended the timer";
    console.log("Timer Stopped");
});