PA.Models.User = function(attrs) {
	this.username = attrs.username;
	this.id = attrs.id;
};

PA.Models.User.fetchFriends = function(callback) {
	$.ajax({
		url: "/users",
		success: function(arrayOfFriends) {
			callback(arrayOfFriends);
		}
	});
}