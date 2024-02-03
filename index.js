function max(a, b) {
    return a > b ? a : b;
}

function fizBuz(no) {
    if (no % 3 === 0 && no % 5 === 0) return "FIZZBUZZ";
    else if (no % 3 === 0) return "FIZZ";
    else return "BUZZ"
}

function average(nums) {
    if (nums.length === 0) return NaN;
    const sum = nums.reduce((acc, item) => acc + item,0)
    return sum / nums.length
}

export { max, fizBuz,average }