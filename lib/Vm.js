module.exports = Vm = function Vm(argument) {
	this.mips = argument.mips;
	this.numberOfPes = argument.numberOfPes;
	this.ram = argument.ram;
	this.storage = argument.storage;
}