Game.MainMenu = function (game) {
}

Game.MainMenu.prototype = {
	preload: function () {
		
	},
	create: function () {
		this.stage.backgroundColor = '#111222'
		// Make sure the bg height becomes 1/1 size of the window
		const bgScale = (winH) / bgH
		let bgImage = this.game.add.sprite(0, 0, 'grassBg')
		bgImage.scale.setTo(bgScale)
		// HEADER TEXT
		const headerStyle = {font: "64px Arial", fill: "#ffffff", align: "center"}
		const headerText = this.game.add.text(
			this.game.world.centerX, this.game.world.centerY/8, 
			"Main Menu", txtStyle.header
		)
		headerText.anchor.set(0.5);
		// MENU BOX
		drawRoundedBox(
			this, (winW/4)-5, (winH/8)-5, (winW/2)+10, winH-(winH/4)+10, 4, 'ffffff'
		)
		drawRoundedBox(
			this, winW/4, winH/8, winW/2, winH-(winH/4), 4, '0000ff'
		)
		// MENU ITEMS TEXT
		// New game
		const newGameText = addText(
			this, winW/2, winH/4, "New Game", txtStyle.header2 
		)
		newGameText.inputEnabled = true;
		newGameText.events.onInputUp.add(startNewGame, this);
		// Quit
		const quitText = addText(this, winW/2, winH/1.25, "Quit", txtStyle.header2)
		quitText.anchor.set(0.5);

		function startNewGame () {
			this.state.start('HeroPicker')
		}
		
	},
	update: function () {
		
	}
}