function calculateTax(income, expenses) {
    if(income < 0 || expenses < 0 || income < expenses){
        return "Invalid Input";
    }
    const difference = income - expenses; -s
    const tax = (difference / 100) * 20;
    return tax;
}


function sendNotification(email) {
    const index = email.indexOf("@");
    if (index === -1) {
        return "Invalid Email";
    }

    const splitEmail = email.split('@');
    const userName = splitEmail[0];
    const domainName = splitEmail[1]
    const result = userName +" sent you an email from "+ domainName;
    return result;
}


function checkDigitsInName(name) {
    if(typeof name !== "string"){
        return "Invalid Input";
    }
    for (let i = 0; i < name.length; i = i + 1) {
        if (!isNaN(name[i])) {
            return true;
        }
    }
    return false;
}


function calculateFinalScore(obj) {
    if (typeof obj !== "object") {
      return "Invalid Input";
    } else if (obj.testScore < 0 || obj.testScore > 50) {
      return "Invalid Input";
    } else if (obj.schoolGrade < 0 || obj.schoolGrade > 30) {
      return "Invalid Input";
    }
    let finalScore = obj.testScore + obj.schoolGrade;
    if (obj.isFFamily) {
      finalScore = finalScore + 20;
    } else {
      finalScore = finalScore + 0;
    }
    // result Section
    if (finalScore >= 80) {
      return true;
    } else {
      return false;
    }
}


function waitingTime(interviewTimes, serialNumber) {
    if(!Array.isArray(interviewTimes) || typeof serialNumber !== "number"){
        return "Invalid Input";
    }
    let sum = 0;
    let array= [];
    for (const time of interviewTimes){
        sum = sum + time;
        array.push(time);
    }
    const avg = sum / array.length;
    
    const serial = (serialNumber - array.length) - 1;

    const result = Math.floor(serial * avg);
    return result;
}