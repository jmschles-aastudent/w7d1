window.PA = {
	Models: {},
	Views: {},
	Routers: {}
};

$(function() {
	var $rootEl = $("#photos");
	var current_user_id = parseInt($("#current_user_id").html());
	PA.Models.Photo.fetch(current_user_id, function(photoArray) {
		var photoView = new PA.Views.PhotosView(photoArray);

		$rootEl.html(photoView.render().$el);
	});
});