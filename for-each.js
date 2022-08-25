
var foreach1 = document.querySelector('.for-each-demo');  
foreach1.addEventListener('click', print);

function print(){
    let nums=[23,4,54,67,34,25];
    
    nums.forEach((n)=>{
        console.log(n)
    });
}
