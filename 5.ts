//Дано целое число N (> 0). Найти наименьшее целое положительное число K, квадрат которого превосходит N: K2 > N.
//Функцию извлечения квадратного корня не использовать.
alert("Дано целое число N (> 0). Найти наименьшее целое положительное число K, квадрат которого превосходит N: K2 > N. Функцию извлечения квадратного корня не использовать.")

let n: number= +prompt("Enter the N")

let k =1
if (!Number.isInteger(n)){
    alert("input is not integer")
}
else{
    if (n===0){
        alert("Zero is not valid")
    }
    else{
        while (k**2<=n){
            k+=1
        }
        
        alert(`The k is ${k}`)
    }
}

