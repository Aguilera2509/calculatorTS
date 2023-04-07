export class calculate{
    result:number = 0;
    currentOperand:string = "";
    case:string = "";
    previousOperand:string = "";
    newValues:boolean = true;

    Display(value:string):string{
        this.newValues = true;
        this.currentOperand = this.currentOperand + value;
        return value;
    };

    Operation(operator:string):string{
        this.newValues = true;
        if(this.currentOperand === "") return "";
        if(this.previousOperand !== ""){
            this.Computing();
        };
        this.case = operator;
        this.previousOperand = this.currentOperand;
        this.currentOperand = "";
        
        return operator;
    };
    
    Computing():number{
        if(this.case === ""){
            this.Clear();
            return 0; 
        };
        if(isNaN(parseFloat(this.previousOperand)) || isNaN(parseFloat(this.currentOperand))) return 0;

        if(parseFloat(this.previousOperand) === 0  && parseFloat(this.currentOperand) === 0 && this.case === "/"){
            this.currentOperand = String(this.result);
            this.case = "";
            this.previousOperand = "";
            this.newValues = false;
    
            return this.result;
        }

        switch (this.case) {
            case "+":
                this.result = parseFloat(this.previousOperand) + parseFloat(this.currentOperand);
                break;
            case "-":
                this.result = parseFloat(this.previousOperand) - parseFloat(this.currentOperand);
                break;
            case "*":
                this.result = parseFloat(this.previousOperand) * parseFloat(this.currentOperand);
                break;
            case "/":
                this.result = parseFloat(this.previousOperand) / parseFloat(this.currentOperand);
                break;  
            default:
                break;
        };

        this.currentOperand = String(this.result);
        this.case = "";
        this.previousOperand = "";
        this.newValues = false;
        
        if(this.result === Infinity) return 0;

        return this.result;
    };

    Back(display:string):string{
        let modified:string = "";
        for(let index = 0; index < display.length - 1; index++) {
            modified += display[index];
        };
        this.currentOperand = modified;
        return modified || "0";
    };

    Clear(){
        this.case = "";
        this.currentOperand = "";
        this.previousOperand = "";
        this.result = 0;
    };
};