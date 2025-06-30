let num1 = '';
let num2 = '';
let ope  = '';//the operater
let n1sel = false;

function add(){
let total = parseFloat(num1)+parseFloat(num2);
return total;
}
function subtract(){
    let total = parseFloat(num1)-parseFloat(num2);
    return total;
}
function multiply(){
    let total = parseFloat(num1)*parseFloat(num2)
    return total;
}
function divide(){
    let total = parseFloat(num1)/parseFloat(num2)
    return total;
}

/*this is called whrn the user hits the equal sign*/
function operate(){

    if (num2 == "0"){
        alert("dont divide by zero")
        onclear();
    }else if (num1==''|num2==''|''){

        alert("you should have a veriable and operater and another variable")
    }else{
        if (ope =="+"){
        total = add();
        }else if(ope == "-"){
        total = subtract();
        }else if(ope == "*"){
        total = multiply();
        }else if(ope == "/"){
        total = divide();
        }
        document.querySelector('h1').textContent = total.toFixed(2);
        return total.toFixed(2);
    }
}

function numpadclick(num){
    if(ope == ''){
        num1 += num;
        console.log(num1)
        document.querySelector('h1').textContent = num1;
    }
    else{
        num2 += num;
        console.log(num2);  
        document.querySelector('h1').textContent = num1+ope+num2;        
    }
    console.log(ope);
}
function opclick(oper){
    if(ope !=''){
         num1 = operate()
         ope = oper;
        document.querySelector('h1').textContent = num1+ope;  
    }else{
         ope = oper;
         document.querySelector('h1').textContent = num1+ope; 
    }
    console.log(ope)
}

function onclear(){
   
  
    num1 = '';
    num2 = '';
    ope = '';
    console.log(ope)
    document.querySelector('h1').textContent = "000";

}