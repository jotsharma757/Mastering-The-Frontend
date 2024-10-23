//  function sayhi(){
//     console.log("j");
//     console.log("o");
//     console.log("t");
//  }
 //call the function
//  sayhi()


//  function addtwonumbers(num1,num2){ //declare (a,b => means parameters)
//     console.log(num1+num2);
//  }
//  addtwonumbers(3,5) // for call the value (a,b => means arguments)

//  function calculatetheprice(a1,...num1){
//     return num1
//  }
//  console.log(calculatetheprice(200, 900 ,800 ));



 //this arrow
//  const chai = () => {
//    let username = "jot"
//    console.log(this);
//  }
//  chai()

 //basic of arrow function
//  const addTwo = (num1, num2) => {
//    return(num1+num2)
//  }
//  console.log(addTwo(3,9));

 //implicit return
// const addTwo = (num1, num2) => (num1+num2)
// console.log(addTwo(9,9))

//important :wrap in ( ) is imp. in implicit
//e.g.
// const addTwo = (num1, num2) => ({username : "jot"})
// console.log(addTwo(9,9))


//Immediately invoked function expressions (iife)------------called by ()

(function three(){
   console.log(`db`);
})();

// ( () => {
//    console.log(`db yoo`);
// })()

( (name) => {
   console.log(`db yoo ${name}`);
})('jot')