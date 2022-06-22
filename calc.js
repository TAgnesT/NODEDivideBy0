function divide(a, b) {
    if(b==0){
        console.log("divide by 0 happened");
        return "N/A divide by zero";
    }
    return a / b;
}

exports.divide = divide;

