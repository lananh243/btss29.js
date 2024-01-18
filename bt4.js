let string =prompt("Nhập vào một chuỗi: ");
let character =prompt("Nhập vào một kí tự: ");
function appear(string) {
    let count = 0;
    for(let i=0; i< string.length; i++){
        if(string[i] === character){
            count++;
        }
    }
    console.log("Số lần xuất hiện của kí tự trong chuỗi là: " + count);
}
appear(string);