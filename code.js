const numberButtons = document.querySelectorAll('button-numeros');
const operationButtons = document.querySelectorAll('[button-operador]'); 
const equalsButton = document.querySelectorAll('[button-valor-final]');
const deleteButton = document.querySelectorAll('[button-deletar]');
const allClearButton = document.querySelectorAll('[button-limpa]')
const currentOperandTextElement = document.querySelectorAll(
    '[data-current-operand]'
    );
const previusOperandTextElement = document.querySelectorAll(
    '[data-previous-operand]'
);

class calculator {
     constructor(currentOperandTextElement, previusOperandTextElement) {
         this.previusOperandTextElement = previusOperandTextElement ;
         this.currentOperandTextElement = currentOperandTextElement ;

     }
     clear(){
         this.currentOperandTextElement = ''; 
         this.previusOperandTextElement = ''; 
         this.operation = undefined ;
     }
     updateDisplay(){
         this.previusOperandTextElement.innerText = this.previusOperand ; 
         this.currentOperandTextElement.innerText = this.currentOperand ; 
     }
}

const calculator = new calculator(
    previusOperandTextElement, 
    currentOperandTextElement
); 

allClearButton.addEventListener('click', () => {
    calculator.clear(); 
    calculator.updateDisplay(); 
}); 
