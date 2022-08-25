

var dest1 = document.querySelector('.dest-demo');  
dest1.addEventListener('click', xyz);

  function xyz(){
   let a, b;
   [a, b]=[32, 43];
   console.log(a,b);

   [a,b,c,...d]=[1,2,3,4,5,6,7,8,9];
   console.log(a, b, c, d);
   
   console.log("Array Destructuring ->");
   const fruits=['apple', 'banana', 'mangoes','orange'];
   [a,b,...c] = fruits;
   console.log("a - "+a,"b - "+ b,"c - "+ c);

   console.log("Object Destructuring-->");
   const car = {
    model : "Mustang",
    price : 5000000,
    average : 20,
    color : "Yellow",
    start : function(){ console.log('started'); }
   }
   const {model, price, average, color } = car;
   console.log("Model - "+ model,",Price - "+  price,",Average - "+  average);
}