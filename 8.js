alert("Дан целочисленный массив размера N. Вывести все содержащиеся в данном массиве четные числа в порядке убывания их индексов, а также их количество K.");
var N = +prompt("Enter the size of the array");
if (Number.isInteger(N)) {
    var arr = [];
    var isBroken = false;
    for (var i = 0; i < N; i++) {
        var el = +prompt("Enter the ".concat(i + 1, " element"));
        if (!Number.isInteger(N)) {
            alert("Non-integer");
            isBroken = true;
            break;
        }
        arr.push(el);
    }
    if (!isBroken) {
        var count_1 = 0;
        var evenArr_1 = [];
        arr.forEach(function (element) {
            if (element % 2 === 0) {
                count_1 += 1;
                evenArr_1.push(element);
            }
        });
        alert("The even elements: ".concat(evenArr_1.reverse(), ", the amount: ").concat(count_1));
    }
}
else {
    alert("Non-integer");
}
