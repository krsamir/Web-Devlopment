//caniuse.com
//The two ways of writing function in javascript

function sayHello(){
    console.log("Hello");
}
sayHello()

let sayBye = function(){        //Since the funtion is not having any name so it is called anonymous function.
    console.log("Bye");
}
sayBye()

// A multiply function

function multiply(a,b){
    return(a*b)
}
console.log(multiply(10,10))

//Data Structures
let lists=["tiger",'cat','bear','bird'];

//List of functions
let functionlist = [
    function apple(){
    console.log("Apple here");
},
    function mango() {
        console.log('Mango here');
    }
]

//For removing element from front(left) we need to use shift()
//For removing element from back(right) we need to use pop()

 //Objects

 let user = {
     name:'john',age:34,hobby:"Soccer",isMarried:false
 };
 console.log(user)
 console.log(user['name'])

 //adding attributes to the objects
 user.food = "Banana"
 console.log(user)
 //changing value of attributes
 user.isMarried=true;
 console.log(user)  
 //Function inside an object is a method
                         //Looping
var todos=[
    "Clean Room",
    "Brush Teeth",
    "exercise",
    'study Javascript',
    "eat Healthy"
]
/*for(var i = 0;i<todos.length;i++){
    console.log(todos[i]); 
}*/

// todos.forEach(function(i){
//     console.log(i)
// })

function logtodos(todo,i){
    console.log(todo,i)
}
todos.forEach(logtodos)//A function should be passed as parameter
