var SimEvent = require('./SimEvent'),
	SimEntity = require('./SimEntity'),
	_ = require('underscore');

module.exports = EventSim=function EventSim() {
	var futureQueue = [],
		deferedQueue = [],
		entitys = [],
		currentTime = 0;

}

function createEvent(from, to, eventType, time, data) {
	data = data || {}
	return new SimEvent({
		from: from,
		to: to,
		startTime: time,
		data: data,
		eventType: eventType
	});
}

function pushEvent(e) {
	futureQueue.push(e);
}

function excute() {
	while (futureQueue.length > 0) {
		pushToDefered();
		console.log("currentTime:" + currentTime);
		excuteDefered();
	}
}

function pushToDefered() {
	//find min >= cuurentTime
	var firstEvent = futureQueue[0],
		length = futureQueue.length;
	currentTime = firstEvent.startTime;
	deferedQueue = _.filter(futureQueue,
		function(e) {
			return e.startTime == firstEvent.startTime;
		});
	futureQueue = _.filter(futureQueue, function(e) {
		return e.startTime != firstEvent.startTime;
	});
}

function excuteDefered() {
	console.log(deferedQueue[0].startTime);
	console.log("event:" + deferedQueue.length);
	_.each(deferedQueue, function(e) {
		excuteEvent(e)
	});
	deferedQueue = [];
}

function excuteEvent(e) {
	var from = e.from,
		to = e.to,
		data = e.data,
		eventType = e.eventType;

	entitys[to].trigger(eventType, data);
}

/**
 * .########...#########...#########...
 * ##.....##...##.....##...##.....##...
 * ##..........##.....##...##.....##...
 * ##..........##.....##...##.....##...
 * ##..#####...##.....##...##.....##...
 * ##.....##...##.....##...##.....##...
 * .########...#########...#########...
 */
//*****************************goo*****************************
// var Man = SimEntity.extend({
// 	init: function(argument) {
// 		this.name = argument.name || "GUGU ";
// 	},
// 	sayHello: sayHello,
// 	reply: reply
// });



// function sayHello(argument) {
// 	console.log(this.name + " say hello " + argument.name);

// }

// function reply(argument) {
// 	console.log(reply);
// }

/**
 * #########...#########....#######....#########...
 * #########...##..........##.....##...#########...
 * ...###......##..........##.............###......
 * ...###......#########....#######.......###......
 * ...###......##.................##......###......
 * ...###......##..........##.....##......###......
 * ...###......#########....#######.......###......
 */
//*****************************test*****************************


// test();

// function test() {
// 	var g1 = new Man({
// 		name: 'Ben'
// 	});
// 	var g2 = new Man({
// 		name: 'Joe'
// 	});

// 	// var e1 = createEvent(1, 2, 3, {
// 	// 	goo: 123
// 	// });
// 	entitys.push(g1);
// 	entitys.push(g2);
// 	var e1 = createEvent(0, 1, "sayHello", 2, g2);
// 	pushEvent(e1);
// 	excute();

// 	// console.log(g1);
// }