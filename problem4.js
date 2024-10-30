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

const obj = { name: "Rajib", testScore: 50, schoolGrade: 30, isFFamily: false };
const result = calculateFinalScore(obj);
console.log(result);
