//Дан массив размера N. Поменять порядок его элементов на обратный.
export {}
alert("Дан массив размера N. Поменять порядок его элементов на обратный")

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
        alert(`The reversed array: ${arr.reverse()}`)
    }
}
else{
    alert("Non-integer")
}