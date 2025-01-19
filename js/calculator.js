const calculatorBtn = document.querySelector('.calculatorButtons');
const display = document.querySelector('.calculatorDisplay');
const equalsOperator = document.querySelector('.equals');

let firstNumber ="";
let operatorSelected = "";
let secondNumber = "";
let result;


function addOperator(num1, num2)
{

}

function minusOperator(num1, num2)
{

}

function divideOperator(num1, num2)
{

}
function multiplyOperator(num1, num2)
{

}



console.log(firstNumber);

equalsOperator.addEventListener('click', ()=>{
    
});

calculatorBtn.addEventListener('click', (e)=>{
    let target = e.target;


    if(target.classList.contains('number'))
    {
        let btnValue = target.id;
        if(!operatorSelected)
        {
            firstNumber += btnValue;
            console.log(firstNumber);
            display.textContent = firstNumber;
        }
        else
        {
            secondNumber +=btnValue
            display.textContent = secondNumber;

        }

    }
    else if(target.classList.contains('operators'))
    {
        let operator = target.id;
        operatorSelected = operator;

        console.log(operatorSelected);
    }
  
});

