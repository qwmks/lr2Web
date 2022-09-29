alert("Дан массив размера N. Поменять порядок его элементов на обратный");
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
        alert("The reversed array: ".concat(arr.reverse()));
    }
}
else {
    alert("Non-integer");
}
