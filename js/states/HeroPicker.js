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
		drawRoundedBox(
			this, 0, 0, gameW, 50, 4, 'ffffff'
		)
		drawRoundedBox(
			this, 2, 2, gameW-4, 46, 4, '0000ff'
		)
		drawRoundedBox(
			this, 0, 50, gameW, gameH-50, 4, 'ffffff'
		)
		drawRoundedBox(
			this, 2, 52, gameW-4, gameH-54, 4, '0000ff'
		)
		// HEADER TEXT
		const headerText = addCenteredText(
			this, gameW-10, 12, "Choose a hero", txtStyle.header
		)
		headerText.anchor.set(1, 0)
		// PLAYER SPRITE
		// Place the player sprite
		const heroSprite1 = drawSprite(this, 10, 60, 'jobsSheet', 0)
		const heroText1 = addText(
			this, 100, 80, 'HeroName1', txtStyle.paragraph
		)
		const heroSprite2 = drawSprite(this, 10, 130, 'jobsSheet', 2)
		const heroText2 = addText(
			this, 100, 140, 'HeroName2', txtStyle.paragraph
		)
		const heroSprite3 = drawSprite(this, 10, 200, 'jobsSheet', 4)
		const heroText3 = addText(
			this, 100, 200, 'HeroName3', txtStyle.paragraph
		)
		

		// MENU ITEMS TEXT
		const backText = addTextLink(this, 10, 20, "Back", txtStyle.header2)
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
		