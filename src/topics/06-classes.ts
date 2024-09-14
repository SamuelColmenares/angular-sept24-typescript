

export class Person {
    public name:string;
    private address:string;

    constructor(name:string, address:string = 'No Address'){
        this.name = name;
        this.address = address;
    }
} 

/* export class Hero extends Person {

    constructor(public realName: string, public alterEgo: string, public age:number){
        super(realName);
        this.alterEgo = alterEgo;
        this.age = age;
    }
} */

export class Hero {
    constructor(
        public person:Person, 
        public alterEgo:string, 
        public age:number){ }
}
