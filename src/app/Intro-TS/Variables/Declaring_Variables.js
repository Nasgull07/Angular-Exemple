//As in Java Script, we can use let/var/const to declarate a variable
function doSomething() {
    for (var i = 0; i < 3; i++) {
        console.log(i);
    }
    console.log(i);
}
/*
    If we use var, the Output --> 0 1 2 3
    That happens because variables declared with var can be used in the function it has been declared

    If we use let, the Output  --> Error
    Variables declared with let, scope to the nearest program block

*/
var variable; // At this point, "variable" does have type "any". That means that can be whatever.
variable = 9; // number
variable = "Hello"; // string
variable = false; // boolean
variable = [2, "hello", false]; // array
var variable2; // This way, we can assign a type
variable2 = 5;
// variable2 = "hello";  --> That is an error
//We can also assign type to a variable by declarating and assigning a value to it
var variable3 = "hello";
var variable4 = "hello";
// variable4 = 4; --> That is an error
/*----------------------
      enum Concept
------------------------*/
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
console.log(Color.Red + Color.Green + Color.Blue);
//No entiendo para que sirve complementa una explicacion
