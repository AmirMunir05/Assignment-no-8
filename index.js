// // // Assignment no 8  (If-else exercise)
let prompt = require("prompt-sync")();

// // // 1. Write a js program to find maximum between two numbers.
// console.log("1. Write a js program to find maximum between two numbers.")
// let num1 = parseInt(prompt("Enter first number: "));
// let num2 = parseInt(prompt("Enter second number: "));
// if (num1 > num2){
//     console.log(num1 + " is greater than " + num2);
// }
// else if(num1 < num2){
//     console.log(num2 + " is greater than " + num1);
// }
// else if(num1 == num2){
//     console.log(num1 + " is equal to " + num2);
// }
// else{
//     console.log("Invalid Input");
// }


// // // 2. Write a js program to find maximum between three numbers.
// console.log("2. Write a js program to find maximum between three numbers.");
// let A = parseInt(prompt("Enter first number: "));
// let B = parseInt(prompt("Enter second number: "));
// let C = parseInt(prompt("Enter third number: "));   
// if (A > B && A > C){    
//     console.log(A + " is greater than " + B + " and " + C);
// }
// else if(B > A && B > C){
//     console.log(B + " is greater than " + A + " and " + C);
// }
// else if(C > A && C > B){
//     console.log(C + " is greater than " + A + " and " + B);
// }
// else{
//     console.log("Invalid Input");
// }



// // 3. Write a js program to check whether a number is negative, positive or zero.
// console.log("3. Write a js program to check whether a number is negative, positive or zero.");

// let number = parseInt(prompt("Enter a number : "));
// if (number < 0){
//     console.log(`The number ${number} is negative integer`);
// }
// else if(number === 0){
//     console.log(`The number ${number} is neither positive nor negative integer`);
// }
// else if(number > 0){
//     console.log(`The number ${number} is positive integer`);
// }
// else{
// console.log("Invalid input");
// }



// // 4. Write a js program to check whether a number is divisible by 5 and 11 or not.
// console.log("4. Write a js program to check whether a number is divisible by 5 and 11 or not.");
// let divisibleNum = parseInt(prompt("Enter a number : "));
// if(divisibleNum % 5 === 0 && divisibleNum % 11 === 0){
//     console.log(`The number ${divisibleNum} is divisible on 5 and 11`)
// }
// else if(divisibleNum % 5 === 0){
//     console.log(`The number ${divisibleNum} is divisible only on 5`);  
// }
// else if(divisibleNum % 11 === 0){
//     console.log(`The number ${divisibleNum} is divisible only on 11`);  
// }
// else{
//     console.log(`The number ${divisibleNum} is not divisible on 5 and 11`);   
// }



// // 5. Write a js program to check whether a number is even or odd.
// console.log("5. Write a js program to check whether a number is even or odd.");
// let num = prompt("Enter a number : ");
// if(num % 2 === 0){
//     console.log("The number is even");
// }
// else if(num % 2 > 0){
//     console.log("The number is odd");
// }
// else{
//     console.log("Invalid entity");
// }


// // 6. Write a js program to check whether a year is leap year or not.a js program to check whether a character is alphabet or not.
// console.log("6. Write a js program to check whether a year is leap year or not.");
// let year = prompt("Enter a year : ");
// if(year % 4 === 0 && year % 100 !== 0 || year % 400 === 0){
//     console.log("The year is a leap year");
// }
// else{
//     console.log("The year is not a leap year");
// }



// // 7. Write a js program to check whether a character is alphabet or not.
// console.log("7. Write a js program to check whether a character is alphabet or not.");
// let character = prompt("Enter a character : ");
// if(character >= "a" && character <= "z" || character >= "A" && character <= "Z"){
//     console.log("Character is an alphabet");
// }
// else{
//     console.log("Character is not an alphabet");
// }



// //8. Write a js program to input any alphabet and check whether it is vowel or consonant.
// console.log("8. Write a js program to input any alphabet and check whether it is vowel or consonant.");
// let alphabet = prompt('Enter an alphabet : ');
// if(alphabet === "a" || alphabet === "e" || alphabet === "i" || alphabet === "o" || alphabet === "u" || alphabet === "A" || alphabet === "E" || alphabet === "I" || alphabet === "O" || alphabet === "U"){
//     console.log(" Alphabet is a vowel");
// }
// else{
//     console.log("Alphabet is a constant");
// }


// // 9. Write a js program to input any character and check whether it is alphabet, digit or special character
// console.log("9. Write a js program to input any character and check whether it is alphabet, digit or special character");
// let input = prompt("Enter an input : ")
// if(input == 0 || input > 0 || input < 0 ){
//     console.log("Input is a number");
// }
// else if(input >= "a" && input <= "z" || input >= "A" && input <= "Z"){
//     console.log("Input is a alpabet");
// }
// else if(input == "!" || input == "/" || input == "*" || input == "+" || input == "-" || input == "%" || input == "^" || input == "=" || input == "&" || input == "|" || input == ">" || input == "<" || input == "?" || input == "_"){
//     console.log("Input is a special character");
// }
// else{
//     console.log("Invalid input");
// }




// // 10. Write a js program to check whether a character is uppercase or lowercase alphabet.
// console.log("10. Write a js program to check whether a character is uppercase or lowercase alphabet.");
// let char = prompt("Enter a character : ");
// if(char >= "A" && char <= "Z"){
//     console.log("Character is uppercase");
// }
// else if(char >= "a" && char <= "z"){
//     console.log("Character is lowercase");
// }
// else{
//     console.log("Invalid input");
// }



// // 11. Write a js program to input week number and print week day.
// console.log("11. Write a js program to input week number and print week day.");
// let weekNumber = prompt("Enter a week number : ");
// if(weekNumber == 1){
//     console.log("Monday");    
// }
// else if(weekNumber == 2){
//     console.log("Tuesday");
// }
// else if(weekNumber == 3){
//     console.log("Wednesday");
// }
// else if(weekNumber == 4){
//     console.log("Thursday");
// }
// else if(weekNumber == 5){
//     console.log("Friday");
// }
// else if(weekNumber == 6){
//     console.log("Saturday");
// }
// else if(weekNumber == 7){
//     console.log("Sunday");
// }
// else{
//     console.log("Invalid input");
// }


// // 12. Write a js program to input month number and print number of days in that month.
// console.log("12. Write a js program to input month number and print number of days in that month.");
// let monthNumber = prompt("Enter a month number : ");
// if(monthNumber == 1 || monthNumber == 3 || monthNumber == 5 || monthNumber == 7 || monthNumber == 8 || monthNumber == 10 || monthNumber == 12){
//     console.log("Month has 31 days");
// }
// else if(monthNumber == 4 || monthNumber == 6 || monthNumber == 9 || monthNumber == 11){
//     console.log("Month has 30 days");
// }
// else if(monthNumber == 2){
//     console.log("Month has 28 days");
// }
// else{
//     console.log("Invalid input");
// }


// // 13. Write a js program to count total number of notes in given amount
// console.log("13. Write a js program to count total number of notes in given amount.");
// let amount = prompt("Enter an amount : ");
// let notes = [1000, 500, 100, 50, 20, 10, 5, 2, 1];
// let count = 0;
// for(let i = 0; i < notes.length; i++){
//     while(amount >= notes[i]){
//         amount -= notes[i];
//         count++;
//     }
// }
// console.log("Total number of notes in given amount is : " + count);



// // 14. Write a js program to input angles of a triangle and check whether triangle is valid or not.
// console.log(`14. Write a js program to input angles of a triangle and check whether triangle is valid or not.`);
// let angle1 = parseInt(prompt("Enter first angle : "));
// let angle2 = parseInt(prompt("Enter second angle : "));
// let angle3 = parseInt(prompt("Enter third angle : "));

// if(angle1 + angle2 + angle3 === 180){
//     console.log("Triangle is valid");
// }
// else{
//     console.log("Triangle is not valid");
// }



// // 15. Write a js program to input all sides of a triangle and check whether triangle is valid or not.
// let side1 = parseInt(prompt("Enter first side : "));
// let side2 = parseInt(prompt("Enter second side : "));
// let side3 = parseInt(prompt("Enter third side : "));
// if(side1 + side2 > side3 && side2 + side3 > side1 && side1 + side3 > side2){
//     console.log("Triangle is valid");
// }
// else{
//     console.log("Triangle is not valid");
// }



// // 16. Write a js program to check whether the triangle is equilateral, isosceles or scalene triangle.
// console.log(`16. Write a js program to check whether the triangle is equilateral, isosceles or scalene triangle.`);
// let angle_1 = parseInt(prompt("Enter first angle : "));
// let angle_2 = parseInt(prompt("Enter second angle : "));
// let angle_3 = parseInt(prompt("Enter third angle : "));
// if(angle_1 === angle_2 && angle_2 === angle_3 && angle_1+angle_2+angle_3 === 180){
//     console.log("Triangle is equilateral");
// }
// else if(angle_1 === angle_2 || angle_2 === angle_3 || angle_1 === angle_3 && angle_1+angle_2+angle_3 === 180){
//     console.log("Triangle is isosceles");  
// }
// else{
//     console.log("Triangle is scalene");
// }



// // 17. Write a js program to find all roots of a quadratic equation.
// console.log(`17. Write a js program to find all roots of a quadratic equation.`);
// let a = parseInt(prompt("Enter value of a : "));
// let b = parseInt(prompt("Enter value of b : "));
// let c = parseInt(prompt("Enter value of c : "));

// if (a === 0) {
//     console.log("The value of 'a' cannot be 0 for a quadratic equation.");
// } else {
//     let discriminant = b * b - 4 * a * c;
//     if (discriminant < 0) {
//         console.log("No real roots exist as the discriminant is negative.");
//     } else {
//         let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
//         let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
//         console.log(`Roots of quadratic equation are ${root1} and ${root2}`);
//     }
// }




// // 18. Write a js program to calculate profit or loss.
// console.log(`18. Write a js program to calculate profit or loss.`);
// let costPrice = parseInt(prompt("Enter cost price : "));
// let sellingPrice = parseInt(prompt("Enter selling price : "));
// if(sellingPrice > costPrice){
//     console.log(`Profit is ${sellingPrice - costPrice}`);
// }
// else{
//     console.log(`Loss is ${costPrice - sellingPrice}`);
// }



// // 19. Write a js program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. Calculate percentage and grade according to following:
// // Percentage >= 90% : Grade A
// // Percentage >= 80% : Grade B
// // Percentage >= 70% : Grade C
// // Percentage >= 60% : Grade D
// // Percentage >= 40% : Grade E
// // Percentage < 40% : Grade F

// let Physics = parseInt(prompt("Enter marks of Physics : "));
// let Chemistry = parseInt(prompt("Enter marks of Chemistry : "));
// let Biology = parseInt(prompt("Enter marks of Biology : "));
// let Mathematics = parseInt(prompt("Enter marks of Mathematics : "));
// let Computer = parseInt(prompt("Enter marks of Computer : "));
// let totalMarks = 500;
// let obtainedMarks = Physics + Chemistry + Biology + Mathematics + Computer;
// let percentage = (obtainedMarks / totalMarks)* 100;

// if(percentage >= 90){
//     console.log("Grade A");
// }    
// else if(percentage >= 80){
//     console.log("Grade B");
// }    
// else if(percentage >= 70){
//     console.log("Grade C");
// }    
// else if(percentage >= 60){
//     console.log("Grade D");
// }
// else if(percentage >= 40){
//     console.log("Grade E");
// }
// else if(percentage < 40){
//     console.log("Grade F");
// }



// // 20. Write a js program to input basic salary of an employee and calculate its Gross salary according to following:
// // Basic Salary <= 10000 : HRA = 20%, DA = 80%
// // Basic Salary <= 20000 : HRA = 25%, DA = 90%
// // Basic Salary > 20000 : HRA = 30%, DA = 95%
// let basicSalary = parseInt(prompt("Enter basic salary : "));
// let grossSalary;
// if(basicSalary <= 10000){
//     grossSalary = basicSalary + (basicSalary * 20 / 100) + (basicSalary * 80 / 100);
//     console.log(`Gross salary is ${grossSalary}`);
// }
// else if(basicSalary <= 20000){
//     grossSalary = basicSalary + (basicSalary * 25 / 100) + (basicSalary * 90 / 100);
//     console.log(`Gross salary is ${grossSalary}`);
// }
// else{
//     grossSalary = basicSalary + (basicSalary * 30 / 100) + (basicSalary * 95 / 100);
//     console.log(`Gross salary is ${grossSalary}`);
// }




// // 21. Write a js program to input electricity unit charges and calculate total electricity bill according to the given condition:
// // For first 50 units Rs. 0.50/unit
// // For next 100 units Rs. 0.75/unit
// // For next 100 units Rs. 1.20/unit
// // For unit above 250 Rs. 1.50/unit
// // An additional surcharge of 20% is added to the bill
// let units = parseInt(prompt("Enter units : "));
// let bill;
// if(units <= 50){
//     bill = units * 0.5; 
// }
// else if(units <= 150){
//    bill = 25 + ((units - 50) * 0.75);
// }
// else if(units <= 250){
//     bill = 100 + ((units - 150) * 1.20)
// }
// else if(units > 250){
//     bill = 220 + ((units - 250) * 1.50)
// }
// console.log(`Electricity bill is ${(bill + (bill*20/100)) }`);
