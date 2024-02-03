function max(a, b) {
    return a > b ? a : b;
}

function fizBuz(no) {
    if (no % 3 === 0 && no % 5 === 0) return "FIZZBUZZ";
    else if (no % 3 === 0) return "FIZZ";
    else return "BUZZ"
}

export { max, fizBuz }