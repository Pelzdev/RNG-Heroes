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
		// HEADER TEXT
		const headerText = addCenteredText(
			this, gameCenterX, 32, "Choose a hero", txtStyle.header
		)
		headerText.anchor.set(0.5)
		// MENU BOX - White border box	and blue inner box
		drawRoundedBox(
			this, 10, 50, gameW-20, gameH-60, 4, 'ffffff'
		)
		drawRoundedBox(
			this, 12, 52, gameW-24, gameH-64, 4, '0000ff'
		)
		// PLAYER SPRITE
		// Place the player sprite
		const heroSprite1 = drawSprite(this, 50, 80, 'jobsSheet', 0)
		const heroText1 = addText(
			this, 100, 80, 'HeroName1', txtStyle.paragraph
		)
		const heroSprite2 = drawSprite(this, 50, 140, 'jobsSheet', 2)
		const heroText2 = addText(
			this, 100, 140, 'HeroName2', txtStyle.paragraph
		)
		const heroSprite3 = drawSprite(this, 50, 200, 'jobsSheet', 4)
		const heroText3 = addText(
			this, 100, 200, 'HeroName3', txtStyle.paragraph
		)
		

		// MENU ITEMS TEXT
		const backText = addCenteredText(this, winW/2, winH/1.25, "Back", txtStyle.header2)
		backText.inputEnabled = true;
		backText.events.onInputUp.add(goToMainMenu, this);
		// FUNCTIONS
		function goToMainMenu () {
			this.state.start('MainMenu')
		}
	},
	update: function () {

	},
}
		