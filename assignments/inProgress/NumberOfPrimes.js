function numberOfPrimes(N){
    let count = 0;
    for(let i = 2 ; i < N ; i++){
        if(isPrime(i)){
            count++;
        }
    }
    return count;
}
function isPrime(x){
    for(let i = 2; i <= n; i++){
        if(x % i === 0){
            return false;
        }
    }
    return true;
}