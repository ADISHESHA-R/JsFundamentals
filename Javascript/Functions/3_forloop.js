
for (let index = 0; index <= 10; index++) {
    const element = index;
    if(element==5){
        continue;
    }
    else if(element==3){
        break;
    }
    console.log(element);
}


myArray=["adi","anu","chai"];
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}