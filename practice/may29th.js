function x() {
    var a = 12;
    y();
    function y() {
        console.log("y function");
        console.log(a);
    }
}
x();
if (9 > 2) {
    var x = 27;
    console.log(x);
}
