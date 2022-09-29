//Дано целое положительное число. Вывести символы, изображающие цифры этого числа (в порядке справа налево).
export {}
alert("Дано целое положительное число. Вывести символы, изображающие цифры этого числа (в порядке справа налево).")

let N: number= +prompt("Enter the size of the array")
if (Number.isInteger(N)){
    let str:string= N.toString()
    str.split("").reverse().forEach(element => {
        switch (element){
            case "0":
                alert(
                    `+-+
                     | |
                     +-+`
                )

        }
    });
}
else{
    alert("Non-integer")
}