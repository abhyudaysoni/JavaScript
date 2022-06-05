var arr = [2, 4, 6, 8, 10];
var res = new Array();
var getConcatenation = function (nums) {
    for (var i = 0; i < nums.length; i++) {
        res[i] = nums[i];
    }
    for (var i = 0; i < nums.length; i++) {
        res[i + nums.length] = nums[i];
    }
    return ans;
};
var printArray = function (nums) {
    for (var i = 0; i < nums.length; i++) {
        console.log(nums[i]);
    }
};
getConcatenation(arr);
printArray(res);
