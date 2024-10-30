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
const result = checkDigitsInName("Nobodip")
console.log(result);

