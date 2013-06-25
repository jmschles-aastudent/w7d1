

PA.Models.Photo = function(attrs) {
	this.title = attrs.title;
	this.user_id = attrs.user_id;
	this.url = attrs.url;

	this.attrs = attrs;
};

PA.Models.Photo.prototype.save = function() {
	if (this.id) {
		this.update;
	} else {
		this.create;
	}
};

PA.Models.Photo.prototype.create = function() {
	$.ajax({
		url: '/photos',
		type: 'post',
		data: this.attrs,
		success: function(data) {
			console.log("You created me!");
		}
	});
};

PA.Models.Photo.prototype.update = function() {
	$.ajax({
		url: '/photos/' + this.id,
		type: 'post',
		data: this.attrs,
		success: function(data) {
			console.log("You updated me!");
		}
	});
};

PA.Models.Photo.fetch = function(user_id, callback) {
	$.ajax({
		url: "/users/"+user_id+"/photos.json",
		type: "get",
		success: function(photoArray) {
			console.log("photoArray is ")
			console.log(photoArray)
			PA.Models.Photo._all = _.map(photoArray, function(photoAttrs) {
				return new PA.Models.Photo(photoAttrs);
			});
			callback(PA.Models.Photo._all);
		}
	});
};