module.exports = DataCenter = function DataCenter(argument) {
	argument = argument || {}
	this.name = argument.name || "DataCenter";

	this.hostList = [];

}

DataCenter.prototype.resourceCharcteristics =
	function resourceCharcteristics(cb) {
		cb(this.hostList);
};

DataCenter.prototype.vmCreated=function(){

}


// DataCenter.prototype.cb

// DataCenter.prototype.method_name = function(first_argument) {
// 	// body...
// };