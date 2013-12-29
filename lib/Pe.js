module.exports = Pe = function Pe(argument) {
	this.mips = argument.mips;
		var availableMips = this.mips,
		usedMips = 0;
	this.addUsedMips = function(mips) {
		if (availableMips > mips) {
			availableMips = availableMips - mips;
			usedMips = usedMips + mips;
		}
	}

	this.releaseUsedMips = function(mips) {
		if ((this.mips - availableMips) >= mips) {
			availableMips = availableMips + mips;
			usedMips = usedMips - mips;
		}
	}

	this.getAvailableMips = function() {
		return availableMips;
	}

	this.getUsedMips = function() {
		return usedMips;
	}
}