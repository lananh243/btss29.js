let str = prompt("Nhập một chuỗi bất kì");
let character = "Lập trình Javascript";

function check(str) {
    let count = 0;
    for(let i= 0; i< str.length; i++){
        if(character === str){
            count ++;
        }
    } 
    if(count === character.length){
        console.log("True");
    }else{
        console.log("False");
    }
}
check(str);