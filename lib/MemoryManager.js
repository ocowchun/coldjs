module.exports = MemoryManager = function MemoryManager(argument) {
	this.ram = argument.ram;
	var availableRam = this.ram,
		usedRam = 0;
	this.addUsedRam = function(ram) {
		if (availableRam > ram) {
			availableRam = availableRam - ram;
			usedRam = usedRam + ram;
		}
	}

	this.releaseUsedRam = function(ram) {
		if ((this.ram - availableRam) >= ram) {
			availableRam = availableRam + ram;
			usedRam = usedRam - ram;
		}
	}

	this.getAvailableRam = function() {
		return availableRam;
	}

	this.getUsedRam = function() {
		return usedRam;
	}
}


// var m=new MemoryManager({ram:1024});
// m.addUsedRam(300);
// m.releaseUsedRam(100);
// console.log(m.getAvailableRam());

