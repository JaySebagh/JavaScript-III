/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding
"this" will default to reference the window object.

* 2. Implicit Binding
"this" points to what is on the left when the function is called.

* 3. New Binding
"this" points to a new object contructed by using "new"

* 4. Explicit Binding
"this" points to a value using call/apply/bind

*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function example1() {
    console.log(`the principle is ${ex1num}`)
}

const user1 = {
    ex1num: 1
}

// example1()   will be undifined

window.ex1num = 19

function example1() {
    console.log(`the principle is ${this.ex1num}`)
}

// Principle 2

// code example for Implicit Binding

let user2 = {
    example2: "principle 2",
    test2() {
        alert(`example of ${this.example}`)
    }
}

user2.test2()

// Principle 3

// code example for New Binding

function User3 (name, number) {
    this.name = name
    this.number = number
}

let me = new User3('principle', 3)



// Principle 4

// code example for Explicit Binding

function example4 () {
    alert (`example of ${ex2}`)
};

let user4 = {
    ex2: 'principle 4'
}

example4.call(user4);