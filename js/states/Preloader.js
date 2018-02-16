Game.Preloader = function (game) {
	this.preloadBar = null
}

Game.Preloader.prototype = {
	preload: function () {
		this.game.load.atlas(
			'spritesheet', 'assets/images/spritesheets/spritesheet.png', 
			'assets/images/spritesheets/spritesheet.json',
			Phaser.Loader.TEXTURE_ATLAS_JSON_HASH
		)
		this.game.load.image('grassBg', 'assets/images/grass2_bg.png')
		this.preloadBar = this.add.sprite( 
			this.world.centerX, this.world.centerY, 'preloaderBar'
		)
		this.preloadBar.anchor.setTo(0.5, 0.5)
		this.time.advancedTiming = true
		this.load.setPreloadSprite(this.preloadBar)
	},
	create: function () {
		this.state.start('MainMenu')
	}
}
