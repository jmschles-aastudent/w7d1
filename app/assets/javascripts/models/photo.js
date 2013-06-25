PA.Models.Photo = function(attrs) {
	this.title = attrs.title;
	this.user_id = attrs.user_id;
	this.url = attrs.url;
	this.id = attrs.id;
	this.baseUrl = "/photos";
	this.attrs = attrs;
};


PA.Models.Photo.fetch = function(callback) {
	$.ajax({
		url: "/photos.json",
		type: "get",
		success: function(photoArray) {
			PA.Models.Photo._all = _.map(photoArray, function(photoAttrs) {
				return new PA.Models.Photo(photoAttrs);
			});
			callback(PA.Models.Photo._all);
		}
	});
};

PA.Models.Photo.find = function(photo_id) {
	return _(PA.Models.Photo._all).findWhere({id: photo_id});
};

PA.Models.Photo.prototype.refresh = function(attrs) {
	this.title = attrs.title;
	this.user_id = attrs.user_id;
	this.url = attrs.url;
	this.id = attrs.id;
	this.attrs = attrs;
};

PA.Models.Photo.prototype.save = function() {
	if (this.id) {
		this.update();
	} else {
		this.create();
	}
};

PA.Models.Photo.prototype.create = function() {
	$.ajax({
		url: this.baseUrl,
		type: 'post',
		data: this.attrs,
		success: function(data) {
			console.log("You created me!");
		}
	});
};

PA.Models.Photo.prototype.update = function() {
	$.ajax({
		url: this.baseUrl + this.id,
		type: 'post',
		data: this.attrs,
		success: function(data) {
			console.log("You updated me!");
		}
	});
};


PA.Models.Photo.prototype.fetch = function(callback) {
	var photoModel = this
	$.ajax({
		url: this.baseUrl + this.id,
		success: function(photo) {
			photoModel.refresh(photo);
			callback(photo);
		}
	})
}

PA.Models.Photo.prototype.destroy = function(callback) {
	var photoModel = this
	$.ajax({
		url: this.baseUrl + this.id,
		type: "delete",
		success: function(message) {
			console.log("Thanks for deleting me.");
		}
	})
}