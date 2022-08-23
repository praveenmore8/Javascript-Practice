

var parent = document.querySelector('#p1');  
parent.addEventListener('click', function(){  
  console.log("Parent function in bubbling");  
});  

var child = document.querySelector('#c1');  
child.addEventListener('click', function(){  
  console.log("Child function in bubbling");  
});  

    var parent = document.querySelector('#p2');  
    var child = document.querySelector('#c2');  
  
    parent.addEventListener('click', function(){  
      console.log("Parent Function in capturing");  
    },true);  
    child.addEventListener('click', function(){ 
      console.log("Child Function in capturing");  
    });  
