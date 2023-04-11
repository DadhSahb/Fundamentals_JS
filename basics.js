/*                                                                                     Fundamentals of JS                                                                                                        */
alert("Hello World");
[1, 2].forEach(alert);

/*allowed naming conventions ($ and _ are allowed but variable name cannot starts with digit i-e let 1name,
hypen also not allowed my-name, latin keywords are also allowed.) */
let $ = "hello";
let _ = "world";

/* uppercase constants are used for aliases, otherwise for other constants that's not have fix values
used as camelNaming const pagePreLoad */
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
//

/* Declare two variables: admin and name.
Assign the value "John" to name.
Copy the value from name to admin.
Show the value of admin using alert (must output “John”). */
let admin,
  name = "John";
admin = name;
alert(admin);

/* backtiks are used to embed another string */
let userName = "Hamza";
alert(`the name of the user is, ${userName}!`);

/* prompt function in inverse to alert takes two values as argument prompt(title, [default]); */
let age = prompt("how old are you? ", 18);
alert(`you are ${age} years old`);

/* Confirm Function shows a modal window with two options OK and Cancel */
let _age = confirm("Are you 18 years old?");
alert(_age);

//String Conversion
let value = true;
alert(typeof value);

value = String(value);
alert(typeof value);

//Numeric Conversion: (the numbers in string can do mathematical operations such as alert("6"/"2" = 3))
let str = "123"; //you cannot convert the string other then numeric to number (i-e str = "123a" it will show NaN)
console.log(typeof str);

str = Number(str);
console.log(typeof str);

//Bolean Conversion: Values that are “empty”, like 0, an empty string, null, undefined, and NaN, become false.
console.log(Boolean(1)); // true
console.log(Boolean(0)); //false

console.log(Boolean("0")); // True because empty string will generate false value
console.log(Boolean("")); //  False

/*                                                                                     Mathematical Operators                                                                                                        */

/* Basic Mathematical Operators: There are two types of operators, Uniary and Binary */
let x = 1;
x = -x;
console.log(x); //Uniary

let y = 2;
console.log(x - y); //Binary

console.log(x ** y); // ** used as exponentition -1²= 1

//String Concatination with binary: In String Concatination (+) have some diverse rules then other mathematical operators
console.log("1" + 2); // 12
console.log(1 + 1 + "1"); // 21, if first value is a number then it will taken as number arguement
console.log("2" + 2 + 2); // 222 not 24

//other operators work normal, it consider srting numbers as number input
console.log("6" / "2"); // 3
console.log("4" - "2"); // 2;

//Increment and Decrement work the same unless they are assign to a variable, for example
let counter = 0;
counter++; // 1
++counter; // 2
console.log(counter); // 2

//now if they are assign to a varible

let count1 = 0;
let count2 = 0;
let a = ++count1;
let b = count2++;

console.log(a); // 1
console.log(b); // 0

/* Task for understading
"" + 1 + 0 = "10"
"" - 1 + 0 = -1
true + false = 1
6 / "3" = 2
"2" * "3" = 6
4 + 5 + "px" = "9px"
"$" + 4 + 5 = "$45"
"4" - 2 = 2
"4px" - 2 = NaN
"  -9  " + 5 = "  -9  5"
"  -9  " - 5 = -14
null + 1 = 1
undefined + 1 = NaN
" \t \n" - 2 = -2
*/

/*                                                                      COMPARISONS                                                                                                    */
//Strick Equality and Equality:
console.log(0 == "0"); //true
console.log(0 === "0"); //false because in equality the datatypes are changed and compaired but in strict equality the datatypes are stricktly checked

//The values null and undefined equal == each other and do not equal any other value.
console.log(null == undefined); //true
console.log(null === undefined); //false

/* Task
 5 > 4    true
"apple" > "pineapple"   false
"2" > "12"    true
undefined == null   true
undefined === null  false
null == "\n0\n"     false
null === +"\n0\n"   false
*/

/*
A number 0, an empty string "", null, undefined, and NaN all become false. Because of that they are called “falsy” values.
Other values become true, so they are called “truthy”.
*/

/*
<----- Terniary Operator----->
Terniary operator use two values and first as condidtion let result = condrion ? value1 : value2
*/

let result = x + y < 4 ? "above" : "below";

result = x == y ? "Employee" : x < y ? "Director" : x > y ? "No login" : "";

/* <------------------ FUNCTIONS ---------------------> */

userName = "Hamid";

alert(userName);
showMessage(userName, "Hello", "", "", "", null);

function showMessage(userName, text, ...rest) {
  userName = "dadhsahb";
  if (text === undefined) {
    alert("empty message");
  }
  console.log(rest);
  //other way of checking if the text is empty or not
  text = text || "empty";
  alert(text + " : " + userName);
}

//returning a value in a function
let aged = prompt("What is your age? ", 18);
checkAge(aged);

if (checkAge(aged)) {
  console.log("access granted");
} else {
  console.log("access not granted");
}

function checkAge(aged) {
  if (aged > 18) {
    return true;
  } else {
    return confirm("You are not allowed");
  }
}

// ----------------------------> Function Expression <----------------------------------

//function is represendted in two ways
// 1 function decleration

function sum(x, y) {
  return x + y;
}

// 2 funtion expression

sum = function (x, y) {
  return x + y;
};

// function is a value
let sayhi = function () {
  console.log("hi");
};
alert(sayhi); //it will return the (sayhi) function code because in JS function is a value and it can be assigned to other value as follow

let greet = sayhi; //Please note: there are no parentheses after sayHi. If there were, then func = sayHi() would write the result of the call sayHi() into func, not the function sayHi itself.
greet();
sayhi();

// Call back Functions
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}
function showOk() {
  alert("You agreed");
}
function showCancel() {
  alert("You cancel");
}
ask("You you agree?", showOk, showCancel);

//call back function by creating annonymous function

age = prompt("whats your age", 20);
// debugger;
let welcome;
function checkAge() {
  welcome =
    age < 18
      ? (welcome = function () {
          alert("You are not allowed");
        })
      : (welcome = function () {
          alert("Greetings");
        });
  welcome();
}
checkAge();

//-------------------------> Arrow Function, concise syntax for creating functions <--------------------------

age = prompt("In which year you are born ?", 1997);

welcome =
  age > 2005 ? () => alert("You are not allowed") : () => alert("Greetings");
welcome();

//multiLine Arrow Function

sum = (x, y) => {
  return x + y;
};
alert(sum(2, 5));

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

/*Task: Following task shows the normal function and an arrow function side by side*/
//Normal Function
ask(
  "Do you agree?",
  function () {
    alert("You agreed.");
  },
  function () {
    alert("You canceled the execution.");
  }
);
//Arrow Function
let question = (quest, yes, no) => {
  confirm(quest) ? yes() : no();
};

question(
  "Do you agree",
  () => alert("You Agreed"),
  () => alert("You canceled the execution")
);

/* ----------------------------------------------> Objects <---------------------------------------------------- 
* objects are associative arrays with special features to store key-value-pairs

*/
let user = {
  name: "Hamza",
  age: 27,
  "Likes Birds": true,
};

user["Likes Birds"] = false;

//accessing user object values
alert(user.name);
alert(user["Likes Birds"]); // use square brakets because for multiword properties, the dot access doesn’t work
//dynamically accessing values
let key = prompt("Which property you want to print from user object?", "name");
alert(user[key]);

//-------> computed properties
let fruit = prompt("whats your fav fruit? ", "mango");

let fruitCheck = {
  [fruit]: 5,
};
alert(fruitCheck.mango); //if mango then 5 is assigned, if other value is assigned it will give undefined

//------> "for in" loop, its used to walk over all keys of an object, there exists a special form of the loop: for..in. This is a completely different thing from the for(;;)

for (let key in user) {
  alert(key);
  alert(user[key]);
}
