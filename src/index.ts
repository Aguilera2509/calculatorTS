import { calculate } from "./calculator.js";

const $keys = document.querySelectorAll<HTMLButtonElement>("[data-number]");
const $operation = document.querySelectorAll<HTMLButtonElement>("[data-operation]");
const $display = document.getElementById("display");
const $displayOperation = document.getElementById("displayOperation");

let calculator = new calculate();

$keys.forEach(el => {
    el.addEventListener("click", e => {
        if(!calculator.newValues){
            $display!.textContent = "0";
            calculator.Clear();
            $display!.textContent = calculator.Display(String(el.textContent));
            calculator.newValues = true;
            return;
        };

        if($display?.textContent === "0"){
            return $display.textContent = calculator.Display(String(el.textContent));
        }else{
            $display!.textContent += calculator.Display(String(el.textContent));
        };
    });
});

$operation.forEach(el => {
    el.addEventListener("click", e => {
        if(el.textContent === "=" && $display!.textContent!.length >= 3){
            $displayOperation!.textContent = `${calculator.previousOperand}  ${calculator.case}  ${calculator.currentOperand}`; 
            let result = calculator.Computing();
            return $display!.textContent = String(result);
        }else if(el.textContent === "C"){
            $display!.textContent = "0";
            return calculator.Clear();
        }else if(el.textContent === "E"){
           return $display!.textContent = calculator.Back(String($display!.textContent));
        }else if(el.textContent === "."){
            return $display!.textContent += calculator.Display(String(el.textContent));
        };
        
        $display!.textContent += calculator.Operation(String(el.textContent));
    });
});