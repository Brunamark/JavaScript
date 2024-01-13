let cpf = '705.484.450-52';
let cpfEdited = cpf.replace(/\D+/g, '');
let cpfArray = Array.from(cpfEdited);
let sum = 0;
const verifyingFirstDigit = cpfArray.reduce(function(acc,cur,idx){
        if(idx<9)
            acc+=cur*(10-idx);
        if(idx===8){
            acc = 11 - (acc % 11);
            if(acc>9)
                acc = 0;
        }
        return Number(acc);
    

},0); // this 0 guarantee that the cur is having the first array value.
sum = 0;
const verifyingSecondDigit = cpfArray.reduce(function(acc,cur,idx){
    if(idx<10)
        sum+=cur*(11-idx);
    if(idx==9){
        sum = 11 - (sum % 11);
        if(sum>9)
            sum = 0;
    } 
    return Number(sum);

},0); // this 0 guarantee that the cur is having the first array value.
function verifyingCPF(firstDigit, secondDigit, array){
    const size =  array.length;
    if(Number(array[size-2]) === firstDigit && Number(array[size-1]) === secondDigit){
        console.log("CPF is valid.");
        return true;
    }
    else{
        console.log("CPF is not valid.");
        return false;  
    }   
}

verifyingCPF(verifyingFirstDigit,verifyingSecondDigit,cpfArray);
