const num1 = 0;
const num2 = 0:
const ope  = "";//the operater

function add(num1, num2){
    
let total = num1+num2
}
function subtract(num1, num2){
    let total = num1-num2
}
function multiply(num1, num2){
    let total = num1*num2
}
function divide(num1, num2){
    let total = num1/num2
}

function operate(op,numa,numb){
    if (op =="+"){
        add(numa,numb);
    }else if(op == "-"){
        subtract(numa,numb);
    }else if(op == "*"){
        multiply(numa,numb);
    }else if(op == "/"){
        divide(numa,numb);
    }
}