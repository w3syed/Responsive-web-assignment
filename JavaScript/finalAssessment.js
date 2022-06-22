// Q1. Given an integer n, print its first 10 multiples. Each multiple
// n X i (where 1<= i <= 10) should be printed on a new line in the
// form: n x i = result.

function Table(digit) {
for (let i = 1; i<=10; i++) {
var result = digit*i ;
console.log(result);
}
}
Table(5)
// Q2. Write a JavaScript program to find the Armstrong numbers of
// 3 digits.

function ArmsStrong(Number) {
var Original = Number;
var sum =0;
while(Number>0){
let rem =Math.floor(Number%10);
sum += rem*rem*rem;
Number =Number/10
}
if(Original===sum){
console.log("ArmsStrong Number")
}
else{
console.log("Not ArmsStrong Number")
}
}
ArmsStrong(407);
// Q3. Write a JavaScript program to print the sum of digits of a number.

function SumOfDigit(last) {
var sum = 0;
for (let i = 1; i <=last ; i++) {
sum +=i;
}
console.log(sum);
}
SumOfDigit(20);

// Q4. Write a JavaScript code to reverse the digits of a number.

function Reverse(Number) {
var originalnumber = Number;
var len =`${Number}`.length;
var sum =0;
for (let i = 0; i <len; i++) {
let rem = Math.floor(Number%10);
sum = sum*10+rem;
Number =Number/10;
}
console.log('Reverse Number of ' +originalnumber + ' is : '+sum);
}
Reverse(95678);

// Q5. Print the following patterns
// *
// **
// ***
// ****
// *****

function Pattern(rows) {
let string = "";
for (let i = 0; i < rows; i++) {
for (let j = 0; j < i+1; j++) {
string += "*";
}
string += "\n";
}
console.log(string)
}
Pattern(5);

// *****
// ****
// ***
// **
// *

function Pattern(rows) {
var string = "";

for (let i = rows; i > 0; i-- ){
for (let j = i-1; j >0; j--) {
string += "*";
}
string += "\n";
}
console.log(string)
}
Pattern(5);

// *
// **
// ***
// ****
// *****

function Pattern(n) {
let string= "";
for (let i = 1; i <= n; i++) {
for (let j = 0; j < n - i; j++) {
string += " ";
}
for (let k = 0; k < i; k++) {
string += "*";
}
string += "\n";
}
console.log(string);
}
Pattern(5);
// *****
// ****
// ***
// **
// *
function Pattern(n) {
let string= "";
for (let i = 1; i <= n; i++) {

for (let j = 0; j < i; j++) {
string += " ";
}
for (let k = 0; k < n-i; k++) {
string += "*";
}
string += "\n";
}
console.log(string);
}
Pattern(5);
// *
// * *
// * * *
// * * * *
// * * * * *
function Pattern(n) {
let string= "";
for (let i = 1; i <= n; i++) {
for (let j = 0; j <n-i; j++) {
string += " ";
}
for (let k = 0; k < 2*i-1; k++) {
string += "*";
}
string += "\n";
}
console.log(string);
}
Pattern(5);
// *
// **
// ***
// ****
// *****
// ****
// ***
// **
// *
function Pattern(n) {
let string = "";
for (let i = 0; i < n; i++) {
for (let j = 0; j < i+1; j++) {
string += "*";
}
string += "\n";
}
for (let i = 1; i <= n - 1; i++) {
for (let j = 0; j < n - i; j++) {
string += "*";
}
string += "\n";
}
console.log(string)
}
Pattern(5);

// *
// **
// ***
// ****
// *****
// ****
// ***
// **
// *

function Pattern(n) {
let string = "";
for (let i = 1; i <= n; i++) {
for (let j = 0; j < n - i; j++) {
string += " ";
}
for (let k = 0; k < i; k++) {
string += "*";
}
string += "\n";

}
for (let i = 1; i <= n - 1; i++) {
for (let j = 0; j < i; j++) {
string += " ";
}
for (let k = 0; k < n - i; k++) {
string += "*";
}
string += "\n";
}
console.log(string)
}
Pattern(5);

// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15

function Pattern(rows) {
var string = '';
var count =1;
for (let i = 1; i <=rows; i++) {
for (let j = 1; j <i+1; j++) {
string += count;
count++
}
string += '\n'
}
console.log(string);
}
Pattern(5);