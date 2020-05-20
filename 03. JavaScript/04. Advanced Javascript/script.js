/*const obj = {
    player: 'samir',
    age: 21,
    subject:false
}
                            //Destructuring
const player = obj.player;
const age = obj.age;
let subject = true;

const{player, age}=obj; //This line does the same thing which is done by above two lines
*/
/*
                            //Object properties
const name ='john snow';
const obj={
    [name]:'hello',
    ['ray'+'smith']:'hihi'
}
console.log(obj);
*/
/*
                            //template strings
let name = "samir",age =21,pet = 'horse';
let greet = "well"
let greeting= "Hello"+name+"you seem to be doing"+greet;

let greetbest = `Hello ${name} you seem to be ${age-10}. What a lovely ${pet} you have.`
console.log(greetbest)
*/  
                            //symbol
let sym1 = Symbol();
let sym2 = Symbol('foo');
let sym3 = Symbol('foo');
// they are totally unique

//arrow function
function add(a,b){
    return a+b;
}

let add_arrow = (a,b) => a+b;
console.log(add_arrow(2,5))

                            //Closures
/**The function executes once and then it never again get executed 
 * But it's going to remember that there are references to those variables.
 * So the child scope always has access to the parent scope.
*/
/**
 * Writing normal function
 */

 function first_1(){
     var greet_1 = 'Hi';
     function second_1(){
         alert(greet_1);
     }
     return second_1;
 }

//new way of writing the above function code
const first = () => {
    const greet ='hi';
    const second = () => {
        console.log(greet);
    }
    return second;
}
const newFunc = first();
newFunc();
newFunc()
                        //Currying
/**Process of converting a function that take multiple arguments 
 * into a function but accepts/takes one parameter at a time */

const multiply = (a,b) => a*b;
const curriedMultiply =(a)=> (b)=> a*b;
console.log(curriedMultiply(5))
/**
 * curriedMultiply(5)
 * this simply call the above functions which returns 
 * another function inside it.
 */
console.log(curriedMultiply(5)(2))
const mult5 = curriedMultiply(7)        //code where transformation is taking place
console.log(mult5(2))
/**
 * Curried function is basically using a function which has a parameter set beforehand.
 */
console.log(mult5(10))

                        //Compose
const compose=(f,g)=>(a)=>f(g(a));
const sum = (num) => num+1
console.log(compose(sum,sum)(5));                        