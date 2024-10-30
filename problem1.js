function calculateTax(income, expenses) {
    if(income < 0 || expenses < 0 || income < expenses){
        return "Invalid Input";
    }
    const difference = income - expenses; 
    const tax = (difference / 100) * 20;
    return tax;
}

const result = calculateTax(1500, 500);
console.log(result);
