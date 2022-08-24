

var callback1 = document.querySelector('.Spread-operator-demo');
callback1.addEventListener('click', show_array);

var callback1 = document.querySelector('.rest-parameter-demo');
callback1.addEventListener('click', sum1);

const a1 = [1, 6, 4, 9, 3, 5];
function show_array() {
    console.log(...a1);
}

function sum1() {
    function sum(...inputs) {
        console.log(...inputs);
        let total = 0;
        for (let i of inputs) {
            total = total + i;
        }
        console.log(total);

    }
    sum(1, 2, 3, 4, 5);
}