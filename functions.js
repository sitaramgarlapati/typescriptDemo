var add = function (a, b) {
    console.log(a + b);
};
var add2 = function (a, b) {
    return (a + b);
};
var result = add2(10, 20);
console.log(result);
//mentioning return type explicity
var add3 = function (a, b) {
    console.log(a + b);
};
var add4 = function (a, b) {
    return (a + b);
};
//type Alias 
//in case of tuples
var logDetails = function (userid, orderItem) {
    console.log("The user Id is " + userid);
};
var logDetails2 = function (userid) {
    console.log("The user Id is " + userid);
};

