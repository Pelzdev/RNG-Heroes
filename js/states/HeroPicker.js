Game.HeroPicker = function (game) {}

Game.HeroPicker.prototype = {
	create: function () {
		const gameW = this.game.world.width
		const gameH = this.game.world.height
		const gameCenterX = this.game.world.centerX
		const gameCenterY = this.game.world.centerY
		// Make sure the bg height becomes 1/1 size of the window
		const bgScale = (winH) / bgH
		const bgImage = this.game.add.sprite(0, 0, 'grassBg')
		bgImage.scale.setTo(bgScale)
		// MENU BOXES - White border box	and blue inner box
		drawRoundedBox(this, 0, 0, gameW, 50, 4, 'ffffff')
		drawRoundedBox(this, 2, 2, gameW-4, 46, 4, '0000ff')
		drawRoundedBox(this, 0, 50, gameW, gameH-50, 4, 'ffffff')
		drawRoundedBox(this, 2, 52, gameW-4, gameH-54, 4, '0000ff')
		// HEADER TEXT
		const headerText = addCenteredText(
			this, gameW-10, 10, "Choose a hero", txtStyle.h1
		)
		headerText.anchor.set(1, 0)
		// Create hero choices
		const hero1 = randHero()
		const hero2 = randHero()
		const hero3 = randHero()
		// Place the player sprite
		drawSprite(this, 10, 60, 'jobsSheet', hero1.sprite)
		addText(this, 64, 60, hero1.name, txtStyle.p)
		addText(this, 64, 80, `level ${hero1.level} ${hero1.job}`, txtStyle.p)
		drawSprite(this, 10, 150, 'jobsSheet', hero2.sprite)
		addText(this, 64, 150, hero2.name, txtStyle.p)
		addText(this, 64, 170, `level ${hero2.level} ${hero2.job}`, txtStyle.p)
		drawSprite(this, 10, 240, 'jobsSheet', hero3.sprite)
		addText(this, 64, 240, hero3.name, txtStyle.p)
		addText(this, 64, 260, `level ${hero3.level} ${hero3.job}`, txtStyle.p)
		// MENU ITEMS TEXT
		const backText = addTextLink(this, 10, 18, "Back", txtStyle.h2)
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
		