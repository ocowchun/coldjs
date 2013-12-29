module.exports = SimEntity = function SimEntity(argument) {}

module.exports.initSimEntity =
	function initSimEntity(argument) {
		this.eventTable = argument.eventTable;

}


SimEntity.prototype.trigger =
	function trigger(eventType, data) {
		var fn = this.eventTable[eventType];
		fn.apply(this, [data]);
};

// function Goo(argument) {
// 	this.name = "GUGU ";
// 	argument.eventTable = {
// 		"sayHello": sayHello
// 	};
// 	initSimEntity.apply(this, [argument]);
// }

// function sayHello(argument) {
// 	console.log(this.name+ "say hello " + argument.name);
// }

// Goo.prototype = SimEntity.prototype;
// var c = new Goo({});
// c.trigger("sayHello", {
// 	name: "ben"
// });
// // console.log(c.eventTable);