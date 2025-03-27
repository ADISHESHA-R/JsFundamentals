// let arr=[1,2,4,5,5,6,7];
// // arr.push(8);
// // arr.unshift(3); 
// // arr.shift(); //.shift a position 
// // let nw=arr.join();
// // console.log(nw);

// // //slice,splice
// // console.log("A:",arr);
// // const my1=arr.slice(1,3);
// // console.log(my1);

// // //splice includes a last element
// // console.log("B:",arr);
// // const my2=arr.splice(1,3);
// // console.log(my2);

let arr1=[1,2,3];
let arr2=[4,5,6];
// let arr3=arr1+arr2;
// let arr3=arr1.concat(arr2);
let arr3=[...arr1,...arr2];
console.log(arr3);

//multiple array elements into an single array
let arr=[1,2,4,[5,6,7],7,9,[1,3]];
let gh=arr.flat()
console.log(gh);

let array="adishesha";
console.log(Array.from(array));

s1=100;
s2=200;
s3=300;
console.log(Array.of(s1,s2,s3));

