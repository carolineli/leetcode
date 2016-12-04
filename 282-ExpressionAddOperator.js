/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */
var addOperators = function(num, target) {
	var ret = [];

	helper(ret, "", 0, num, target, 0, 0);

	return ret;
};

var helper = function(ret, cur, index, num, target, sum, prev) {
	if (index === num.length && sum === target) {
		ret.push(cur);
	}

	for(var i = index + 1; i <= num.length; i++) {
		var curNum = parseInt(num.substring(index, i));
		if (i !== index + 1 && num.charAt(index) === "0") {
			break;
		}
		if (index === 0) {
			helper(ret, cur + curNum, i, num, target, sum + curNum, curNum);
		}
		else {
			helper(ret, cur + "+" + curNum, i, num, target, sum + curNum, curNum);
			helper(ret, cur + "-" + curNum, i, num, target, sum - curNum, -curNum);
			helper(ret, cur + "*" + curNum, i, num, target, sum - prev + prev * curNum, prev * curNum);
		}
	}
}

console.log(addOperators("105", 5));