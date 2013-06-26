PA.Controllers.TaggingViewController = function(photo) {
	this.tags = photo.tags
}

PA.Controllers.TagFormController = function($rootEl, x_coord, y_coord, friends) {
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
}