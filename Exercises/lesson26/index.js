"use strict";
function showEven(){ 
      for(let evenNumb = 0; evenNumb <= 100; evenNumb++){   // we can also do evenNumb=evenNum+2
          if (evenNumb % 2== 0){
          console.log(evenNumb);
          }
      }
}

for (let numberOfTimes = 1; numberOfTimes >= 5; numberOfTimes++){

showEven();
}

