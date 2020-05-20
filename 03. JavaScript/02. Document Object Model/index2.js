// var button=document.getElementsByTagName('button')[0];
// console.log(button)//Here we button as array.
// button.addEventListener("mouseenter",function(){
//     console.log("Clicked !!");
// });

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul")

function inputLength(){
	return input.value.length;
}

function createListElement(){
	var li = document.createElement("li");
		texts = document.createTextNode(input.value)//created a text node
		li.appendChild(texts);// we made a li element and appended text to it
		//input.value is used to take text from text box
		ul.appendChild(li);   //attached it to ul tag.
		input.value = "";
}
button.addEventListener("click",function () {
  if (inputLength() > 0) {
	createListElement()	
  }
  });
  
input.addEventListener("keypress",function (event) {
	console.log(event.which)
	if (inputLength()> 0 && event.keyCode===13) {
	createListElement()
	}
	});