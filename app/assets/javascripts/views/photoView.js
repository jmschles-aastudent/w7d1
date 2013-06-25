PA.Views.PhotosView = function(photos) {
	this.photos = photos;
	this.$el = $("<div>");
}

PA.Views.PhotosView.prototype.render = function() {
	var photosView = this;
	var renderedContent = JST["photos/photos"]({
		photos: photosView.photos
	});

	photosView.$el.html(renderedContent);
	return photosView;
}