// DATE - 6.5.24 Time - 1:36am LOCATION - India
// Welcome to the avg maker
// By -  Mayank Biswas
//? how to use ?
//* Go to line no.29
//* and enter your numbers, be careful Dont Touch any thing else
//! Make sure to have "Better Comments" and "Quokka.Js" to make it work or it wont work
//* Ans at line 35
//* Thank you for your time

//*-----------------------------------------------------------------------------------------------------------------------
//! Function Zone (Do not Touch)
const avgMaker = (num_count, sum) => {
  avg = sum / num_count;
  return avg;
};

const allSum = (num) => {
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    if (typeof num[i] === "number") {
      sum += num[i];
    }
  }
  return sum;
};
//! Function Zone
//* -------------------------------------------------------------------------------------------------------------------
//!  main code
let num = []; //* Enter you numbers Here
let sum;

let num_count = num.length;
sum = allSum(num);

console.log(avgMaker(num_count, sum)); //* Ans is here ->

//!  main code
//*----------------------------------------------------------------------------------------------------------------------

//* THANK YOU FOR USING IT , IT HELPS ME
// By - Mayank Biswas