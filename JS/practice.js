//STRING
//----------Template Literal-----------

/*
let text1 = "yuv"
let text2 = "yuvi"
let result = `${text1} is a frend of ${text2}`
console.log(result);
*/

//-------Escape Sentence-----CHARACTER
//1.
/*
let text1 = `JOT\nSHARMA`//new line by /n
console.log(text1);
*/

//2.
// let text=`YUVI\`ZYUUU`
// console.log(text.length);
// console.log(text);


//-----For LOOP-----
/*
let text1 = "shiv"
for(i=0; i<1; i++){
    console.log(text1[0]);
    console.log(text1[1]);
    console.log(text1[2]);
    console.log(text1[3]);

} */

//--------FOR-EACH-LOOP----------------used for modifying that array
// let arr = [0,1,2,3,4,]
// arr.forEach((element) => {
//     console.log(element*element);
// })

//--------ARRAY-FROM---------USED to create an array from any other object(from HtML collection)

// let name = "roha"
// let arr = Array.from(name)
// console.log(arr);

//---------ARRAY-OF-LOOP---------------imp.most used
// let arr=[9,7,8,6,5,4,88,]
// for(let i of arr ){
//     console.log(i)
// }

//-------ARRAY-IN-LOOP-------mostly not in used 
// let arr=[9,7,8,6,5,4,88,]
// for(let i in arr){
//     console.log(arr[i]);
// }


//*******MAP()************ */----Used for creating new array------
// let arr = [8,6,8,2]
// let a = arr.map(( value, index, array)=>{
//     console.log(`value of ${value}, index ${index}, array ${array}`);
//  return value*2+1
// })
// console.log(a);

//_---------filter()-------
// let arr1 = [0,1,1,3,2,4,5,6,7,8,9,10,12,13,14,]
// let arr2 = arr1.filter((a)=>{
//    return a<=10
// }) 
// console.log(arr2)

//----------REDUCE() METHOD-----------
// let arr1 = [0,1,2,3,4,5]   //0+1=1, 1+2=3, 3+3=6, 6+4=10, 10+5=15
// let arr2 = arr1.reduce((a,b)=>{
//     return a+b
// })
// console.log(arr2);
 
alert("Enter the value of u!") //alert
let u = prompt("Enter u here", "600")
u = Number.parseInt(u)
alert("you enetered u of type" + (typeof u))
let write = confirm("Are uhh Sure")
if(write){
    document.write(u)
}
else{
    document.write("Please allow me to write")
}
// document.write(u)