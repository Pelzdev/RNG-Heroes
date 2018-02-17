Game.Fight = function (game) {}

Game.Fight.prototype = {
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
			this, gameW-10, 10, "Fight", txtStyle.h1
		)
		headerText.anchor.set(1, 0)
		// Place the player sprite
		let heroSprite = drawSprite(this, 80, 150, 'spritesheet', player.sprite)
		heroSprite.anchor.set(0.5, 0.5)
		let heroText = addText(this, 40, 70, 
			`${player.name}: ${player.hpLeft}/${player.hpMax}`, txtStyle.p
		)
		// Place the enemy sprite
		let enemy = randEnemy()
		let enemySprite = drawSprite(this, 320, 150, 'spritesheet', enemy.sprite)
		enemySprite.anchor.set(0.5, 0.5)
		let enemyText = addText(this, 280, 70, 
			`${enemy.name}: ${enemy.hpLeft}/${enemy.hpMax}`, txtStyle.p
		)
		// MENU ITEMS TEXT
		const backText = addTextLink(this, 10, 18, "Back", txtStyle.h2)
		backText.events.onInputUp.add(goToHeroMenu, this)
		backText.anchor.set(0, 0)
		// FUNCTIONS
		function goToHeroMenu () {
			this.state.start('HeroMenu')
		}
		function goToEvent () {
			this.state.start('Fight')
		}
		console.log(attack(player, enemy, normalAttack, 1, 'physical'))
	},
	update: function () {

	},
}
		