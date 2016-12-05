var RandomPickIndex = function(nums) {
	this.nums = nums;
};

RandomPickIndex.prototype.pick = function(target) {
	var count = 0;
	var ret;
	for (var i = 0; i < this.nums.length; i++) {
		if (this.nums[i] === target) {
			count++;
			if (Math.random() < 1 / count) {
				ret = i;
			}
		}
	}
	return ret;
};

var myNums = [1,2,3,3,3];
var myPick = new RandomPickIndex(myNums);

var map = {};
for (var i = 0; i < 1000; i++) {
	var tmp = myPick.pick(3);
	map[tmp] = map[tmp] || 0;
	map[tmp]++;
}

console.log(map);