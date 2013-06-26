PA.Models.User = function(attrs) {
	this.username = attrs.username;
	this.id = attrs.id;
};

PA.Models.User.find = function(friend_id, callback) {
	var friends = PA.Models.User.fetchFriends(callback)
	return _.findWhere(friends, {id: friend_id});
}

PA.Models.User.fetchFriends = function(callback) {
	$.ajax({
		url: "/users",
		success: function(arrayOfFriends) {
			PA.Models.User._all = _.map(arrayOfFriends, function(friendAttrs) {
				return new PA.Models.User(friendAttrs)
			});
			callback(arrayOfFriends);
		}
	});
}