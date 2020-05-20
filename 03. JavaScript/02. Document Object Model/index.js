//DOM Selectors
//console.log()
console.log(document.getElementsByTagName("h1"))
console.log(document.getElementsByClassName("second"))
console.log(document.getElementById('first'))

console.log(document.querySelector('p'))
console.log(document.querySelectorAll('li'))
console.log(document.querySelector('li').getAttribute('random'))
document.querySelector('li').setAttribute('random',20)
console.log(document.querySelector('li').getAttribute('random'))
 
//document.querySelector('h1').style.background="yellow"

var h1 = document.querySelector('h1');
h1.className='coolTitle'

document.querySelector('li').classList.add('coolTitle')
document.querySelector('li').classList.remove('coolTitle')
document.querySelector('li').classList.add('done')

//use of inner HTML
//document.querySelector('h1').innerHTML="<strong>!!!!!</strong>";

console.log(document.querySelectorAll('li')[1]);

console.log(document.querySelectorAll('li')[1].parentElement.parentElement)