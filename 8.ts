//Дан целочисленный массив размера N.
// Вывести все содержащиеся в данном массиве четные числа в порядке убывания их индексов, а также их количество K.
export {}
alert("Дан целочисленный массив размера N. Вывести все содержащиеся в данном массиве четные числа в порядке убывания их индексов, а также их количество K.")

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
    if(!isBroken){
        let count =0
        let evenArr=[]
        arr.forEach(
            (element)=>{
                if (element%2===0){
                    count+=1
                    evenArr.push(element)
                }
            }
        )
        alert(`The even elements: ${evenArr.reverse()}, the amount: ${count}`)
    }
}
else{
    alert("Non-integer")
}