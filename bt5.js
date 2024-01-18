let str =prompt("Nhập chuỗi bất kì: ");
let arr = ["Số 1", "Số 2", "Số 3"];
function connect(str) {
    arr.push(str);
    console.log("Phần tử trong mảng chứa chuỗi là: ", arr);
}
connect(str);