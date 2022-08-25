
var map1 = document.querySelector('.map-demo');
map1.addEventListener('click', m1);

var filter1 = document.querySelector('.filter-demo');
filter1.addEventListener('click', f1);

var reduce1 = document.querySelector('.reduce-demo');
reduce1.addEventListener('click', r1);


function m1(){
    const num1 = [1, 2, 3, 4];
    console.log("Array Before - ");
    console.log(num1);
const doubled = num1.map(item => item * 2);
console.log("Array After - ");
console.log(doubled); // [2, 4, 6, 8]
}

function f1(){
    const num2 = [1, 2, 3, 4];
    console.log("Array Before - ");
    console.log(num2);
const evens = num2.filter(item => item % 2 === 0);
console.log("Array After - ");
console.log(evens); // [2, 4]
}

function r1(){
    const num3 = [1, 2, 3, 4];
    console.log("Array Before - ");
    console.log(num3);
const sum = num3.reduce(function (result, item) {
  return result + item;
}, 0);
console.log("Array After - ");
console.log(sum); // 10
}