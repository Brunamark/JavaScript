class Cpf{
    constructor(cpf){
        this.cpf = Array.from(cpf.replace(/\D+/g, ''));
    }
    validationCpf(){
        this.firstDigitValidation();
        this.secondDigitValidation();
        this.validationDigitCpf();
        this.consoleValidationResponse()
    }
    firstDigitValidation(){
        return this.cpf.reduce(function(acc,cur,idx){
            if(idx<9)
                acc+=cur*(10-idx);
            if(idx===8){
                acc = 11 - (acc % 11);
                if(acc>9)
                    acc = 0;
            }
            return Number(acc);
    },0)}; // this 0 guarantee that the cur is having the first array value and acc is 0. 
    
    secondDigitValidation(){
        return this.cpf.reduce(function(acc,cur,idx){
            if(idx<10)
                acc+=cur*(11-idx);
            if(idx==9){
                acc = 11 - (acc % 11);
                if(acc>9)
                    acc = 0;
            } 
            return Number(acc);
    },0);} // this 0 guarantee that the cur is having the first array value.
    validationDigitCpf(){    
    const size =  this.cpf.length;
    return (
        Number(this.cpf[size-2]) === this.firstDigitValidation() &&  
        Number(this.cpf[size-1]) === this.secondDigitValidation()
    );}
    consoleValidationResponse(){
        if(this.validationDigitCpf())console.log("CPF is valid.");
        else console.log("CPF is not valid.");
    }      
}
const person1 = new Cpf('705.484.450-52');
console.log(person1);
person1.validationCpf();