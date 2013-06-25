
PA.Controllers.PhotosViewController = function(photos) {
	this.photos = photos;
	this.$el = $("<div>");
}

PA.Controllers.PhotosViewController.prototype.render = function() {
	var photosViewController = this;
	var renderedContent = JST["photos/photos"]({
		photos: photosViewController.photos
	});

	photosViewController.$el.html(renderedContent);
	return photosViewController;
}