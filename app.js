const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const header = document.querySelector(".header");
const output = document.querySelector(".output");
const buttonBox = document.querySelector(".button-box");
const toggle = document.querySelector(".toggle");


const body = document.body

one.addEventListener("click", () => {
    if ('input[value=1]:checked') {
        body.classList.remove("body-two");
        body.classList.remove("body-three");
        header.classList.remove("header-two");
        output.classList.remove("output-two");
        currentOperandText.classList.remove("current-operand-two");
        previousOperandText.classList.remove("previous-operand-two");
        buttonBox.classList.remove("button-box-two");
        deleteButton.classList.remove("delete-two");
        resetButton.classList.remove("reset-two");
        equalButton.classList.remove("equal-two");
        toggle.classList.remove("toggle-two");
        buttons.forEach(button =>{
            button.classList.remove("buttons-two");
        });

    }
});

two.addEventListener("click", () => {
    if ('input[value=2]:checked') {
        body.classList.add("body-two");
        body.classList.remove("body-three");
        header.classList.add("header-two");
        output.classList.add("output-two");
        currentOperandText.classList.add("current-operand-two");
        previousOperandText.classList.add("previous-operand-two");
        buttonBox.classList.add("button-box-two");
        deleteButton.classList.add("delete-two");
        resetButton.classList.add("reset-two");
        equalButton.classList.add("equal-two");
        toggle.classList.add("toggle-two");
        buttons.forEach(button =>{
            button.classList.add("buttons-two");
        });
       

    }
});

three.addEventListener("click", () => {
    if ('input[value=3]:checked') {
        body.classList.add("body-three");
    }
});

class Calculator {
constructor(previousOperandText, currentOperandText){
    this.previousOperandText = previousOperandText
    this.currentOperandText = currentOperandText
    this.clear()
}
   
clear(){
    this.previousOperand = ''
    this.currentOperand = ''
    this.operation = undefined
}

delete(){
    this.currentOperand = this.currentOperand.toString().slice(0, -1)
}

appendNumber(number){
    if(number === '.' && this.currentOperand.includes('.')){
        return
    }
    this.currentOperand = this.currentOperand.toString() + number.toString()
}

chooseOperation(operation){
    if(this.currentOperand === ''){
        return
    }
    if(this.previousOperand !== ''){
        this.compute()
    }

    this.operation = operation
    this.previousOperand = this.currentOperand
    this.currentOperand = ''
}

compute(){
    let computation
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);
    if(isNaN(prev) || isNaN(current)){
        return
    }

    switch (this.operation) {
        case '+':
            computation = prev + current
            break;

            case '-':
                computation = prev - current
                break;

                case 'x':
                    computation = prev * current
                    break;

                    case '/':
                        computation = prev / current
                        break;
                          default:
                              return
    }

    this.currentOperand = computation
    this.operation = undefined
    this.previousOperand = ''
} 

getDisplayNumber(number){
    const stringNumber = number.toString();
    const integerDigits = parseFloat(stringNumber.split('.')[0]);
    const decimalDigits = stringNumber.split('.')[1];
    let integerDisplay 
    if(isNaN(integerDigits)){
        integerDisplay = ''
    }else{
        integerDisplay  = integerDigits.toLocaleString('en', {maximumFractionDigits:0})
    }
    if(decimalDigits != null){
      return  `${integerDisplay}.${decimalDigits}`
    }else{
     return   integerDisplay
    }

}

updateDisplay(){
    this.currentOperandText.innerText = this.getDisplayNumber( this.currentOperand)
    if(this.operation != null){
            this.previousOperandText.innerText = 
            `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
    }else{
        this.previousOperandText.innerText = ''
    }

}

}

const previousOperandText = document.querySelector('[data-previous-operand]');
const currentOperandText = document.querySelector('[data-current-operand]');
const buttons = document.querySelectorAll('[data-number]');
const operationsButton = document.querySelectorAll('[data-operation]');
const deleteButton = document.querySelector('[data-delete]');
const resetButton = document.querySelector('[data-all-clear]');
const equalButton = document.querySelector('[data-equals]');

const calculator = new Calculator(previousOperandText, currentOperandText)



buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay()
    });
});

operationsButton.forEach( button => {
    button.addEventListener("click", (e) => {
      calculator.chooseOperation(button.innerText);
      calculator.updateDisplay()
    });
});


equalButton.addEventListener("click", () => {
calculator.compute();
calculator.updateDisplay()

});


deleteButton.addEventListener("click", () => {
calculator.delete();
calculator.updateDisplay();
});

resetButton.addEventListener("click", () => {
calculator.clear();
calculator.updateDisplay();

});



// getDisplayNumber(number){
// const stringNumber = number.toString();
// const interDigits = parseFloat(stringNumber.split('.')[0]);
// const decimalDigits = stringNumber.split('.')[1];
// let interDisplay
// if(isNaN(interDigits)){
// interDisplay = ''
// }else{
// interDisplay = interDigits.toLocaleString('en', {maximumFractionDigits:0})
// }

// if(decimalDigits != null){
// return `${interDisplay}.${decimalDigits}`
// }else{
// return interDisplay
// }

// }

// updateDisplay(){
//     this.currentOperandText.innerText = this.getDisplayNumber(this.currentOperand) 
// if(this.operation != null){
// this.previousOperandText.innerText =
// `${this.getDisplayNumber(this.previousOperand)}  ${this.operation}`
// }else{
// this.previousOperandText.innerText = ''
// }
// }
