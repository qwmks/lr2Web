// Даны два целых числа A и B (A < B). Найти сумму всех целых чисел от A до B включительно.
alert("Даны два целых числа A и B (A < B). Найти сумму всех целых чисел от A до B включительно.")
let a: number= +prompt("Enter the first number")
let b: number=+prompt("Enter the second number")


if (Number.isInteger(+a) && Number.isInteger(+b)){
    if (a>=b){
        alert(`A is not less than B`)
    }
    else{
        let i=a
        let sum = a
        while (i<b){
            i++
            sum+=i
        }
        alert(`The sum is ${sum}`)
    }
    
}
else {
    alert("Numbers arent integer")
}


