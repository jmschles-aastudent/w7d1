PA.Models.Tag = function(attrs) {
	this.photo_id = attrs.photo_id;
	this.user_id = attrs.user_id;
	this.baseUrl = "/photos/"+ this.photo_id +"/tags";
	this.x_pos = attrs.x_pos;
	this.y_pos = attrs.y_pos;
	this.attrs = attrs;
}

PA.Models.Tag.fetch = function(photo_id, callback) {
	$.ajax({
		url: "photos/"+ photo_id + "/tags.json",
		// might need a slash to start url
		success: function(tags) {
			PA.Models.Tag._all = _(tags).map(function(tagAttrs) {
				return new PA.Models.Tag(tagAttrs);
			});

			callback(PA.Models.Tag._all);
		}
	});
};

PA.Models.Tag.find = function(tag_id) {
	return _(PA.Models.Tag._all).findWhere({ id: tag_id });
};

PA.Models.Tag.prototype.save = function() {
	if (!this.id) {
		this.create();
	} else {
		this.update();
	}
};

PA.Models.Tag.prototype.create = function() {
	var tagModel = this;
	$.ajax({
		url: this.baseUrl,
		type: "post",
		data: {
			user_id: this.user_id,
			x_pos: this.x_pos,
			y_pos: this.y_pos
		},
		success: function(tag) {
			tagModel.id = tag.id;
			console.log("Tag created!");
		}
	})
};

PA.Models.Tag.prototype.update = function() {
	$.ajax({
		url: '/tags/' + this.id,
		type: "put",
		data: {
			id: this.id,
			photo_id: this.photo_id,
			user_id: this.user_id,
			x_pos: this.x_pos,
			y_pos: this.y_pos
		},
		success: function(tag) {
			console.log("Tag updated!");
		}
	})
};

PA.Models.Tag.prototype.destroy = function() {
	$.ajax({
		url: '/tags/' + this.id,
		type: "delete",
		success: function() {
			console.log("You deleted the tag!");
		}
	});
};