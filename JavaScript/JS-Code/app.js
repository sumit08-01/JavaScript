function add(num1, num2) {
  // making a function
  const result = num1 + num2;
  //   alert(`The result is ` + result);
  return result;
}
// console.log(add(1, 3)); // 4  // call a function

// const res = add(3, 6);
// console.log(res); // 9

// addBtn.addEventListener("click", add(1, 4));

// alert("Hello sumit");
// --String-- start from there

// console.log('i am sumit');
let html;
html = "this is sumit html and js FILE";
// console.log(html);
// console.log(html.length);
// console.log(html.toLocaleLowerCase());
// console.log(html.toUpperCase());
// console.log(html[1]);
// console.log(html[5]);
// console.log(html.indexOf("s"));
// console.log(html.lastIndexOf("s"));
// console.log(html.charAt(6));
// console.log(html.endsWith("jikajf"));
// console.log(html.includes("ht"));
// console.log(html.substring(1, 6));
// console.log(html.slice(1, 9));
// console.log(str.slice(0, str.length));
// console.log(html.split("*"));
// console.log(html.replace("this", "kuch"));
let f1 = "orange";
let f2 = "apple";
let f3 = `Hello ${f1} <h1> kuch bhi type kr diya</h1>
            <p> i like myself ${f2} </p> and ${f2}`;
console.log(f3);

//--Arrays start from there--//
// const arr = [23,34,34,56];
// arr.push(76);
// arr.pop();
// arr.unshift(2345);
// arr.shift();
// arr.splice(1,3);
// arr.reverse();
// arr.Array

// const fru = ['apple','banna'];
// let fru1 = [1.6,9.4];
// arr.concat(fru1);
// const mixed = ['string',4,9,[4,5,7]];
// const arr1 = new Array(23,23,55,'ija');

// console.log(arr);
// arr[0] = 'sumit';
// console.log(mixed);
// console.log(arr1.length);
//  let value = arr.indexOf(56);
//  console.log(value);

// IF ELSE STATEMENT : --->>>>

// const age = 20;

// if(age==20){  // Double equal check only value
//     console.log('Age is 20')
// }

// else if(age ==65){
//     console.log('age is 64')
// }
// else{
//     console.log('age is 21')
// }

// if( age ==='20'){  //Tripale equal too check value as well as type
//     console.log('age is 20')
// }

// console.log(age==20? 'age is 20' : 'age is not 20')

// switch (age) {
//     case 20:
//         console.log('age is 20');
//         break;
//     case 25:
//         console.log('age is 25');
//         break;
//     case 40:
//         console.log('age is 40');
//         break;

//     default:
//         console('age is not define');
//         break;
// }

// LOOPS : ----->>>>>>>

//FOR LOOP-->>
// for(let i=0 ; i<100; i++){
//     console.log(i);
// }

// WHILE LOOP-->>
// let i = 0;
// while (i < 100) {
//     console.log(i);
//     i++;
// }

//DO WHILE LOOP-->>
// let i = 21;
// do {
//     console.log(i + 1);
//     i++;
// } while (1 < 20);

//FOR EACH-->>
// arr = [1, 4, 6, 43, 75, 67];
// arr.forEach(function (element) {
//     console.log(element)
// }
// );

// for (let i = 0; i < arr.length; i++) {
//     const element = console.log(arr[i]);
// }

// let obj = { name: "sumit", age: 34, type: "coder", os: "window" }
// for (const key in obj) {
//     console.log(`The  ${key} of the object is ${obj[key]}`)
// }

///FUNCTION ----------->>>>>>>>>>>>>>>>
// function greet(name, thanks = 'thank you!') { //default value of thanks is thank you!
//     console.log(`happy birthday from ${name} and ${thanks}`)
// }

// function greet(name, thanks = 'thank you!') { // use when you want to return value from the function
//     let msg = (`happy birthday from ${name} and ${thanks}`);
//     return msg;
// }

// let name = 'sumit';
// greet(name, 'thanks for inviting')
// let val = greet(name, 'thanks me later');
// console.log(val);

// const obj = {
//     name: 'sumit',
//     game: function () {
//         return "mario";
//     }
// }
// console.log(obj.game())

//-------->>>>>>
// let c = document.all;

// let a = window;
// window.alert('hallo sumit');
// a = prompt("Enter your number");
// a=confirm('are you sure want to delet');
// console.log(a);

// let a = window.document;
// a = window.innerWidth;
// a = innerWidth;
// a = scrollX;
// a = scrollY;

// let a = location;
// a = location.toString();

// let a = window.history;
// a = length;
// a = history.go;
// a = history.go(-1);
// console.log(a);
//-------------->>

//------DOM (DOCUMENT OBJECT MODULE) ------>>

// element selector:

// 1.single element selector:
// let element = document.getElementById('ID-name');
// element = element.className;
// element = element.childNodes;
// element = element.parentNodes;
// element.style.color = 'red';
// element.innerText = "joiskjig";
// element.innerHTML '<b> my name is sumit</b>';

// let sel = document.querySelector('#myfirst');-->># for ID
//  sel = document.querySelector('.myfirst');-->>. for class
//  sel = document.querySelector('b');

// 2.multi element selector:
// let ele = document.getElementsByClassName('kuch bi');
// ele = document.getElementsByClassName('container');
// ele = document.getElementsByTagName('div');

// Array.from(ele).forEach(element =>{
//    console.log(element);
//    element.style.color = 'blue';
// });

// console.log(ele);

//---------------->>>>>>>>>
// cconsole.log("CHILD PARENT TRAVERSING ");

// let cont = document.querySelector(".no");
// cont = document.querySelector(".container"); //take container through queryselector
// let nodeName = cont.childNodes[1].nodeName;
// let nodeType = cont.childNodes[1].nodeType;
// console.log(nodeName)
// console.log(nodeType)
// Node types
// 1. Element
// 2. Attribute
// 3. Text Node
// 8. Comment
// 9. document
// 10. docType

// console.log(cont.childNodes);// child nodes of div container
// console.log(cont.children);

// let container = document.querySelector("div.container");

// console.log(container.children[1].children[0].children);

// console.log(container.firstChild);
// console.log(container.firstElementChild);

// console.log(container.lastChild);
// console.log(container.lastElementChild);
// console.log(container.children);
// console.log(container.childElementCount); // Count of child elements

// console.log(container.firstElementChild.parentNode);
// console.log(container.firstElementChild.nextSibling);
// console.log(container.firstElementChild.nextElementSibling);
// console.log(container.firstElementChild.nextElementSibling.nextElementSibling);
