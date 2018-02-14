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
		// HEADER TEXT
		const headerText = addCenteredText(
			this, gameCenterX, 32, "Main Menu", txtStyle.header
		)
		headerText.anchor.set(0.5);
		// MENU BOX - White border box	and blue inner box
		drawRoundedBox(
			this, 10, 50, gameW-20, gameH-60, 4, 'ffffff'
		)
		drawRoundedBox(
			this, 12, 52, gameW-24, gameH-64, 4, '0000ff'
		)
		// MENU ITEMS TEXT
		// New Game
		const newGameText = addTextLink(
			this, gameW/2, 80, "New Game", txtStyle.header2 
		)
		newGameText.events.onInputUp.add(startNewGame, this)
		// Quit
		const quitText = addTextLink(this, gameW/2, gameH-30, "Quit", txtStyle.header2)

		function startNewGame () {
			this.state.start('HeroPicker')
		}
		
	},
	update: function () {
		
	}
}