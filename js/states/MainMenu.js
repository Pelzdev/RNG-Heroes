Game.MainMenu = function (game) {
}

Game.MainMenu.prototype = {
	preload: function () {
		
	},
	create: function () {
		const gameW = this.game.world.width
		const gameH = this.game.world.height
		const gameCenterX = this.game.world.centerX
		const gameCenterY = this.game.world.centerY
		this.stage.backgroundColor = '#111222'
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
			this, gameCenterX, 10, "Main Menu", txtStyle.h1
		)
		// MENU ITEMS TEXT
		// New Game
		const newGameText = addTextLink(
			this, gameW/2, 80, "New Game", txtStyle.h2 
		)
		newGameText.events.onInputUp.add(startNewGame, this)
		// Quit
		const quitText = addTextLink(this, gameW/2, gameH-30, "Quit", txtStyle.h2)

		function startNewGame () {
			this.state.start('HeroPicker')
		}
	},
	update: function () {
		
	}
}
