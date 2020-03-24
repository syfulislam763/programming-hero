var num = [2, 3, 4, 5, 2, 3, 4, 5, 7, 6, 7];
var uniqueNum = [];
for (i = 0; i < num.length; i++) {
    var element = num[i];
    var index = uniqueNum.indexOf(element);
    if (index == -1) {
        uniqueNum.push(element);
    }
}
console.log(uniqueNum);