// var let const 
// let  a = 30 
 
//   let b = 8
 

//*****data types***** -----NN SS BB U

//----PRIMITIVE DATATYPE
// let a = 5465
// let b = null
// let c = Symbol("am not a robot")
// let d = harry
// let e = true
// let f = Bigint(56)
// let g = undefdined
// console.log( a, b, c, d, e, f, g);
 // console.log(typeof(str));

 //********NON-PRIMITIVE DT********* */
//----ARRAY------
// let arr = [ 12 ,"ERTR",true , undefined , null] 
// console.log(arr[1]);


//-----OBJECT---NON-PRIMITIVE DT
// let obj={ 
//     name : "Harjot",
// role : "developer"
// }
// console.log(obj.role);
// console.log(document);

//----------TYPE OF OPERATOR---------

//  let bigint=12345678901234567890 
//  console.log(bigint);
//  console.log(typeof(bigint));

//  let un
  // console.log(un);
  // var un = " 5"
  // console.log(typeof(un));

  
  //----POP METHOD----
  //  let rr = arr.pop()
  //  console.log(rr);

  


  //***********ARRAY METHODS************** 

//-1.----Array length----
// const color = ["RED", "Orange", "GREEN", "SKYBLUE"];
// let size = color.length;
// console.log(size);

//-2.---------Array toString()---------converts an array to a string of (comma separated) array values.
// const color = ["RED", "Orange", "GREEN", "SKYBLUE"];
// let arr = color.toString()
//  console.log(arr);

 //-3.-------Array at()------for position
//  const fruits = ["Banana", "Orange", "Apple", "Mango"];
//  let fruit = fruits.at(2);
//  console.log(fruit);

//------2nd method--------
//  const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fruit = fruits[2];
// console.log(fruit);

//--4.------Array join()------combine strings
// const text = ["j","o","t"]
// let letter = text.join("")
// console.log(letter);

//-5.------POP METHOD---------
// let arr = [0,1,2,3,4,5,6,7,89,9,0,4,565,654,65,]
//    let rr = arr.pop()
//    console.log(rr);


//6------PUSH METHOD---
   // let arr = [0,1,2,3,4,5,6,7,89,9,0,4,565,654,65,]
  //   arr.push(46)
  // console.log(arr);


//7.---SHIFT METHOD-----means right side toh element subtract/pop hojegga
// let arr = [0,1,2,3,4,5,6,7,89,9,0,4,565,654,65,]
//  arr.shift()
// console.log(arr);



//8.------Unshift()----------right side to element add/push hoju
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.unshift("Lemon");
// console.log(fruits);

//9.-------delete()-------delete sttring
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// delete fruits[1];
// console.log(fruits);

//10.------concat()------concatenation means joining strings end-to-end.
// ------------------------creates a new array by merging (concatenating) existing arrays:
// const text1 = ["hello!!!", "Sunshine"];
// const text2 = ["Have", "a", "nice","Day"];
// const result = text1.concat(text2);
// console.log(result);

//12.--------Array flat()-------(proper meaning??)
// const myArr = [[3,2],[3,7],[5,6]];
// const newArr = myArr.flat();
// console.log(newArr);

//13.------SPLICE METHOD----means arr.slice(start,delete.counting,kheda element add krwana)
// let arr = [0,1,2,3,4,5,6,7,89,9,0,4,565,654,65,]
// arr.splice(4 ,2,9)
// console.log(arr);

//14.------Array tospliced()---------

//15.-------Array slice()------method slices out a piece of an array into a new array
// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(1);
// console.log(citrus);
 
//16.------Array Sort()--------
// let text1 = [0,811,533,3336,7] //sort acc. 1st number
// let text2 = text1.sort()
// console.log(text2);

//----acc digit sorting -----use compare function
// let compare = (a,b)=>{
//   return a-b
// }
// let text1 = [0,811,533,3336,7] 
// let text2 = text1.sort(compare)
// console.log(text2);



//----------STRING METHODS--------------


//------String Length------
// let text = "JOT SHARMA";
// let length = text.length;
// console.log(length)

//-------String at()------
// let text = "JOT SHARMA";
// let letter = text.at(6);
// console.log(letter)

//------String[]-------
// let text = "JOT SHARMA";
// let letter = text[2];
// console.log(letter)

//--------substring-------
// let str = "Apple, Banana, Kiwi";
// let part = str.substring(7);
// console.log(part);

// -----substr()------
// let str = "Apple, Banana, Kiwi";
// let part = str.substr(7);
// console.log(part);

//------string padStart()------pads a string from the star(padding starts with 2 nd 4 digits and end with)
// let text = "5";
// let padded = text.padStart(4,"2");
// console.log(padded);

//------string padEnd()------pads a string from the end.
// let text = "5";
// let padded = text.padEnd(4,"2");
// console.log(padded);

//----STRING CharAt()-------char's position

// let text = "JOT SHARMA"
// let char = text.charAt(6)
// console.log(char)

//-----String charCodeAt()-------returns the code of the character at a specified index in a string
// let text = "HELLO WORLD";
// let char = text.charCodeAt(3);
// console.log(char);

//----THE SLICE() METHOD-----(startposition, endposition)add
// let text = "JOT SHARMA"
// let char = text.slice(4,10)
// console.log(char)

//--------STRING TO UPPERCASE()---------
// let text = "Jot Sharma"
// let char = text.toUpperCase()
// console.log(char)


//--------STRING TO LOWERCASE()----------
// let text = "Jot Sharma"
// let char = text.toLowerCase()
// console.log(char)

//-------String concat()-------joins two or more strings
// let text1 = "Heyy";
// let text2 = "Sunshine";
// let text3 = text1.concat(" ", text2);
// console.log(text3);


//-------String trim()------removes whitespace from both sides of a string(ess ch space da kive pta lggu)
// let text1 = "     Heyyyy!!!SUNSHINE      ";
// let text2 = text1.trim();
// console.log(text2);


//-------String trimStart()-------removes whitespace only from the start of a string.

// let text1 = "     Hello World!     ";
// let text2 = text1.trimStart();
// console.log(text2);

//-----String trimEnd()--------removes whitespace only from the end of a string.
// let text1 = "     Hello World!     ";
// let text2 = text1.trimEnd();
// console.log(text2);


//--------String repeat()------returns a string with a number of copies of a string
// let text1 = "Heyy!!!Buddy ";
// let text2 = text1.repeat(2);
// console.log(text2);

//----------Replacing String Content-------replaces a specified value with another value in a string
// let text = "Heyy!!!Buddy ";
// let replacedtext = text.replace("Buddy" ,"sunshine");
// console.log(replacedtext);


//--------String split()--------string can be converted to an array with the split() method
// let text1 = "Heyyy!!!Buddy";
// let text2 = text1.split("")
// console.log(text2);




// *******OPERATORS******* 

// let a=45;
// let b=4;
// console.log((a**b))

// ----------------ARITHMETIC OPERATOR-----------
// let a = 8
// let b = 2
// let d = a%b 
// console.log(d);

//-------NESTED-IF-ELSE ------
// let a = 50
// let b = 500
// if (a >100 ){
//   console.log("a is big of 100");
// }
// if (a >100 ){
//   console.log("a is small of 100");
// }else{
//   console.log("a is big ");
// }

//--------NESTED-IF-ELSE-----------
// if (a==b){
//   if (a===b){
//     console.log("true");
//   }else{
//     console.log("wrong");
//   }
// }else{ 
//   console.log("false");
// }


// let a = 5
// if ( a > 50  ){
//   console.log(" 1 ");
// }else if ( a > 40 ){ 
//   console.log("2");
// }else if ( a>=5){
//   console.log("3");
// }

//*************EVEN/ODD PROGRAM*********** */
// let a = 9 
// let remainder = (a % 4)

// if(remainder == 0){
//   console.log("a is an even");
// }else{
//   console.log("a is odd");
// }

//loop
// for(var a = 1; a<=100; a++){
//   if(a % 2 == 0){
//     console.log(a);
//   } 
//     }

 

// ***************LOOPS********************

// ----------------for loop -----------------------

// let arr = [1,3,4,54,5]
// for (let i = 0; i < arr.length ; i++) {
//  console.log(i+":"+arr[i]);
//  console.log(i);
// }

//---------WHILE LOOP---------------
// let i = 10
// while (i>1) {
//   console.log(i);
//   i--
// }



//----------FOR IN LOOP------------
// let arr = [11,21,31,4,5,6,7,8,9,0]
// for (const index in arr) {
//   console.log(index+":"+arr[index]);
// }

//---------FOR IN LOOP-----------
// let obj = { 
//   name : "Harjot",
//   role: "developer",
//   age : 18
// }
// for (let key  in obj) {
//   console.log(`${key}: ${obj[key]}`);
// }

//------FOR-IN-LOOP-------------
// let obj = {
//   Jot : "80",
//   Nav : "86",
//   Dev : "78"
// }
// for(let a in obj){
// console.log("Marks of " + a +" are " + obj[a]);
// }

//------FOR-OF-LOOP------

// for(let b of "JOT SHARMA"){
//   console.log(b);
// }

//----------STAR PATTERN PROGRAM BY FOR-LOOP----------------------

// for(let i=1; i<=5; i++){
   
//   for(let j=1; j<=i; j++){
//     console.log("*")
//     // document.write("*");
//   }
//   // document.write("<br/>");
//   console.log("<br/>");
// }

// let n = 5;
// let string = "";
// for (let i=1; i<=n; i++) {
//   for(let j=0; j<n-i; j++){
//     string += " ";
//   }
//   for(let k=0; k<i; k++){
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);

// let n = 5;
// let string = "";
// for (let i = 1; i <= n; i++) {
//   // printing spaces
//   for (let j = 0; j < n - i; j++) {
//     string += " ";
//   }
//   // printing star
//   for (let k = 0; k < i; k++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);

// const n =5;
// let str = ''
// for(let i=1; i<=5; i++){
   
//   for(let j=1; j<=i; j++){
//     str += '*'
//   }
//    str += '\n'
//   console.log(str);
// }

//********FUNCTION*********** 
// function fubnc (r,y) {
// console.log("jrijhfdhruj");
  
// }
// fubnc()
// let func = ()=>console.log("dfijgoir");
// func()

// //********FOR-EACH-LOOP******* */
// let arr = [1,2,3,4,5,6,767,7887,8,9]
// arr.forEach((value , index,arr)=>{
//   console.log(`value is ${value *4} index is ${index} arr is ${arr}`);
// })

// let  newarr = arr.map((value  , index)=>{
//   return value*4
  
// })

//27june

// console.log(newarr);
// console.log(document);

// let first = document.getElementById("first")
// let btn= document.getElementById("btn")

// console.log(first);
// first .style.color = "black"
// first .style.backgroundColor = "lightpink"

// let func = ()=>{
//   let newele = document.createElement("p")

// newele.innerText = "this is newe element"
  
// first.appendChild(newele)
// }

// btn.addEventListener("click", ()=>{
//  we
  
// } )
// btn.addEventListener("click", ()=>{
//   let newele = document.createElement("p")

//   newele.innerText = "this is newe element"
    
//   first.appendChild(newele)
  
// } )
function myFunction(event) {
  let value= event.which;
let val = document.getElementById("inp").innerHTML= value
console.log(val);
}
// myFuncti/.on("g")
// setTimeout(()=>
//   {console.log("1")

// },3000)

// setTimeout(() => {
//   console.log("2");
// }, 10);
// setTimeout(() => {
//   console.log("3");
// }, 100);
// console.log("4");

// setInterval(() => {
//   console.log("2");
// }, 3000);
// console.log("g");

let promise = new Promise((resolve, reject)=>{
  success= false
  if(success){
    resolve("promise is resolve")
  }else{ 
    reject("prpomise is rejected")
  }
})

promise.then((result)=>{
  console.log(result);
}).catch((error)=>{
  console.log(error);
})