/**contents
 * reference type
 * context
 * instatiation
 */
                                                // Reference Type
console.log("[] === [] >> ",[] === []);
//When we compare one array with another when array is created it is created as object at some
//location and another is created at some other location.
var object1 = {value:10};
var object2 = object1;  //Here object 2 is the referenced datatype.
var object3 = {value: 10};

console.log('object1 === object2 >> ',object1 === object2)
console.log('object1 === object3 >> ',object1 === object3)

                                                //Context
// Context tells us where we are within the object.
console.log(this) // this is a window object.
console.log("this === window >> ",this === window);

// this >> Object environment we are right now.

const object4 = {
    a: function(){
        console.log(this);
    }
}
object4.a()

//instatiation
/**Instatiation is making copy of a object and reusing the code.*/

class Player{
    constructor(name,type) {
        console.log('Player >>>>>> ',this);
        this.name = name;
        this.type = type;
 }
 introduce() {
     console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
 }
}

class wizard extends Player {
 constructor(name,type){
     super(name,type);//calling constructer function of the player inside wizard
     console.log('wizard >>>>>> ',this);
 }
 play(){
     console.log(`weeeeeeee I'm a ${this.type}`);
 }
}

//const wizard1= new wizard('Shelly','Healer');
const wizard2 = new wizard('shawn','healer');
wizard2.play();
wizard2.introduce();