const numbers = [2, 2, 2, 2, 2];
var sum = numbers[0];
for (i = 0; i < numbers.length; i++) {
    var value = numbers[i];
    if (value > 0) {
        sum = sum + value;

    }
}
console.log(sum);