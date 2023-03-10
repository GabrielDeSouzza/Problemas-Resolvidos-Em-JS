

const numInput = document.querySelector('#input-num')
function verifyNum(){
    const fibonacci = new Array()
    fibonacci.push(0)
    fibonacci.push(1)
    const num =numInput.value
    for(i=1; i < 10000; i++){
        const result = fibonacci[i-1]+fibonacci[i]
        if(num ==0){
            alert(`O número 0 pertence a sequencia de Fibonacci`)
            return
        }
        else if(result == num){
            alert(`O número ${num} pertence a sequencia de Fibonacci`)
            return;
        }
        else if(result > num){
            alert(`O número ${num} não pertence a sequência de Fibonacci`)
            return;
        }
        
        else
            fibonacci.push(result)
    }
    console.log(fibonacci)
}

document.querySelector('#btn-calc').addEventListener('click',verifyNum)



