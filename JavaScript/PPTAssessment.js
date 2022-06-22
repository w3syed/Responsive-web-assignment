// ----------------------    first Assessment PPt  ----------------------------------------

// 1.Variable Write a JavaScript program where the program takes a
// random integer between 1 to 10, the user is then prompted to
// input a guess number. If the user input matches with guess
// number, the program will display a message "Good Work"
// otherwise display a message "Not matched"
function GuessNumber(){
var inputvalue= parseInt(prompt('Enter Guess Number'));
var randomNumber = Math.floor(Math.random()*10 +1);
console.log(randomNumber)
if(inputvalue==randomNumber){
alert('Good Work');
} else{
alert('Not Matched !!') }
}GuessNumber();
// --------------------------   Second Assessmet PPt  ---------------------------------------

// 1. Write a JavaScript program to convert a comma-separated values (CSV)
// string to a 2D array of objects. The first row of the string is used as the title
// row
// eg...
// 1,2,3,4,5,6;
// 7,8,1,2,3;
// 4,5,6,7,8,9

    function CSV(numbers){
    var count=0; var arr=[];
    for (let index = 0; index <numbers.length ; index++) {
    if(numbers[index]==','){
    arr.push(numbers[index-1]);
    } }
    console.log(arr);
    } CSV("2,4,5,6,3");

// 2. Write a JavaScript program to construct the following pattern, using a
// nested for loop.
// *
// * *
// * * *
// * * * *
// * * * * *

function Pattern(rows) {
    for (let i = 0; i < rows; i++) {
    for (let index = 0; index<i+1; index++) {
    console.log("*") }
    console.log('\n'); }
    } Pattern(4);

// 3. Write a JavaScript program to sum the multiples of 3 and 5 under 1000

function MultipleSum(Range) {
    var sum =0;
    for (let i = 1; i <= Range; i++) {
    if(i%3==0){
    sum += i;
    }
    if (i%5==0){
    sum += i;
    } }
    console.log(sum)
    } MultipleSum(1000);

// 4. Write a JavaScript program to move last three character to the start of a
// given string. The string length must be greater or equal to three.

function Lastthree(str) {
    let last = str.slice(-3);
    let remaining = str.slice(0,-3);
    let changestring = last+remaining; return changestring;
    }Lastthree('SaiyedadnanAli');


// ----------------------    Third Assessment PPt  ----------------------------------------
/*1. Write a JavaScript function that reverse a number.
Example x = 32243;
Expected Output : 34223
2. Write a JavaScript function that checks whether a passed string is
palindrome or not?
3. Write a JavaScript function that generates all combinations of a string.
Example string : 'dog'
Expected Output : d,do,dog,o,og,g
4. Write a JavaScript function that returns a passed string with letters in
alphabetical order.
Example string : 'webmaster'
Expected Output : 'abeemrstw'
5. Write a JavaScript function that accepts a string as a parameter and
converts the first letter of each word of the string in upper case.
Example string : 'the quick brown fox'
Expected Output : 'The Quick Brown Fox '
6. Write a JavaScript function that accepts a string as a parameter and
find the longest word within the string.
Example string : 'Web Development Tutorial'
Expected Output : 'Development'*/ 


    function Reverse(Number) {
    var sum= '';
    var len=`${Number}`.length ;
    for (let index = 0; index < len; index++) {
    let rem = Math.floor(Number%10);
    console.log(rem);
    sum += rem.toString();;
    Number =Number/10;
    }
    console.log(sum);
    }
    Reverse(123445);
    
     function PalendromeString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
    newString += str[i];
    }
    if(str===newString){
    alert("IT IS PALENDROME STRING")
    }
    else{
    alert("IT IS NOT PALENDROME STRING");
    }
    }
    PalendromeString('Adnan');

    function combinationsOFstring(str) {
    var outputarray =[];
    for (let index = 0; index < str.length; index++) {
    for (let j = index+1; j <str.length + 1; j++) {
    outputarray.push(str.slice(index,j))
    }
    }
    return outputarray;
    }
    combinationsOFstring('ALI');
    
    function alphabeticalOrder(str) {
    var array= str.split('');
    var Outputarray=array.sort().join('');
    return Outputarray;
    }
    alphabeticalOrder('Ali');
    
     function firstuppercase() {
    var message = prompt("Enter Your Message");
    var words = message.split(' ');
    for (let i = 0; i <words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    
    }
    console.log(words)
    }
    firstuppercase();
    
     function LongestWord() {
    var message = prompt('Enter Your message');
    var messageArray = message.split(' ');
    var count=0;
    var wordlength =[];
    for (let i = 0; i < messageArray.length; i++) {
    var letter = messageArray[i];
    for (let j = 0; j <letter.length; j++) {
    count++
    }
    wordlength.push(count);
    count =0;
    }
    let max = Math.max(...wordlength);
    const index = wordlength.indexOf(max);
    messageArray[index];
    }
    LongestWord();