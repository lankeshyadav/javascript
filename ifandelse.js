// var a = 5;
// var b = 10;
// if (a < b){
//     console.log("A is grater");
// }

// var age = 20;
// if (age >= 18 && age <= 21){
//     console.log("you are eligible");
// }

// var a = 10;
// var b = 20;
// if (a >=8 || b <= 20){
//     console.log("you are eligible");
// }

// var a = 10;
// var b = 20;
// if (!(a >= 18)) {
//     console.log("you are eligible");
// }

// var a = 30;
// if ( a > 31){
//     console.log("lankesh");
// }else {
//     console.log("ankit");
// }


// var per =65;
// if (per >= 80 && per <=100){
//     console.log("you are merit");
// }else if(per >= 60 && per <= 80){
//     console.log("you are 1st division");
// }else if(per >= 45 && per <= 59){
//     console.log("you are 2nd division");
// }else if(per >= 33 && per <= 45){
//     console.log("3rd division");
// }else{
//     console.log("fail");
// }

// var a = 10;
// var b;
// (a == 100)? b ="true" : b = "false";
// console.log(b);

// var day = 3;
// switch(day){
//     case 0:
//         console.log("Today is monday");
//     break;
//     case 1:
//         console.log("Today is thusday");
//     break;
//     case 2:
//         console.log("Today is wednesday");
//     break;
//     case 3:
//         console.log("Today is thusday");
//     break;
//     case 4:
//         console.log("Today is friday");
//     break;
//     case 5:
//         console.log("Today is saturday");
//     break;
//     default:
//         console.log("Invalid");
// }


var age = 60;
switch(true){
    case (age >= 15 && age <= 20):
       console.log("you are eligible");
    break;
    case (age >= 21 && age <= 30):
         console.log("you are not eligible");
    break;
    default:
        console.log("Enter valid age");
}