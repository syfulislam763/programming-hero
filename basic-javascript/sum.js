var num = [23, 54, 32, 35, 94, 45, 88, 37];
var max = num[0];
for (i = 0; i < num.length; i++) {
    var element = num[i];
    if (element > max) {
        max = element;
    }
}
console.log("Highest number is ", max)

function numbersSum(values) {
    var sum = 0;
    for (i = 0; i < numbers.length; i++) {
        var element = numbers[i];
        sum = sum + element;
    }
    return sum;
}
var numbers = [2, 43, 5, 75, 34, 35, 23, 6, 6]
var result = numbersSum(numbers);

console.log("value is ", result);
var id = [23, 24, 54, 35]
var position = id.indexOf(35);
console.log(position);