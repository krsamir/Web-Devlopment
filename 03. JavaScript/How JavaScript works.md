# How `JavaScript` works ?
***
#### What is a program ?
1. allocates memory.
2. parse and execute.<br><br>
***
## JavaScript engines
* Chrome : V8
* Firefox : Spidermonkey
* Safari : JavaScriptCore (also called Nitro)
* Edge : Chakra
***
There is Javascript engine that each browser implements. It reads the javascript that we write and changes then into machine executable instruction for the browsers.<br>
Engine consits of two parts i.e. `memory heap` and `call stack`.<br>
In memory heap, memory allocation takes place.<br>
In call stack our code is read and axecuted. It also tell where we are in the program.<br>