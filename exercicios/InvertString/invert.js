const input = document.querySelector("#inp-user")
document.querySelector("#btn-invert").addEventListener('click',invertWord)
const result = document.querySelector("#result")
function invertWord(){
    const array = input.value.split('')
    let invert = '';
    for(i=array.length-1; i >=0;i--){
        invert+=array[i]
    }
    result.textContent=""
    result.textContent=invert
}
