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
	console.log("x_coord: " + this.x_coord);
	var renderedTagForm = JST["tags/new_tag"]({
		friends: this.friends,
		x_pos: this.x_coord,
		y_pos: this.y_coord
	});

	this.$rootEl.append(renderedTagForm);
}