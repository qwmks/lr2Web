// Даны два ненулевых числа. Найти сумму, разность, произведение и частное их квадратов.
alert("Даны два ненулевых числа. Найти сумму, разность, произведение и частное их квадратов.")
let number1= +prompt("Enter the first number")
let number2=+prompt("Enter the second number")

if (number1!=0 && number2!=0 && !isNaN(number1) && !isNaN(number2)){
    alert(`The sum is ${number1**2+number2**2}`)
    alert(`The subtraction is ${number1**2-number2**2}`)
    alert(`The multyplication is ${number1**2*number2**2}`)
    alert(`The division is ${number1**2/number2**2}`)
}
else {
    alert("Wrong input")
}



