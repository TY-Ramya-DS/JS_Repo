console.log('**********************');
function sendmail(){
    console.log("mail sending");
    console.log("waiting for connection");
    console.log("mail sent");
}
function sms(){
    console.log("sms sending");
    console.log("waiting for connection");
    console.log("sms sent");
}
function notifications(callback1, callback2){
    console.log("notification function starts");
    callback1();
    callback2();
    console.log("notification function ends");
}
notifications(sendsms,sendmail);
//notification is a higher order function
//sendsms is a callback function
//sendmail is a callback function
console.log('*****************');