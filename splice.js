

var splice1 = document.querySelector('.splice-demo');  
splice1.addEventListener('click', xyz);

  function xyz(){
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    console.log("before splice - "+fruits);
        // At position 2, add 2 elements: 
    fruits.splice(2, 0, "Lemon", "Kiwi");
    console.log("After splice - "+fruits);
  };
