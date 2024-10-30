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
const result = sendNotification('nobodipdebnath45@gmail.com')
console.log(result); 
