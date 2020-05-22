/**Additions to ES 8
 *  .padStart()
 *  .padEnd()
 *  object.keys()
 *  object.entries()
 *  object.values()
 */
name ="Samir"
console.log(name)
console.log(name.padStart(10))

const fun = (a,b,c,d)=>{
    console.log(a);
}
fun(1,2,3.4)

let obj ={
    username0 : 'santa',
    username1 : 'Rudolf',
    username2: 'Mr. Grinch'
}

Object.keys(obj).forEach((key,index)=>{
    console.log(key,obj[key]);
})

Object.values(obj).forEach(value=>{
    console.log(value);
})

Object.entries(obj).forEach(value=>{
    console.log(value);
});

Object.entries(obj).map(value=>{
    return value[1]+value[0].replace('username','')
}) 