
// Add a method to strings to detect if they contain a substring
String.prototype.contains = function(s) {
  return this.indexOf(s) !== -1;
}

// Helper methods
let helpers = {
	saySup : function(message) {
		alert(message);
	}
}

export default helpers;