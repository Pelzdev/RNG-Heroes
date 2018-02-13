let Game = {}

Game.Boot = function (game) {}

Game.Boot.prototype = {
	init:function () {
		// Random tutorial options given whatever
		this.input.maxPointers = 1;
		this.stage.disableVisibilityChange = true;
	},
	preload: function () {
		this.load.image('preloaderBar', 'assets/images/preloader.jpg')
	},
	create: function () {
		this.game.stage.smoothed = false;
		this.state.start('Preloader')
	}
}