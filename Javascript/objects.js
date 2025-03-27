const regular={}
regular.name="adishesha";
regular.id=101;
console.log(regular);

const obj1={'a':1,'b':2};
const obj2={'c':1,'d':2};
// const obj3={obj1,obj2};
const obj3=Object.assign({},obj1,obj2);
console.log(obj3);
console.log(Object.keys(obj3));
console.log(Object.values(obj3));

