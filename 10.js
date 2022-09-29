alert("Дано целое положительное число. Вывести символы, изображающие цифры этого числа (в порядке справа налево).");
var N = +prompt("Enter the size of the array");
if (Number.isInteger(N)) {
    var str = N.toString();
    console.log(str.split(""))
    str.split("").reverse().forEach((element)=> {
        switch (element) {
            case "0":
                alert("+-+\n|    |\n+-+");
                break
            case "1":
                alert("|\n|\n|")
                break
            case "2":
                alert(
`----+
       |
+---+
|
+----`)
break
            case "3":
                alert(`---+
      |
---+
      |
---+`)
break
            case "4":
                alert("|       |\n|       |\n+---+\n        |\n        |")
                break
            case "5":
                alert("+----\n|\n+---+\n       |\n----+")
                break
            case "6":
                alert("+----\n|\n+---+\n|      |\n----+")
                break
            case "7":
                alert("+---+\n|      |\n       |\n       |\n       |")
                break
            case "8":
                alert("+---+\n|       |\n+---+\n|       |\n+---+")
                break
            case "9":
                alert("+---+\n|       |\n+---+\n        |\n-----+")
                break
        }
    });
}
else {
    alert("Non-integer");
}
