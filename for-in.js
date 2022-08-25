var forin1 = document.querySelector('.for-in-demo');
forin1.addEventListener('click', print1);

function print1() {
    let obj = {
        firstname: "A",
        lastname: "P",
        age: 25,
        email: "AP@gmail.com"
    };

    for (var key in obj) {
        console.log(key + " - " + obj[key]);
    }
}
