//Описать функцию Calc(A, B, Op), выполняющую над ненулевыми вещественными числами A и B одну из арифметических операций и возвращающую ее результат.
// Вид операции определяется целым параметром Op: 1 — вычитание, 2 — умножение, 3 — деление, остальные значения — сложение.
// С помощью Calc выполнить для данных A и B операции, определяемые данными целыми N1, N2, N3.
alert("Описать функцию Calc(A, B, Op), выполняющую над ненулевыми вещественными числами A и B одну из арифметических операций и возвращающую ее результат. Вид операции определяется целым параметром Op: 1 — вычитание, 2 — умножение, 3 — деление, остальные значения — сложение. С помощью Calc выполнить для данных A и B операции, определяемые данными целыми N1, N2, N3.");
var A = +prompt("Enter the first number");
var B = +prompt("Enter the second number");
var Op = +prompt("Enter the operator");
if (A == 0 || B == 0 || isNaN(A) || isNaN(B) || !Number.isInteger(Op)) {
    alert("Incorrect input");
}
function Calc(A, B, Op) {
    var result = A + B;
    switch (Op) {
        case 1:
            result = A - B;
        case 2:
            result = A * B;
        case 3:
            result = A / B;
    }
    return result;
}
console.log(Calc(A, B, Op));
var funcVar = function (A, B, Op) {
    var result = A + B;
    switch (Op) {
        case 1:
            result = A - B;
        case 2:
            result = A * B;
        case 3:
            result = A / B;
    }
    return result;
};
console.log(funcVar(A, B, Op));
var result = function (A, B, Op) {
    var result = A + B;
    switch (Op) {
        case 1:
            result = A - B;
        case 2:
            result = A * B;
        case 3:
            result = A / B;
    }
    return result;
};
console.log(result(A, B, Op));
