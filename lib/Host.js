var PeManager = require('./PeManager'),
	MemoryManager = require('./MemoryManager'),
	StorageManager = require('./StorageManager');



module.exports = Host = function Host(argument) {
	this.name = argument.name;
	this.peManager = argument.peManager;
	this.memoryManager = argument.memoryManager;
	this.storageManager = argument.storageManager;

}

//storage,ram,cpu,bw

function defaultMemoryManager() {

}