
//Дано целое число N и набор из N целых чисел. Найти номера первого максимального и последнего минимального элемента из данного набора и вывести их в указанном порядке.

alert("Дано целое число N и набор из N целых чисел. Найти номера первого максимального и последнего минимального элемента из данного набора и вывести их в указанном порядке.")

let N: number= +prompt("Enter the size of the array")
if (Number.isInteger(N)){
    let arr=[]
    let isBroken=false
    for (let i =0;i<N;i++){
        let el:number =+prompt(`Enter the ${i+1} element`)
        if (!Number.isInteger(N)){
            alert("Non-integer")
            isBroken=true
            break
        }
        arr.push(el)
    }

    console.log(Math.max(...arr))
    console.log(Math.min(...arr))
    var max = arr.indexOf(Math.max(...arr))
    var min = N-1-arr.reverse().indexOf(Math.min(...arr))
    console.log(max)
    console.log(min)
    if(!isBroken){
        alert(`The max is ${max}, the min is ${min}`)
    }
}
else{
    alert("Non-integer")
}