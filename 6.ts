//Описать функцию Calc(A, B, Op), выполняющую над ненулевыми вещественными числами A и B одну из арифметических операций и возвращающую ее результат.
// Вид операции определяется целым параметром Op: 1 — вычитание, 2 — умножение, 3 — деление, остальные значения — сложение.
// С помощью Calc выполнить для данных A и B операции, определяемые данными целыми N1, N2, N3.
alert("Описать функцию Calc(A, B, Op), выполняющую над ненулевыми вещественными числами A и B одну из арифметических операций и возвращающую ее результат. Вид операции определяется целым параметром Op: 1 — вычитание, 2 — умножение, 3 — деление, остальные значения — сложение. С помощью Calc выполнить для данных A и B операции, определяемые данными целыми N1, N2, N3.")

let A: number= +prompt("Enter the first number")
let B: number=+prompt("Enter the second number")
let Op: number=+prompt("Enter the operator")

if (A==0 || B==0 || isNaN(A) || isNaN(B) || !Number.isInteger(Op)){
    alert("Incorrect input")
}

function Calc(A:number, B:number, Op:number):number{
    let result = A+B
    switch (Op){
        case 1:
            result=A-B
        case 2:
            result =A*B
        case 3:
            result = A/B
    }
    return result
}
console.log(Calc(A,B,Op))
let funcVar=function(A:number, B:number, Op:number):number{
    let result = A+B
    switch (Op){
        case 1:
            result=A-B
        case 2:
            result =A*B
        case 3:
            result = A/B
    }
    return result
}
console.log(funcVar(A,B,Op))
let result =(A:number, B:number, Op:number)=>{
    let result = A+B
    switch (Op){
        case 1:
            result=A-B
        case 2:
            result =A*B
        case 3:
            result = A/B
    }
    return result
}
console.log(result(A,B,Op))  