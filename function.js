// var a=9;
// function check(a){
// if(a%2==0){
//     console.log("even")
// }
// else{
//     console.log("odd")
// }
// }
// check(a);

// var str = "malayalam";
// function palindrome(str){
// for (i in str) 
//     var string = str == str.split("").reverse().join("");
// if (string == true) {
//   console.log("palindrome");
// } else {
//   console.log("not a palindrome");
// }
// }
// palindrome(str);

var a=60;
var b=600;
var c=110;
function greatest (a,b,c){
    if(a>b&&a>c){
        console.log(`${a} is greatest number`)
    }
    else if(b>a&&b>c){
        console.log(`${b} is greatest number`)
    }
    else{
        console.log(`${c} is greatest number`)
        
    }
}
greatest(a,b,c);