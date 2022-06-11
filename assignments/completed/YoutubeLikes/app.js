var like = document.getElementById("increment"),
    count = 0,
    counter = document.getElementById("counter");
var dislike = document.getElementById("decrement");
like.onclick = function () {
    count++;
    counter.innerHTML = count;
};
dislike.onclick = function () {
    if (count > 0) {
        count--;
    }
    counter.innerHTML = count;
};
