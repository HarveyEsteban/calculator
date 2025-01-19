const calculatorBtn = document.querySelector('.calculatorButtons');
const display = document.querySelector('.calculatorDisplay');

let firstNumber ="";
let operatorSelected = "";
let secondNumber = "";
let result;


function addOperator(num1, num2)
{
    return Number(num1) + Number(num2);
}

function minusOperator(num1, num2)
{
    return Number(num1) - Number(num2);

}

function divideOperator(num1, num2)
{
    if(num1 == "0" && num2 ==="0")
    {
        return "Error Cannot Divide 0 by 0.... Wag Bobo"
    }
    else
    {
        return Number(num1) / Number(num2);
    }

}
function multiplyOperator(num1, num2)
{
    return Number(num1) * Number(num2);

}



console.log(firstNumber);



calculatorBtn.addEventListener('click', (e)=>{
    let target = e.target;


    if(target.classList.contains('number'))
    {
        let btnValue = target.id;

        if(!operatorSelected)
        {
            firstNumber += btnValue;
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
        
        if(firstNumber && secondNumber && operator !== "=")
        {
            switch (operatorSelected) {
                case "+":
                    result = addOperator(firstNumber, secondNumber);
                    display.textContent = result;
                    firstNumber = result;
                    operatorSelected = operator;
                    secondNumber = "";
                    result ="";
                    break;
        
                case "-":
                    result = minusOperator(firstNumber, secondNumber);
                    display.textContent = result;
                    operatorSelected = operator;
                    firstNumber = result;
                    secondNumber = "";
                    result ="";
                    break;
        
                    case "/":
                result = divideOperator(firstNumber, secondNumber);
                display.textContent = result;
                firstNumber = result;
                operatorSelected = operator;
                secondNumber = "";
                result ="";
                break;
        
                case "*":
                    result = multiplyOperator(firstNumber, secondNumber);
                    display.textContent = result;
                    operatorSelected = operator;
                    firstNumber = result;
                    secondNumber = "";
                    result ="";
                    break;
            
                default:
                    break;
            }
        }
        else if(operator !== "=")
        {
            operatorSelected = operator;
        }
        else if(operator = "=")
        {
            switch (operatorSelected) {
                case "+":
                    result = addOperator(firstNumber, secondNumber);
                    display.textContent = result;
                    break;
        
                case "-":
                    result = minusOperator(firstNumber, secondNumber);
                    display.textContent = result;
        
                    break;
        
                    case "/":
                result = divideOperator(firstNumber, secondNumber);
                display.textContent = result;
                break;
        
                case "*":
                    result = multiplyOperator(firstNumber, secondNumber);
                    display.textContent = result;
                    break;
            
                default:
                    break;
            }
        }
    }
    else if(target.classList.contains('misc'))
    {
        let miscValue = target.id;
        switch (miscValue) {
            case "AC":
                firstNumber = "";
                secondNumber = "";
                operatorSelected ="";
                result = "";
                display.textContent = "";
                break;

            case "+/-":
                if (secondNumber) {
                    // If the user is typing the second number
                    secondNumber = (Number(secondNumber) * -1).toString();
                    display.textContent = secondNumber;
                } else if (operatorSelected) {
                    // If the operator is selected but second number is empty
                    secondNumber = "-";
                    display.textContent = secondNumber;
                } else if (firstNumber) {
                    // If the user is typing the first number
                    firstNumber = (Number(firstNumber) * -1).toString();
                    display.textContent = firstNumber;
                } else if (result) {
                    // If the user is toggling the result
                    result = (Number(result) * -1).toString();
                    display.textContent = result;
                    firstNumber = result; // Update firstNumber to allow chaining
                }
                break;
                

                case "%":
                    if (secondNumber) {
                        // If the user is typing the second number, convert it to a decimal percentage
                        secondNumber = (Number(secondNumber) / 100).toString();
                        display.textContent = secondNumber;
                    } else if (firstNumber && !operatorSelected) {
                        // If the user is typing the first number and no operator is selected
                        firstNumber = (Number(firstNumber) / 100).toString();
                        display.textContent = firstNumber;
                    } else if (result) {
                        // If the user is toggling the result, convert it to a percentage
                        result = (Number(result) / 100).toString();
                        display.textContent = result;
                        firstNumber = result; // Update firstNumber to allow chaining of further operations
                    }
                    break;
        
            default:
                break;
        }
    }
  
});

