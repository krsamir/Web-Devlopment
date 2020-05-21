const array = [1,2,10,16];
const double=[];
const newArray = array.forEach((num)=>{
    double.push(num*2);
})
console.log("forEach Array = ",double)
//map, filter, reduce 
                        //MAP
const mapArray = array.map((num)=>{
    return  num*2;
})
/**
 * Difference between forEach and map
 * forEach just iterates over each number in an array
 * whereas map with iteration also returns the function value in a new array
 * forEach and Map basically do the same thing but with different methodologies
 */
console.log("Mapped Array = ",mapArray);

/**
  
    const mapArray = array.map((num)=>{
        return  num*2;
    })
        can be written as shorthand notation

    const mapArray = array.map(num=>num*2);
 
 */
                    //Filter
 const filterArray = array.filter(num=>{
     return num > 5;  
 });
 console.log('Filter Array ',filterArray);

 /**
  * So what filter does ?
  * If we simply return any conditional statement using forEach 
  * or any other loop it would return true or false whereas using 
  * filter if the boolean condition is true then that argument is returned into
  * array if false nothing is returned into the array.
  */
                    //Reduce
  const reduceArray = array.reduce((accumulator, num)=>{
      return accumulator + num; 
  },21);
  /**
   * accumulator is something where we store the information that happens in
   * the body of the function.
   * The 21 passed as argument in the last part of reduce function
   * is the starting value uf the function.
   * The function of accumulator is:
   * accumulator = acuumulator + num;
   */
   console.log('Reduce Array ',reduceArray)