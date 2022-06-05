var countGoodRectangles = function (rectangles) {
    let count = 0;
    let maxSq = 0;
    for (var i = 0; i < rectangles.length; i++) {
        maxSq = Math.max(Math.min(rectangles[i][0], rectangles[i][1]), maxSq);
        if (maxSq <= Math.min(rectangles[i][0], rectangles[i][1])) {
            count++;
        }
    }
    return count;
};
