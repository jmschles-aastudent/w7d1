PA.Controllers.TaggingViewController = function(photo, tag) {
	this.photo_id = photo.id;
	this.tag = tag;
}

PA.Controllers.TaggingViewController.prototype.render = function () {
	$newTagDiv = $("<div>");
	$newTagDiv.addClass("new_tag_div");

	var user_id = this.tag.user_id;
	var username =

	var renderedTag =

}








PA.Controllers.TagFormController = function($rootEl, x_coord, y_coord, photo, friends) {
	this.photo_id = photo.id;
	this.friends = friends;
	this.$rootEl = $rootEl;
	this.x_coord = x_coord;
	this.y_coord = y_coord;
}

PA.Controllers.TagFormController.prototype.render = function () {
	var formDiv = $(".form_div");
	formDiv.addClass("new_tag_form");
	formDiv.css({
							"left": this.x_coord + "px",
							"top": this.y_coord + "px"});

	var renderedTagForm = JST["tags/new_tag"]({
		friends: this.friends,
		x_pos: this.x_coord,
		y_pos: this.y_coord
	});

	formDiv.html(renderedTagForm);

	this.installClickHandler();

}

PA.Controllers.TagFormController.prototype.installClickHandler = function() {
	var that = this;
	$("input[type=submit]").on("click", function() {
		var friend_id = parseInt($("select").val());
		var photo_id = that.photo_id;

		var tag = new PA.Models.Tag({
			user_id: friend_id,
			photo_id: photo_id,
			x_pos: that.x_coord,
			y_pos: that.y_coord
		})
		tag.save(function(tag) {
			console.log(tag);
		});
	})
}