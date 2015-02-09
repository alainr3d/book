var Page = {

	el : null,

	init: function(){

		var that = this;

		that.setEl();
		that.attachDomEvents();

	},
	setEl: function(element){

		var that = this;

		that.el = element;

		return that.el;
	},
	getEl: function(){

		var that = this;

		return that.el;

	},

	closePage: function(){

		var that = this;

		that.updateRotateY(70);

	},
	openPage: function(){

		var that = this;

		that.updateX(0);

	},

	//attach events:
	attachDomEvents: function(){

	},

	//dom updates
	updateRotateY: function(degValue){

		var that = this;
		that.el.style.webkitTransform = "rotateY(" + degValue + "deg)";

	},
	updateX: function(pctValue){

		var that = this;
		that.el.style.webkitTransform = "translate(" + pctValue + "%,0)";

	},


};