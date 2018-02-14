const winW = window.innerWidth
const winH = window.innerHeight

const bgH = 96
const bgW = 288

const playerSpriteW = 24
const playerSpriteH = 24
const spriteScale = 2

const txtStyle = {
	header: {font: "32px Arial", fill: "#ffffff", align: "center"},
	header2: {font: "24px Arial", fill: "#ffffff", align: "center"},
	paragraph: {font: "16px Arial", fill: "#ffffff", align: "center"}
}

function drawRoundedBox (context, x, y, width, height, radius, color) {
	const box = context.game.add.graphics()
	box.beginFill(`0x${color}`)
	box.drawRoundedRect(
		x, y, width, height, radius
	)
	box.endFill()	
}

function drawSprite (context, x, y, spritesheet, index) {
	const sprite = context.game.add.sprite(x, y, spritesheet, index)
	sprite.scale.setTo(spriteScale)
	sprite.anchor.set(0.5, 0)

	return sprite
}

function addCenteredText(context, x, y, text, style, anchor) {
	const newText = context.game.add.text(
		x, y, text, style
	)
	newText.anchor.set(0.5)

	return newText
}
function addText(context, x, y, text, style, anchor) {
	const newText = context.game.add.text(
		x, y, text, style
	)
	newText.anchor.set(0, 0)

	return newText
}



