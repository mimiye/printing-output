//Task 1
var output, a, b, c;
a = 1;
b = 5;

output = "var a = 3;\nvar b = 5;\nvar c;\n----------\n" +
    "a + b = " + (a + b) + "\n" +
    "a - b = " + (a - b) + "\n" +
    "a * b = " + (a * b) + "\n" +
    "a / b = " + (a / b) + "\n" +
    "a % b = " + (a % b) + "\n" +
    "a += b = " + (a += b) + "\n" +
    "a -= b = " + (a -= b) + "\n" +
    "a *= b = " + (a *= b) + "\n" +
    "a /= b = " + (a /= b) + "\n" +
    "a %= b = " + (a %= b) + "\n" +
    "a == b = " + (a == b) + "\n" +
    "a != b = " + (a != b) + "\n" +
    "a > b = " + (a > b) + "\n" +
    "a < b = " + (a < b) + "\n" +
    "!a && !c = " + (!a && !c) + "\n" +
    "!a || !c = " + (!a || !c) + "\n";

alert(output);

//Task 2
var first_name, last_name, email, output;
first_name = "Mimi";
last_name = "Ye";
email = "ye000031@algonquinlive.com";

output = "My name is";
output += " ";
output += first_name;
output += " ";
output += last_name;
output += ". ";
output += "You can contact me at ";
output += email;
output += ".";

alert(output);


//Task 3
var numbers = [
    Math.floor(Math.random() * (200 - 100) + 100), 
    Math.floor(Math.random() * (200 - 100) + 100), 
    Math.floor(Math.random() * (200 - 100) + 100), 
    Math.floor(Math.random() * (200 - 100) + 100), 
    Math.floor(Math.random() * (200 - 100) + 100)
];

var sum, firstNum, lastNum;

firstNum = numbers[0];
lastNum = numbers[numbers.length-1];

sum = firstNum + lastNum;
 
if (sum %2 === 0){
 alert(firstNum + "+" + lastNum + "=" + sum + "\n" + "This is an even number.");
} else {
 alert(firstNum + "+" + lastNum + "=" + sum + "\n" + "This is an odd number.");
};
    







