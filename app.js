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

// const previousOperandText = document.querySelector('[data-previous-operand]');
// const currentOperandText = document.querySelector('.current-operand');

const previousOperandText = document.querySelector('[data-previous-operand]');
const currentOperandText = document.querySelector('[data-current-operand]');
const buttons = document.querySelectorAll('[data-number]');
const operationButton = document.querySelectorAll('[data-operation]');
const deleteButton = document.querySelector('[data-delete]');
const resetButton = document.querySelector('[data-all-clear]');
const equalButton = document.querySelector('[data-equals]');

// const calculator = new Calculator(previousOperandText, currentOperandText)





buttons.forEach(button => {
button.addEventListener("click", (e)=>{
 currentOperandText.innerText += e.target.innerText 

});
});

operationButton.forEach(opb => {
  opb.addEventListener("click", (e)=>{

  });
  });

  deleteButton.addEventListener("click", () => {


  });

  resetButton.addEventListener("click", () => {
calculator.clear()


  });


   equalButton.addEventListener("click", () => {
console.log (compute(1, 2))

  });




  function appendNumber () {

    // currentOperandText.innerText = 

  }

  function operation () {

  }

  function compute(){
    let computation
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);
    if(isNaN(prev) || isNaN(current)){
        return
    }
    
    switch(this.operation){
        case '+':
            computation = prev + current
            break
            case '-':
                computation = prev - current
                break
                case '*':
                    computation = prev * current
                    break
                    case '÷':
                        computation = prev / current
                        break
    
                        default:
                            return
    
    }
    
    // this.currentOperand = computation
    // this.operation = undefined
    // this.previousOperand = ''
    
    }