Game.HeroPicker = function (game) {}

Game.HeroPicker.prototype = {
	create: function () {
		// Make sure the bg height becomes 1/1 size of the window
		const bgScale = (winH) / bgH
		let bgImage = this.game.add.sprite(0, 0, 'grassBg')
		bgImage.scale.setTo(bgScale)
		// HEADER TEXT
		const headerText = this.game.add.text(
			this.game.world.centerX, this.game.world.centerY/8, 
			"Choose your hero", txtStyle.header
		)
		headerText.anchor.set(0.5)
		// MENU BOX
		// White border box	
		drawRoundedBox(
			this, (winW/4)-5, (winH/8)-5, (winW/2)+10, 
			winH-(winH/4)+10, 4, 'ffffff'
		)
		// Blue inner box
		drawRoundedBox(
			this, winW/4, winH/8, winW/2, winH-(winH/4), 4, '0000ff'
		)
		// PLAYER SPRITE
		// Place the player sprite
		const heroSprite1 = drawSprite(this, winW/3, winH/7, 'jobsSheet', 0)
		const heroSprite2 = drawSprite(this, winW/3, winH/7+200, 'jobsSheet', 0)
		const heroSprite3 = drawSprite(this, winW/3, winH/7+400, 'jobsSheet', 0)
		const heroText1 = addText(
			this, winW/2.25, winH/6, 'HeroName1', txtStyle.paragraph
		)

		// MENU ITEMS TEXT
		const backText = addText(this, winW/2, winH/1.25, "Back", txtStyle.header2)
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
		