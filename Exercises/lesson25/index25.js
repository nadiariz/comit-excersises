"use strict";
let weekDay = prompt("enter the weekday number between 1-7",7);
if (weekDay==1) {
    alert ("It's Monday");
}
else if (weekDay == 2){
    alert ("today is Tuesday");
} else if (weekDay ==3) {
    alert ("today is Wednesday");
}
switch(weekDay){
case 4:
alert ("Today is Thursday");
break;
case 5:
    alert ("Today is Friday.");
    break;

case 6:
    alert ("Today is Saturday.");
    break;

case 7:
    alert ("Today is Sunday");
    break;

    default:
    alert("error: number not between 1-7" );
    break;
}