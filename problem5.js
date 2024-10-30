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

const nothing = [ 3, 7, 7, 9, 6];
const result = waitingTime(nothing, 10);
console.log(result);
