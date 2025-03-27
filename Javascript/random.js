console.log("random numbers");
let min=10;
let max=20;
console.log(Math.floor(Math.random()*(max-min)+min));

//absoulte value
let mr=-109;
console.log(Math.abs(mr)); // returns only positive number

//ceil value
let number=7.7688;
console.log(Math.ceil(number));

// Abstraction
class inh{
    #balance=0;
    constructor(amount){
        amount=this.#balance;
    }
    getBalance(){
        return `my account balance is ${this.#balance}`;
    }
};
let ifg=new inh();
console.log(ifg.getBalance());

//Inheritance
class vehicle{
    constructor(name,model){
        this.name=name;
        this.model=model;
    }
    drive(){
        return `Bro R U Ready to race ${this.name} by a model ${this.model}`;
    }
}
class man extends vehicle{
    constructor(name,model){
    super(name,model);
    }
    driver(){
        return `i am ready to race ${this.name} with ${this.model}`;
    }
}
let gy=new man("lamborgini","v8");
console.log(gy.driver());
