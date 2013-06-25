window.PA = {
	Models: {},
	Views: {},
	Controllers: {},
	Routers: {}
};

$(function() {
	var $rootEl = $("#photos");
	var current_user_id = parseInt($("#current_user_id").html());
	PA.Models.Photo.fetch(function(photoArray) {
		var photoViewController = new PA.Controllers.PhotosViewController(photoArray);

		$rootEl.html(photoViewController.render().$el);
	});

	PA.Models.Tag.fetch(3, function(tags) {
		console.log(tags)
	});
});