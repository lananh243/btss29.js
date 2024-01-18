let str = "quý khách được nhận phiếu giảm giá";
function check(str) {
    let arr = str.split(" ");
    for(let i=0; i< arr.length; i++){
        let from = arr[i];
        let capitalized = from.charAt(0).toUpperCase() + from.slice(1);
        arr[i] = capitalized;
    }
    let capitalized = arr.join(" ");
    console.log("Chuỗi mới là: ",capitalized);
}
check(str);