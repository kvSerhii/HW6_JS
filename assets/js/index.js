"use strict";

/* const group = { 
    title: "our class",
        students: ["Vlad", "Sasha", "Petya"],

        logOurGroup() {
            this.students.forEach((item) => {
                        console.log(`${this.title}: ${item});
        });
    }
}

function logTitle() {
    console.log(this.title);

    const func=function (item) {
        console.log(`
                                $ {
                                    this.title
                                }: $ {
                                    item
                                }
                                `);};
        const funcWithFixedThis=func.bind(this);
        this.students.forEach(funcWithFixedThis);
            }

            group.logTitle = logTitle;


            group.logTitle(); */

/* //Palindrome check function
function isPalindrome(string) {
    const strReverse = string.toLowerCase()
        .replace(/-/g, '')
        .split("")
        .reverse()
        .join("");
    const strPrep = string.toLowerCase().replace(/ /g, "");
    return strReverse === strPrep;
}

console.log(isPalindrome("racecar"));
// console.log(isPalindrome("not-a-palindrome")); */

/* // 
const nestedObject = {
    item: {
        person: {
            name: "Test",
            age: '25',
            position: {
                company: "Test Company",
                job: "test222 job",
            }
        },
        person2: {
            name: "Te2st",
            age: '25',
            position: {
                company: "Test Company",
                job: "test222 job",
            },
        },
    },
};

// Destructurization
//bad
/* const {
    item
} = nestedObject;

const {
    person
} = nestedObject;
 */

//good
// const {
//     item: {
//         person2: {
//             position: renamedPos // rename position
//         },
//     },
// } = nestedObject;

// console.log("nestedObj", nestedObject);
// console.log("person2 position", renamedPos);

// arrays destruction with bug
// const arr = [item, nestedObjectItem, "testPrimitive"];
// console.log(arr);

// const [element, nestedElement, primitiveFromArray, undef = 4000] = arr;

// console.group('Arr destructured');

// console.log(element);
// console.log(nestedElement);
// console.log(primitiveFromArray);
// console.log(undef);

// console.groupEnd();

/* const options = {
    item: "test",
    array: [1, 2, 34, 5],
    test: 'log',
}

function logFunction({
    item = 500,
    array = ['empty'],
    test = null
} = {}) {

    console.log(item, array, test);
}

logFunction(); */

// Practice
// 1. Нужно написать функцию,принимающую строкув качестве аргумента
// и возвращающуюколичество гласниых, которые содержаться встроке.
// "а", "е", "і", "о"

/* function howMuchМowels(string) {
    const newString = string.split("");
    let amount = 0;
    let len = newString.length;

    for (let i = 0; i < len; i++) {
        switch (newString[i]) {
            case "a":
                amount++;
                break;
            case "e":
                amount++;
                break;
            case "i":
                amount++;
                break;
            case "o":
                amount++;
                break;
        }
    }
    return amount;
}

// let str = "kjhdfsgjkjloidhsaf";
let str = "iioioioiede";

console.log(howMuchМowels(str)); */

// 2
/* function outputNums(num) {
    for (let i = 0; i < num; i++) {
        if ((i % 3 === 0) && (i % 5 === 0)) {
            console.log("fizzbuzz");
        } else if (i % 5 === 0) {
            console.log("buzz");
        } else if (i % 3 === 0) {
            console.log("fizz");
        } else {
            console.log(i);
        }
    }
    return 0;
}
let num = 100;

outputNums(num); */

// 3
/* function avg(...rest) {
    let len = rest.length;
    let sum = 0;
    for (let i = 0; i < len; i++) {
        sum += Number(rest[i]);
    }
    return sum;
}
console.log(avg(1, 2, 3, 4, 5, 6)); */

// 4
function addNum(n) {
    let num = n;
    let num1 = 0;

    return function addNumNest(num = n) {
        let num1 = 0;
        num1 += num;
        return num1 + num1;
    };
}

let res = addNum(3);
res = addNum(15);
console.log(res());
//console.log(res); // выведит саму функцию, а не результат

/* // 5
const operation = (num1, num2, fn) => fn(num1, num2);
const fn = (numA, numB) => numA + numB;
console.log(operation(3, 3, fn));
 */

// 6
// const object1 = {
//     function method1() {};

// }

// getters & setters

/* const user = {
    firstName: "Test",
    lastName: "test",

    get fullName() {
        return `${this.firsttName} ${this.lastName}`;
    },

    set fullName(newFullName) {
        const [firstName, lastName] = newFullName.split(" ");

        this.firstName = firstName;
        this.lastName = lastName;
    },
}; */