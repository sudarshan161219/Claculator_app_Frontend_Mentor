const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");


const body = document.body

one.addEventListener("click", ()=> {
    if('input[value=1]:checked'){
  body.classList.remove("body-two");
  body.classList.remove("body-three");
    }
});

two.addEventListener("click", ()=> {
    if('input[value=2]:checked'){
  body.classList.add("body-two");
  body.classList.remove("body-three");
    }
});

three.addEventListener("click", ()=> {
    if('input[value=3]:checked'){
  body.classList.add("body-three");
    }
});