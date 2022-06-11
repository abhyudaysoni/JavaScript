function test_divisors(low, high) {
    var str = "";
    for (var i = low; i <= high; i++) {
        str = str + i + " ";
        if (i % 3 === 0) {
            str = str + "div3 ";
        }
    }
    console.log(str);
}
