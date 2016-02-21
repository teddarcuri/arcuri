import _ from 'lodash';

// Add a method to strings to detect if they contain a substring
String.prototype.contains = function(s) {
  return this.indexOf(s) !== -1;
}

// Helper methods
let helpers = {
	saySup : function(message) {
		alert(message);
	},

	findByTag: function(projects, tag) {
		_.filter(projects, function(p){
			return _.find(p.tags, {name: tag})
		});
	}
}

export default helpers;