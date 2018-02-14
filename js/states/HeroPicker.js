Game.HeroPicker = function (game) {}

Game.HeroPicker.prototype = {
	create: function () {
		const gameW = this.game.world.width
		const gameH = this.game.world.height
		const gameCenterX = this.game.world.centerX
		const gameCenterY = this.game.world.centerY
		// Make sure the bg height becomes 1/1 size of the window
		const bgScale = (winH) / bgH
		let bgImage = this.game.add.sprite(0, 0, 'grassBg')
		bgImage.scale.setTo(bgScale)
		// MENU BOXES - White border box	and blue inner box
		drawRoundedBox(this, 0, 0, gameW, 50, 4, 'ffffff')
		drawRoundedBox(this, 2, 2, gameW-4, 46, 4, '0000ff')
		drawRoundedBox(this, 0, 50, gameW, gameH-50, 4, 'ffffff')
		drawRoundedBox(this, 2, 52, gameW-4, gameH-54, 4, '0000ff')
		// HEADER TEXT
		const headerText = addCenteredText(
			this, gameW-10, 10, "Choose a hero", txtStyle.header
		)
		// PLAYER SPRITE
		// Place the player sprite
		drawSprite(this, 10, 60, 'jobsSheet', 0)
		addText(this, 64, 60, 'HeroName1', txtStyle.paragraph)
		drawSprite(this, 10, 140, 'jobsSheet', 2)
		addText(this, 64, 140, 'HeroName2', txtStyle.paragraph)
		drawSprite(this, 10, 220, 'jobsSheet', 4)
		addText(this, 64, 220, 'HeroName3', txtStyle.paragraph)

		// MENU ITEMS TEXT
		const backText = addTextLink(this, 10, 18, "Back", txtStyle.header2)
		backText.events.onInputUp.add(goToMainMenu, this)
		backText.anchor.set(0, 0)
		// FUNCTIONS
		function goToMainMenu () {
			this.state.start('MainMenu')
		}
	},
	update: function () {

	},
}
		