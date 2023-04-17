// const startGameBtn = document.getElementById('start-game-btn');

// function game() {
//     console.log(`start game...`);
// }
// game();'//
//-----------------------------------//

// startGame(); // throwing reference error : can't use before declaring the function but
// BUT IN ABOVE CASE WE CAN USE
// const startGame = function game() {
//     console.log(`start game...`);
// };
// startGame(); //-->>we can store function in any object like above and
//-->>CALLED BY NEWLY ASSIGNED OBJECT
//-->>(we can also store functions in objects which essentially stores
//the object in an object I guess but an
//object which can be executed as a function,)
//-------------------------------------//
// const start

//----------------------------------------//


// startGameBtn.addEventListener('click', game);


// console.log(typeof game); //-->> type is function
// console.dir(game); //-->> function is an object in JS

// const person = {
//     name: `max`,
//     greet: function greet() {
//         console.log(`hello there...`);
//     }
// };
// console.log(person.name);
// person.greet();
//-----------------------------//

//ANONYMOUS FUNCTION------>>>

// (function () {
//     console.log(`start game...`);//The function without name id known as anonomus function
// })(); //-->>self-executing function.Anonyms function:

// Game = function () {
//     console.log(`start game...`);//The function without name id known as anonomus function
// };
// Game();
//-------------------------------------//

//--->>ARROW FUNCTION----------//

// const add1 = function (a, b) {
//     return a + b;
// }
// const add2 = (a, b) => a + b; //ALWAYS RETURN AFTER ARROW
//(BOTH ARE SAME RESULT ONE IS ANONYUMS FUNCTION AND OTHER IS ARROW FUNCTION)

//1) Default syntax:
// const add = (a, b) => {
//     const result = a + b;
//     console.log(result);
//     return result; // like in "normal" functions, parameters and return statement are OPTIONAL!
// };
// add();

// //2) Shorter parameter syntax, if exactly one parameter is received:
// const log = message => {
//     console.log(message); // could also return something of course - this example just doesn't
// };
// log("hi there")

// //3) Empty parameter parentheses if NO arguments are received:
// const greet = () => {
//     console.log('Hi there!');
// };
// greet();

// //4) Shorter function body, if exactly one expression is used:
// const add1 = (a, b) => a + b;
// add1(3, 5);
// console.log(add1);

// //5) Function returns an object (with shortened syntax as shown in 4)):
// const loadPerson = pName => ({ name: pName });
//----------------------------------------------------//

//--->>DEFAULT ARGUMENTS IN FUNCTION-->>>==//

// Syntax
// function fnName(param1 = defaultValue1, ..., paramN = defaultValueN)
// { /* ... */ }
//EX:1-->>
// function multiply(a, b = 1) {
//     return a * b
// }

// multiply(5, 2)      // 10
// multiply(5)             // 5
// multiply(5, undefined)  // 5


// //EX:2-->>
// function multiply(a, b) {
//     b = (typeof b !== 'undefined') ? b : 1
//     return a * b
// }

// multiply(5, 2)  // 10
// multiply(5)     // 5

//---------------------------------------------//

//----------REST------------------//

// const sumUp = (...number) => { //Three dots are REST OPERATOR(IT'S MAKE ARRAYS INSIDE THE FUNCTION)
//const sumUp = (...number,a) -->>if we define any variable after rest operator then ti's showing error
//const sumUp = (a,b,c...number)-->>BUT YOU CAN WRITE THIS
//     let sum = 0;
//     for (const num of number) {
//         sum += num;
//     }
//     return sum;
// };

// const sub = function () {
//     let sum = 0;
//     for (const num of arguments) { //it's also build like arrays but not an array(DON'T USE THIS)
//         sum -= num;
//     }
//     return sum;
// }

// console.log(sumUp(1, 5, 7, -4, 6, -8));
// console.log(sumUp(1, 5, 7, -4, 6, -8, 8, -41, 76));
// console.log(sub(1, 5, 7, -4, 6, -8, 8, -41, 76));

//-----------------------------------------------------------//

//-----------CREATING FUNCTION INSIDE A FUNCTION------------------//

// const sumup = (a, b, ...numbers) => {
//     const validateNumber = (number) => {
//         return isNaN(number) ? 0 : number;
//     };
//     let sum = 0;
//     for (const num of numbers) {
//         sum += validateNumber(num);
//     }
//     return sum;

// };
// console.log(sumup(1, 5, 7, "kuvh" - 4, 6, -8));
// console.log(sumup(1, 5, 7, 1, - 4, 6, -8));
//------------------------------------------------------//

//-------------CALL BACK FUNCTION----------------//




//-------------------------------------------------//

//--------------Bind()---------------------------//

/*Function Borrowing
With the bind() method, an object can borrow a method from another object.

This example creates 2 objects (person and member).

The member object borrows the fullname method from the person object:
<!DOCTYPE html>
<html>
<body>

<h1>JavaScript Function bind()</h1>

<p>This example creates 2 objects (person and member).</p>
<p>The member object borrows the fullname method from person:</p>

<p id="demo"></p>

<script>
const person = {
  firstName:"John",
  lastName: "Doe",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}

const member = {
  firstName:"Hege",
  lastName: "Nilsen",
}

let fullName = person.fullName.bind(member);

document.getElementById("demo").innerHTML = fullName();
</script>

</body>
</html>

*/

//--------call() & apply()----------------------//
/*Explicit Function Binding
The call() and apply() methods are predefined JavaScript methods.

They can both be used to call an object method with another object as argument.*/

/* 
<!DOCTYPE html>
<html>
<body>

<h1>The JavaScript <i>this</i> Keyword</h1>
<p>In this example <strong>this</strong> refers to person2, even if it is a method of person1:</p>

<p id="demo"></p>

<script>
const person1 = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}

const person2 = {
  firstName:"John",
  lastName: "Doe",
}

let x = person1.fullName.call(person2); 
document.getElementById("demo").innerHTML = x; 
</script>

</body>
</html>



*/








