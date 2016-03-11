import _ from 'lodash';

// Add a method to strings to detect if they contain a substring
String.prototype.contains = function(s) {
  return this.indexOf(s) !== -1;
}

// Add method to move item position in array
Array.prototype.move = function(from, to) {
    this.splice(to, 0, this.splice(from, 1)[0]);
};

// Helper methods
let helpers = {

	capitalizeEachWord: function(str) {
	    return str.replace(/\w\S*/g, function(txt) {
	        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
	    });
	},

	prettyUrl : function(str) {
		return str.replace(/\s+/g, '-').toLowerCase();
	},

	decodePrettyUrl : function(str) {
		return this.capitalizeEachWord(str.replace(/-/g, ' '));
	},

	findByTag: function(projects, tag) {
		_.filter(projects, function(p){
			return _.find(p.tags, {name: tag})
		});
	}
}

export default helpers;