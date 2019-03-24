// Basic lexical scope example

let outer = 'I am from outer global scope';
console.log(outer); // 'I am from outer global scope'

function globalScope() {
    console.log(outer); // 'I am from outer global scope'
}

// Nested Lexical Scope

function outerFunction() {
    let inner = 'I am in outerFunction';
    function innerFunction() {
        /*
        outer is not available in scope of innerFunciton and therefore the engine goes up and looks
        for outer in outerFunction's scope and does not find it there as well.
        And at last the engine goes to gobal scope and finds it there.
        */
        console.log(outer); 
    }
    innerFunction();
}
outerFunction(); // 'I am from outer global scope'

// shadowing the outer variable

function shadowOuterVariable() {
    let outer = 'global outer being shadowed here';
    console.log(outer); // 'global outer being shadowed here'
}

shadowOuterVariable();

// eval to create scope
function foo(str, b){
    eval(str);
    // evalScope is available in scope of foo after eval executes the string passed to it
	evalScope(1,2); 
	console.log(b);
}

let func = `function evalScope(x,y) {
    console.log(x, y);
}`;

foo(func, 3); 
/* 
    strict mode in javascript restrict the eval to create lexical scope on the fly.
    Instead eval creates it's own scope and does not affect the lexical scope of function
*/
'use strict';
function foo(str, b){
    eval(str);
	evalScope(1,2); 
}
foo(func, 3); //  ReferenceError: evalScope is not defined

// Demo to show that eval is executed in it's own scope while using eval

'use strict';
function foo(str){
    eval(str);
}
let evalStr = `function evalScope() {
        let varInsideEvalScope = 'only accessible here in strict mode';
        console.log(varInsideEvalScope);
    }
    evalScope();`
;

foo(evalStr); // only accessible here in strict mode

'use strict';
function foo(str){
    eval(str);
	evalScope(); // not accessible here
}
let evalStr = `function evalScope() {}`;
foo(evalStr); // ReferenceError: evalScope is not defined


(function IIFE() {
    let a = 12;
    console.log(a);
})();

IIFE(); // ReferenceError