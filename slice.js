

var slice1 = document.querySelector('.slice-demo');  
slice1.addEventListener('click', xyz);

  function xyz(){
    const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];

    console.log("before slice - "+fruits);
        // At position 2, add 2 elements: 
    
    console.log("After slice - "+ fruits.slice(1, 3));
  };
