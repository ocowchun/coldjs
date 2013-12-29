module.exports = Event = function Event(argument) {
	this.startTime = argument.startTime;
	this.from = argument.from;
	this.to = argument.to;
	this.data = argument.data;
	this.eventType=argument.eventType;
}