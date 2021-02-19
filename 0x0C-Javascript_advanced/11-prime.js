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
for (let j = 0; j <= 100; j++) {
    setTimeout(function() { countPrimeNumbers();}, 0);
}
let finish = performance.now();
console.log("Execution time of calculating prime numbers 100 times was " + (finish - start) + (" milliseconds."));
