// Даны два целых числа A и B (A < B). Найти сумму всех целых чисел от A до B включительно.
alert("Даны два целых числа A и B (A < B). Найти сумму всех целых чисел от A до B включительно.");
var a = +prompt("Enter the first number");
var b = +prompt("Enter the second number");
if (Number.isInteger(+a) && Number.isInteger(+b)) {
    if (a >= b) {
        alert("A is not less than B");
    }
    else {
        var i = a;
        var sum = a;
        while (i < b) {
            i++;
            sum += i;
        }
        alert("The sum is".concat(sum));
    }
}
else {
    alert("Numbers arent integer");
}
