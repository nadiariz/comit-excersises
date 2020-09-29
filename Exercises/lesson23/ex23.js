"use strict"
let currentHour = prompt("enter current hour! between 0-23");//can we restrict user to enter value between 0-23
if (currentHour<0 || currentHour>23){
    alert("input is incorrect");
}
    else if (currentHour<8 || currentHour>=18){
        alert("Office is closed");
    }
    else if (currentHour>=8 && currentHour<18){
        alert("We are open");
    }
