window.PA = {
	Models: {},
	Views: {},
	Controllers: {},
	Routers: {},
	Store: {}
};

$(function() {
	var $rootEl = $("#photos");
	var current_user_id = parseInt($("#current_user_id").html());
	PA.Models.Photo.fetch(function(photoArray) {
		var photoViewController = new PA.Controllers.PhotosViewController($rootEl, photoArray);
		photoViewController.render();
	});

	// PA.Models.Tag.fetch(3, function(tags) {
	// 	console.log(tags);
	// });
});