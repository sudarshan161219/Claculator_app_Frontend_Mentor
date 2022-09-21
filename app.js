const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const body = document.body

one.addEventListener("click", () => {
    if ('input[value=1]:checked') {
        body.classList.remove("body-two");
        body.classList.remove("body-three");
    }
});

two.addEventListener("click", () => {
    if ('input[value=2]:checked') {
        body.classList.add("body-two");
        body.classList.remove("body-three");
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

    if(this.previousOperand != ''){
        this.compute()
    }
this.operation = operation
this.previousOperand = this.currentOperand
this.currentOperand = ''
}

compute(){
let computation
let prev = parseFloat(this.previousOperand) 
let current = parseFloat(this.currentOperand)
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
           case '*':
        computation = prev * current
        break;
           case '÷':
        computation = prev / current
        break;

    default:
        return
        
}

this.currentOperand = computation
this.previousOperand = ''
this.operation = undefined

}


getDisplayNumber(number){
const stringNumber = number.toString();
const interDigits = parseFloat(stringNumber.split('.')[0]);
const decimalDigits = stringNumber.split('.')[1];
let interDisplay
if(isNaN(interDigits)){
    interDisplay = ''
}else{
    interDisplay = interDigits.toLocaleString('en', {maximumFractionDigits:0})
}

if(decimalDigits != null){
    return `${interDisplay}.${decimalDigits}`
}else{
    return interDisplay
}

}

    updateDisplay(){
        this.currentOperandText.innerText = this.getDisplayNumber(this.currentOperand) 
if(this.operation != null){
this.previousOperandText.innerText =
`${this.getDisplayNumber(this.previousOperand)}  ${this.operation}`
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



