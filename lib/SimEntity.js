require('./class');

module.exports = SimEntity = Class.extend({
	init: function(argument) {
		// this.eventTable = argument.eventTable;
	},
	trigger: function trigger(eventType, data) {
		var fn = this[eventType]; //this.eventTable[eventType];
		fn.apply(this, [data]);
	}
});