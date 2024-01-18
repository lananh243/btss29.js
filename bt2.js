let array = [1,2,8,10,5];
function findLongest(array) {
    let max = array[0];
    for(let i=1;i< array.length; i++){
       if(array[i] > max){
        max = array[i];
        } 
    }
    console.log("Phần tử lớn nhất trong mảng là: ", max);
}
findLongest(array);