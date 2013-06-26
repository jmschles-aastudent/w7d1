
PA.Controllers.PhotosViewController = function($rootEl, photos) {
	this.photos = photos;
	this.$rootEl = $rootEl;
}

PA.Controllers.PhotosViewController.prototype.render = function() {
	var photosViewController = this;
	var renderedContent = JST["photos/photos"]({
		photos: photosViewController.photos
	});

	photosViewController.$rootEl.html(renderedContent);

	this.installClickHandler();

}

PA.Controllers.PhotosViewController.prototype.installClickHandler = function() {
	var that = this;
	$("img").on("click", function(event) {
		var $rootEl = that.$rootEl;
		var photo_id = parseInt($(this).attr("data-photo-id"))
		var photo = _.findWhere(that.photos, {id: photo_id});

		var showController = new PA.Controllers.PhotoShowController(
			$rootEl, photo
		)
		showController.render();
	})
}


PA.Controllers.PhotoShowController = function($rootEl, photo) {
	this.photo = photo;
	this.$rootEl = $rootEl;
};

PA.Controllers.PhotoShowController.prototype.render = function() {
	var photoShowController = this;
	var renderedContent = JST["photos/photo"]({
		photo: photoShowController.photo
	});

	photoShowController.$rootEl.html(renderedContent);
	this.installClickHandler();
};

PA.Controllers.PhotoShowController.prototype.installClickHandler = function() {
	var that = this;
	$("img").on("click", function(event) {

		var offset = $(this).offset();
		var x_pos = event.clientX - offset.left;
		var y_pos = event.clientY - offset.top;
		console.log("x_pos: " + x_pos);

		var photo_id = that.photo.id;
		PA.Models.User.fetchFriends(function(friendArray) {
			var bigDiv = $("#photos");

			var littleDiv = $("<div>");
			var tagFormController = new PA.Controllers.TagFormController(bigDiv, x_pos, y_pos, friendArray);

			tagFormController.render();
		});



		// var tagFormController = new

		// var newTag = new PA.Models.Tag
	})
}