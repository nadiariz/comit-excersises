
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
    else{
        console.log("unmarried");
    }
    console.log('name:',name,'age:',age, 'Phone Number:',phoneNumb,'Street Number:',streetNumb,'Postal Code:',Postal, 'Marital Status:',maritalStatus,);
}
showUser();