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
		let hero1 = randHero()
		let hero2 = randHero()
		let hero3 = randHero()
		// Place the player sprite
		drawSprite(this, 10, 60, 'spritesheet', hero1.sprite)
		addText(this, 64, 60, hero1.name, txtStyle.p)
		addText(this, 64, 80, `level ${hero1.level} ${hero1.job.name}`, txtStyle.p)
		const pickHero1 = addTextLink(this, 300, 70, "Choose 1", txtStyle.h2)
		pickHero1.events.onInputUp.add(goToHeroMenu, this)
		pickHero1.anchor.set(0, 0)
		drawSprite(this, 10, 150, 'spritesheet', hero2.sprite)
		addText(this, 64, 150, hero2.name, txtStyle.p)
		addText(this, 64, 170, `level ${hero2.level} ${hero2.job.name}`, txtStyle.p)
		const pickHero2 = addTextLink(this, 300, 160, "Choose 2", txtStyle.h2)
		pickHero2.events.onInputUp.add(goToHeroMenu, this)
		pickHero2.anchor.set(0, 0)
		drawSprite(this, 10, 240, 'spritesheet', hero3.sprite)
		addText(this, 64, 240, hero3.name, txtStyle.p)
		addText(this, 64, 260, `level ${hero3.level} ${hero3.job.name}`, txtStyle.p)
		const pickHero3 = addTextLink(this, 300, 250, "Choose 3", txtStyle.h2)
		pickHero3.events.onInputUp.add(goToHeroMenu, this)
		pickHero3.anchor.set(0, 0)
		// MENU ITEMS TEXT
		const backText = addTextLink(this, 10, 18, "Back", txtStyle.h2)
		backText.events.onInputUp.add(goToMainMenu, this)
		backText.anchor.set(0, 0)
		// FUNCTIONS
		function goToMainMenu () {
			this.state.start('MainMenu')	
		}
		// Find another way to pass arguments...
		function goToHeroMenu () {
			switch (arguments[0].text) {
				case 'Choose 1':
					player = hero1
					break;
				case 'Choose 2':
					player = hero2
					break;
				case 'Choose 3':
					player = hero3
					break;
			}
			this.state.start('HeroMenu')
		}
	},
	update: function () {

	},
}
