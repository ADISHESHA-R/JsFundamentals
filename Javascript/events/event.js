document.getElementById("images").addEventListener("click", function(e){
    console.log("image ul tag clicked");
},true)

// document.getElementById("2").addEventListener("click", function(e){
//     console.log("image2 clicked");
// },false)//bubbling event if it is false image2 clicked image ul tag clicked 

// //if it is true then image2 clicked
// document.getElementById("2").addEventListener("click", function(e){
//     console.log("image2 clicked");
// },true)//image clicked

document.getElementById("2").addEventListener("click", function(e){
    console.log("image2 clicked");
    e.stopPropagation();
 },false)//image2 clicked