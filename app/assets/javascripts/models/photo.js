PhotoApp.Photo = function(attrs) {
	this.title = attrs.title;
	this.user_id = attrs.user_id;
	this.url = attrs.url;

	this.attrs = attrs;
}

PhotoApp.Photo.prototype.save = function() {
	if (this.id) {
		this.update;
	} else {
		this.create;
	}
}

PhotoApp.Photo.prototype.create = function() {
	$.ajax({
		url: '/photos',
		type: 'post',
		data: this.attrs,
		success: function(data) {
			console.log("You created me!");
		}
	});
}

PhotoApp.Photo.prototype.update = function() {
	$.ajax({
		url: '/photos/' + this.id,
		type: 'post',
		data: this.attrs,
		success: function(data) {
			console.log("You updated me!");
		}
	});
}
