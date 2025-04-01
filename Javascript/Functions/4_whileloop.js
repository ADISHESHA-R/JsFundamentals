let index=0
while (index<0) {
    console.log(`Value of index is ${index}`);
    index=index+2;
}
let myArray=["flash","batman","superman"];
let arr=0;
while(arr<myArray.length){
console.log(`Value is ${myArray[arr]}`) ;
arr=arr+1;
}

let score=1;
do{
console.log(`score is ${score}`);
score++;

}while(score<10);

const arrs=[1,2,3,4,5];
for(const num of arrs){
    console.log(num);
}

const greetings="Hello world!";
for(const greet of greetings){
    console.log(`Each char is ${greet}`);
}

//Maps
const map=new Map()
map.set('In',"india");
map.set('Usa',"United States if America");
map.set('Fr',"France");
console.log(map.keys());
for(const [key,Value] of map){
    console.log(key,':-',Value);
}

const myObject={
    js:"Javascript",
    jdk:"Java Development Kit",
    py:"Python"   
}
for(const key in myObject){
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

const coding=["js","ruby","java","python","cpp"]
coding.forEach((a)=> {
    console.log(a);
})