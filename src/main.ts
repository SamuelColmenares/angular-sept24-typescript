import './style.css'
// import './topics/01-basic-types'
// import './topics/02-object-interface'
// import './topics/03-functions'
//import './topics/04-desttructuring'
import {Product, taxCalculation} from './topics/05-des-exercise';
import {Person, Hero} from './topics/06-classes';
import {whatsMyType, otherTypes} from "./topics/07-generics";

let name ='Samuel'
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Hola Mundo ${name}</h1>
  </div>
`
'hola mundo samuel '+name;

const phone: Product = {
  description: "Nokia A1",
  price: 150.0,
};

const tablet: Product = {
  description: "iPad Air",
  price: 250.0,
};

const shoppingCart = [phone, tablet];
const tax = 0.15;

const result = taxCalculation({
  products: shoppingCart,
  tax: tax,
});

/* console.log("Total (Main)", result[0]);
console.log("Tax (Main) ", result[1]); */

const person = new Person('Samuel', 'Medellin');
//person.name = 'Samuel';
const tony = new Person('Tony Stark','New York');
const ironman = new Hero(tony, 'Ironman',40);

/* console.log('person :>> ', person);
console.log('ironman :>> ', ironman); */

const amIString = whatsMyType<string>("Soy un string");
const amINumber = whatsMyType(100);
const amIArray = whatsMyType<number[]>([1, 2, 3, 4, 5]);

console.log("amIString :>> ", amIString.toUpperCase());
console.log("amINumber :>> ", amINumber.toFixed());
console.log("amIArray :>> ", amIArray.join("-"));

const types = otherTypes(person, 123);
console.log('types :>> ', types);


