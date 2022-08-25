

var callback1 = document.querySelector('.callback-demo');  
callback1.addEventListener('click', call);

function greet() {
  console.log('Bye P');
}

function sayName(name) {
  console.log('Hello' + ' ' + name);
}

// calling the function

function call()
{
  setTimeout(greet, 2000);
sayName('P');
}


