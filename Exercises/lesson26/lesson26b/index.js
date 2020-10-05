
"use strict";
function showUser(){
    let name = prompt ("enter name:"); 
    let age = +prompt("enter age:",100);
    let phoneNumb = +prompt("enter phone number",12345678912);
    let streetNumb = +prompt("enter street numb:",100);
    let Postal = +prompt("enter postal code:",120);
    let maritalStatus= confirm("are you married?");
    if (true){
        console.log("married");
    }
    else {
        console.log("unmarried");
    }
    console.log('name:',name,'age:',age, 'Phone Number:',phoneNumb,'Street Number:',streetNumb,'Postal Code:',Postal, 'Marital Status:',maritalStatus,);
}
showUser();

let userName = function (name) {
    let banner = ""; //remeber to add some value whether it's emty string otherwise it will give undefined
    for (let equals = 1 ; equals <= name.length+6 ; equals++){
        banner += "=";
    }
    console.log(banner);
    console.log(`== ${name} ==`); 
    console.log(banner);
};
userName ("Nadia Majeed");
userName ("Rizwan Khan");