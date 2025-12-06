// var num = Number(prompt("Enter a number: "));

// if (num % 2 === 0) {
//   console.log(`${num} is an even number`);

// } else {
//   console.log(`${num} is an odd number`);
//   ;
// }
//////////////////////////////////////////////////////////
// var hour = prompt("");

// if (hour >= 0 && hour <= 11) {
//   console.log("Good morning!");
// } else if (hour >= 12 && hour <= 17) {
//   console.log("Good afternoon!");
// } else if (hour >= 18 && hour <= 23) {
//   console.log("Good evening!");
// } else {
//   console.log("Invalid hour!");
// }

///////////////////////////////////////////////////////

// var s1 = Number(prompt("Enter score for subject 1:"));
// var s2 = Number(prompt("Enter score for subject 2:"));
// var s3 = Number(prompt("Enter score for subject 3:"));

// var avg = ((s1 + s2 + s3) / 3).toFixed(2);

// if (avg >= 50) {
//   console.log(`Average: ${avg}, Status: Pass`);
// } else {
//     console.log(`Average: ${avg}, Status: Fail`);
// }

///////////////////////////////////////////////////////

// var num1 = prompt("");
// var num2 = prompt("");
// var operator = prompt("Enter operator (+, -, *, /):");

// var n1 = Number(num1);
// var n2 = Number(num2);

// var result;

// if (operator === "+") {
//   result = n1 + n2;
// } else if (operator === "-") {
//   result = n1 - n2;
// } else if (operator === "*") {
//   result = n1 * n2;
// } else if (operator === "/") {
//   result = n1 / n2;
// } else {
//   result = "Invalid operator";
// }

// console.log(`${num1} ${operator} ${num2} = ${result}`);

///////////////////////////////////////////////////////

// var num = prompt("Enter a number:");
// var n = Number(num);

// for (var i = 1; i <= 10; i++) {
//   console.log(`${n} x ${i} = ${n * i}`+" ");
// }

///////////////////////////////////////////////////////

// for (var i = 2; i <= 10; i += 2) {
//   console.log(i);
// }
///////////////////////////////////////////////////////
// var n = 5;
// var factorial = 1;

// for (var i = 1; i <= n; i++) {
//   factorial *= i;
// }

// console.log(factorial);

///////////////////////////////////////////////////////
// var n = 1;

// while (n * n <= 50) {
//   n++;
// }

// console.log(n);

///////////////////////////////////////////////////////
// var num1 = Number(prompt("Enter first number:"));
// var num2 = Number(prompt("Enter second number:"));

// // Swap without third variable
// num1 = num1 + num2;
// num2 = num1 - num2;
// num1 = num1 - num2;

// console.log(`After Swapping: num1=${num1}, num2=${num2}`);

///////////////////////////////////////////////////////

// var age = Number(prompt("Enter your age:"));
// var hasTicketInput = prompt("Do you have a ticket? (yes/no)").toLowerCase();

// var hasTicket = hasTicketInput === "yes";

// var canEnter = age >= 18 || hasTicket;

// console.log(`Access granted: ${canEnter}`);

///////////////////////////////////////////////////////
// var a = Number(prompt("Enter first number:"));
// var b = Number(prompt("Enter second number:"));
// var c = Number(prompt("Enter third number:"));

// var largest;

// if (a >= b) {
//   if (a >= c) {
//     largest = a;
//   } else {
//     largest = c;
//   }
// } else {
//   if (b >= c) {
//     largest = b;
//   } else {
//     largest = c;
//   }
// }

// console.log(`Largest number is: ${largest}`);

///////////////////////////////////////////////////////

// var hours = Number(prompt("Enter hours worked:"));
// var rate = Number(prompt("Enter hourly rate:"));

// var regularHours = Math.min(hours, 40);
// var overtimeHours = Math.max(hours - 40, 0);

// var regularPay = regularHours * rate;
// var overtimePay = overtimeHours * rate * 1.5;
// var totalPay = regularPay + overtimePay;

// console.log(
//   `Regular: $${regularPay}, Overtime: $${overtimePay}, Total: $${totalPay}`
// );
///////////////////////////////////////////
// var weight = Number(prompt("Enter your weight in kg:"));
// var height = Number(prompt("Enter your height in meters:"));

// var bmi = weight / (height * height);

// var category;

// if (bmi < 18.5) {
//   category = "Underweight";
// } else if (bmi >= 18.5 && bmi <= 24.9) {
//   category = "Normal weight";
// } else if (bmi >= 25 && bmi <= 29.9) {
//   category = "Overweight";
// } else {
//   category = "Obese";
// }

// console.log(`BMI: ${bmi.toFixed(2)} - ${category}`);

///////////////////////////////////////////
// var amount = Number(prompt("Enter purchase amount:"));

// var tax = amount * 0.1;

// var discount = amount > 100 ? amount * 0.05 : 0;

// var finalPrice = amount + tax - discount;

// console.log(
//   `Subtotal: $${amount}, Tax: $${tax}, Discount: $${discount}, Final: $${finalPrice}`
// );

///////////////////////////////////////////

// // 1 = Balance, 2 = Withdraw, 3 = Deposit
// var operation = prompt("Choose an operation:\n1: Balance\n2: Withdraw\n3: Deposit").trim();
// var currentBalance = Number(prompt("Enter your current balance:"));

// switch (operation) {
//     case "1": // Balance
//     console.log(`Your balance is: $${currentBalance}`);
//     break;

//     case "2": // Withdraw
//     var withdrawAmount = Number(prompt("Enter amount to withdraw:"));
//     currentBalance -= withdrawAmount;
//     console.log(`Withdrew $${withdrawAmount}. New balance: $${currentBalance}`);
//     break;

//     case "3": // Deposit
//     var depositAmount = Number(prompt("Enter amount to deposit:"));
//         currentBalance += depositAmount;
//         console.log(`Deposited $${depositAmount}. New balance: $${currentBalance}`);
//         break;

//     default:
//         console.log("Invalid operation!");
//         break;
// }

// // الحصول على العملية من المستخدم
// // 1 = Balance, 2 = Withdraw, 3 = Deposit
// var operation = prompt("Choose an operation:\n1: Balance\n2: Withdraw\n3: Deposit").trim();

// // الحصول على الرصيد الحالي
// var currentBalance = Number(prompt("Enter your current balance:"));

// // المتغير amount يستخدم فقط للسحب أو الإيداع
// var amount = 0;

// switch (operation) {
//     case "1": // Balance
//         console.log(`Your balance is: $${currentBalance}`);
//         break;

//     case "2": // Withdraw
//         amount = Number(prompt("Enter amount to withdraw:"));
//         if (amount > currentBalance) {
//             console.log("Insufficient balance!");
//         } else {
//             currentBalance -= amount;
//             console.log(`Withdrew $${amount}. New balance: $${currentBalance}`);
//         }
//         break;

//     case "3": // Deposit
//         amount = Number(prompt("Enter amount to deposit:"));
//         currentBalance += amount;
//         console.log(`Deposited $${amount}. New balance: $${currentBalance}`);
//         break;

//     default:
//         console.log("Invalid operation!");
//         break;
// }

// var operation = prompt(
//   "Choose an operation:\n1: Balance\n2: Withdraw\n3: Deposit"
// ).trim();
// var currentBalance = Number(prompt("Enter your current balance:"));

// var amount = 0;

// switch (operation) {
//   case "1": // Balance
//     console.log(`Your balance is: $${currentBalance}`);
//     break;

//   case "2": // Withdraw
//     amount = Number(prompt("Enter amount to withdraw:"));
//     if (amount > currentBalance) {
//       console.log("Insufficient balance!");
//     } else {
//       currentBalance -= amount;
//       console.log(`Withdrew $${amount}. New balance: $${currentBalance}`);
//     }
//     break;

//   case "3": // Deposit
//     amount = Number(prompt("Enter amount to deposit:"));
//     currentBalance += amount;
//     console.log(`Deposited $${amount}. New balance: $${currentBalance}`);
//     break;

//   default:
//     console.log("Invalid operation!");
//     break;
// }

//////////////////الترتيب فيه مهم ////////////////
// السؤال الأول: اختيار العملية
// let operation = prompt(
//   "Choose an operation:\n1: Balance\n2: Withdraw\n3: Deposit"
// ).trim();

// let amount = 0; // المبلغ للسحب أو الإيداع
// let currentBalance = 0; // الرصيد الحالي

// switch (operation) {
//   case "1": // Balance
//     // فقط نطلب الرصيد عند عرض الرصيد
//     currentBalance = Number(prompt("Enter your current balance:"));
//     console.log(`Your balance is: $${currentBalance}`);
//     break;

//   case "2": // Withdraw
//     // السؤال الثاني: المبلغ
//     amount = Number(prompt("Enter amount to withdraw:"));
//     // السؤال الثالث: الرصيد
//     currentBalance = Number(prompt("Enter your current balance:"));
//     if (amount > currentBalance) {
//       console.log("Insufficient balance!");
//     } else {
//       currentBalance -= amount;
//       console.log(`Withdrew $${amount}. New balance: $${currentBalance}`);
//     }
//     break;

//   case "3": // Deposit
//     // السؤال الثاني: المبلغ
//     amount = Number(prompt("Enter amount to deposit:"));
//     // السؤال الثالث: الرصيد
//     currentBalance = Number(prompt("Enter your current balance:"));
//     currentBalance += amount;
//     console.log(`Deposited $${amount}. New balance: $${currentBalance}`);
//     break;

//   default:
//     console.log("Invalid operation!");
//     break;
// }

////////////////////////////////////////////////////////////////////
// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log(" FizzBuzz ");
//   } else if (i % 3 === 0) {
//     console.log(" Fizz ");
//   } else if (i % 5 === 0) {
//     console.log(" Buzz ");
//   } else {
//     console.log(i + " ");
//   }
// }

////////////////////////////////////////////////////////////////////

// var rows = Number(prompt("Enter number of rows:"));

// for (var i = 1; i <= rows; i++) {
//   var line = "";

//   for (var j = 1; j <= i; j++) {
//     line += "*";
//   }

//   console.log(line +" ");
// }

////////////////////////////////////////////////////////////////////

// var rows = Number(prompt("Enter number of rows:"));

// for (var i = 1; i <= rows; i++) {
//   var line = "";
//   for (var j = 1; j <= rows - i; j++) {
//     line += " ";
//   }
//   for (var k = 1; k <= i; k++) {
//     line += "*";
//   }
//   console.log(line + " ");
// }
