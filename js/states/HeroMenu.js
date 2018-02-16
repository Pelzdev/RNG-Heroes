Game.HeroMenu = function (game) {}

Game.HeroMenu.prototype = {
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
			this, gameW-10, 10, "Hero Menu", txtStyle.h1
		)
		headerText.anchor.set(1, 0)
		// Place the player sprite
		drawSprite(this, 10, 60, 'jobsSheet', player.sprite)
		addText(this, 64, 60, player.name, txtStyle.p)
		addText(this, 64, 80, `level ${player.level} ${player.job}`, txtStyle.p)
		// Show stats
		addText(this, 15, 120, `hp: ${player.hpLeft}/${player.hpMax}`, txtStyle.p)
		addText(this, 15, 140, `atk: ${player.atk}`, txtStyle.p)
		addText(this, 15, 160, `def: ${player.def}`, txtStyle.p)
		addText(this, 15, 180, `wis: ${player.wis}`, txtStyle.p)
		addText(this, 15, 200	, `spe: ${player.spe}`, txtStyle.p)
		// Show skills
		addText(this, 180, 60	, `Skills:`, txtStyle.p)
		addText(this, 240, 60	, `Skill1`, txtStyle.p)
		addText(this, 240, 80	, `Skill2`, txtStyle.p)
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
		