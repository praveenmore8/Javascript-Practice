
// For Event Bubbling
document.querySelector('.grandparent1')
.addEventListener('click',()=>{
  console.log("Grandparent Div");
});

document.querySelector(".parent1")
.addEventListener('click',()=>{
  console.log("Parent Div");
});

document.querySelector(".child1")
.addEventListener('click',()=>{
  console.log("Child Div");
});

// For Event Capturing

document.querySelector('.grandparent2')
.addEventListener('click',()=>{
  console.log("Grandparent Div");
},true);

document.querySelector(".parent2")
.addEventListener('click',()=>{
  console.log("Parent Div");
},true);

document.querySelector(".child2")
.addEventListener('click',()=>{
  console.log("Child Div");
},true);