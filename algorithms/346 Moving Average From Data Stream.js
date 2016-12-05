var MovingAverageFromDataStream = function(size) {
	this.size = size;
	this.queue = [];
	this.sum = 0;
};

MovingAverageFromDataStream.prototype.next = function(num) {
	if (this.queue.length === this.size) {
		this.sum -= this.queue[0];
		this.queue.shift();
	}

	this.queue.push(num);
	this.sum += num;

	return this.sum / this.queue.length;
};

var test = new MovingAverageFromDataStream(3);
var myCase = [1, 10, 3, 5];
for (var i = 0; i < myCase.length; i++) {
	console.log(test.next(myCase[i]));
}
