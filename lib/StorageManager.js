module.exports = StorageManager = function StorageManager(argument) {
	this.storage = argument.storage;
	var availableStorage = this.storage,
		usedStorage = 0;
	this.addUsedStorage = function(storage) {
		if (availableStorage > storage) {
			availableStorage = availableStorage - storage;
			usedStorage = usedStorage + storage;
		}
	}

	this.releaseUsedStorage = function(storage) {
		if ((this.storage - availableStorage) >= storage) {
			availableStorage = availableStorage + storage;
			usedStorage = usedStorage - storage;
		}
	}

	this.getAvailableStorage = function() {
		return availableStorage;
	}

	this.getUsedStorage = function() {
		return usedStorage;
	}
}