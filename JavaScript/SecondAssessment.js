// 1. Write a JavaScript program that accepts two integers and displays the larger.
function largerTwo(a,b) {
if (a>b){
console.log(a,': is larger number');
}
else{
console.log(b,': is larger number');
}
}
largerTwo(5,31);

// 2. Write a JavaScript conditional statement to find the sign of a product of three
// numbers. Display an alert box with the specified sign.

function specifiedSign() {
var negative =0;
var number = prompt("Enter number With Space").split(' ');
for (let index = 0; index < number.length; index++) {
if (number[index]<0){
negative++
}
}
if(negative%2==0){
console.log('The sign is – Positive');
}

else{
console.log('The sign is – Negative');
}
}
specifiedSign();

// 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box
// to show the result.

function SortThree(x,y,z) {
var arr=[];
if (x>y && x>z)
{
if (y>z)
{
alert(x + ", " + y + ", " +z);
}
else
{
alert(x + ", " + z + ", " +y);
}
}
else if (y>x && y >z)
{
if (x>z)
{
alert(y + ", " + x + ", " +z);

}
else
{
alert(y + ", " + z + ", " +x);
}
}
else if (z>x && z>y)
{
if (x>y)
{
alert(z + ", " + x + ", " +y);
}
else
{
alert(z + ", " + y + ", " +x);
}
}

}
SortThree(11,1,21);

// 4. Write a JavaScript conditional statement to find the largest of five numbers. Display
// an alert box to show the result.

function getLargest(a, b, c, d, e) {
if (a > b && a > c && a > d && a > e) {
alert('Largest Number Is :' + a);

}
if (b > a && b > c && b > d && b > e) {
alert('Largest Number Is :' +b);
}
if (c > a && c > b && c > d && c > e) {
alert('Largest Number Is :' +c);
}
if (d > a && d > b && d > c && d > e) {
alert('Largest Number Is :' +d);
}
if (e > a && e > b && e > c && e > d) {
alert('Largest Number Is :' +e);
}
}
getLargest(21,33,89,5,98);

// 5.Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check
// if the current number is odd or even, and display a message to the screen.

function eachiteration(n) {
for (let i = 0; i <=n; i++) {
if(i%2==0){
console.log(i + ' : is even');
}
else{
console.log(i + ' : is odd');
}
}
}
eachiteration(15);

// 6. Write a JavaScript program which compute, the average marks of the following
// students Then, this average is used to determine the corresponding grade.
// Student Name Marks
// David 80
// Vinoth 77
// Divya 88
// Ishitha 95
// Thomas 68
// The grades are computed as follows :
// Range Grade
// <60 F
// <70 D
// <80 C
// <90 B
// <100 A

function Average(a,b,c,d,e) {
var avrg= (a+b+c+d+e)/5;
if(avrg<60){
console.log(avrg + ' Grade : F');
}
if(avrg<=60 && avrg<70){
console.log(avrg + ' Grade : D');
}
if(avrg<=70 && avrg<80){
console.log(avrg + ' Grade : c');
}
if(avrg<=80 && avrg<90){
console.log(avrg + ' Grade : B');
}
if(avrg<=90 && avrg<100){
console.log(avrg + ' Grade : A');
}
}
Average(80,77,88,95,68);

// 7. Write a JavaScript program which iterates the integers from 1 to 100. But for multiples
// of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For
// numbers which are multiples of both three and five print "FizzBuzz".

function FizzBuzz(Range) {
var outputarray =[];
for (let i = 1; i <=Range; i++) {
if(i%3==0 && i%5==0){
outputarray.push("FizzBuzz");
}
else if(i%3==0){
outputarray.push("Fizz");
}
else if(i%5==0){
outputarray.push("Buzz");
}
else {
outputarray.push(i);
}
}
console.log(outputarray);
}
FizzBuzz(100);

// 8. According to Wikipedia a happy number is defined by the following process :
// "Starting with any positive integer, replace the number by the sum of the squares of its
// digits, and repeat the process until the number equals 1 (where it will stay), or it loops

// endlessly in a cycle which does not include 1. Those numbers for which this process
// ends in 1 are happy numbers, while those that do not end in 1 are unhappy numbers (or
// sad numbers)".
// Write a JavaScript program to find and print the first 5 happy numbers.

function HappyNumber(number)
{
var m, n ;
var c = [] ;
while(number != 1 && c[number] !== true)
{
c[number] = true ;
m = 0 ;
while (number > 0) {
n = number % 10 ;
m += n * n ;
number = (number - n) / 10 ;
}
number = m ;
}
return (number == 1) ;
}
var cnt = 5;
var number = 1;
var str = '';
while(cnt-- > 0)

{
while(!HappyNumber(number))
number++ ;
str = str+(number + ", ") ;

number++ ;
}
console.log('First 5 happy numbers are : '+str);