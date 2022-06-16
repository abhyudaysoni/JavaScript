function mul(x) {
    return function mul2(y) {
        return function mul3(z) {
            console.log(x * y * z);
        };
    };
}
