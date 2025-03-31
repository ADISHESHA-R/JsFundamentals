let arr=[1,2,3,4,5];
const ee=arr.filter((n)=>n>4);
console.log(ee);

//map
const nets=arr.map((r)=>r*10).map((r)=>r+1).filter((r)=>r>21&&r<91);
console.log(nets);

//reduce
const mytotal=arr.reduce((acc,cum)=>acc+cum,0);
console.log(mytotal);

const sa=arr.map((a)=>a+3).filter((a)=>a>2);
console.log(sa);

const mts=arr.reduce((acc,num)=>acc*num,0);
console.log(mts);