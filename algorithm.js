function averagePair(num1, num2) {
    for (let i = 0; i < num1.length; i++) {
        for (let j = i + 1; j < num1.length; j++) {
            let sum = num1[i] + num1[j] / 2
            if (sum == num2) {
                return true
            }
        }
    }
    return false

}
console.log(averagePair([1, 2, 3], 2.5))
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8))
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1))