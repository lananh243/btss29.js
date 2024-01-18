let string ='Lập trình Javascript';

function check(string) {
    let trimmedStr = string.replace(/\s/g, '').replace(/null/g, '');
    let remove = trimmedStr.length;
    console.log("Kí tự của chuỗi là: ", remove);
}
check(string);