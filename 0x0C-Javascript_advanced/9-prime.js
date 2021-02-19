function countPrimeNumbers() {
    let primes = [];
    for (let i = 2; i <= 100; i++) {
        if (i % 2 != 0) {
            primes.push(i);
        }
    }
    return primes;
}

let start = performance.now();
countPrimeNumbers();
let finish = performance.now();
console.log("Execution time of printing countPrimeNumbers was " + (finish - start) + (" milliseconds."));
