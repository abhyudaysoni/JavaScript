function numberOfPrimes(N) {
    let count = 0;
    for (let i = 2; i <= N; i++) {
        if (isPrime(i)) {
            count++;
        }
    }
    return count;
}
function isPrime(x) {
    if (x <= 1) return false;
    if (x === 2) return true;
    if (x % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(x); i = i + 2) {
        if (x % i === 0) {
            return false;
        }
    }
    return true;
}
