const names = ['Harald', 'Carl', 'Browald', 'Bob']

const jobs = {
	archer: 	{name: 'archer', 	imgPos: 10},
	druid: 		{name: 'druid', 	imgPos: 12},
	knight: 	{name: 'knight', 	imgPos: 14},
	mage: 		{name: 'mage', 		imgPos: 16},
	healer: 	{name: 'healer', 	imgPos: 18},
	raider: 	{name: 'raider', 	imgPos: 20},
	templar: 	{name: 'templar', imgPos: 22},
	thief: 		{name: 'thief', 	imgPos: 24},
	warrior: 	{name: 'warrior', imgPos: 26}
}
const enemies = {
	blob: 		{name: 'blob', 		imgPos: 0, hp: 10, atk: 5, def: 5, wis: 5, spe: 5},
	fly: 			{name: 'fly', 		imgPos: 2, hp: 10, atk: 5, def: 5, wis: 5, spe: 5},
	rat: 			{name: 'rat', 		imgPos: 4, hp: 10, atk: 5, def: 5, wis: 5, spe: 5},
	skeleton: {name: 'skeleton',imgPos: 6, hp: 10, atk: 5, def: 5, wis: 5, spe: 5},
	wolf: 		{name: 'wolf', 		imgPos: 8, hp: 10, atk: 5, def: 5, wis: 5, spe: 5}
}

const startStats = {
	hp: 		50,
	atk: 		20,
	def: 		20,
	wis: 		20,
	spe: 		20
}

class Hero {
	constructor(name, level, job) {
		this.job = job.name
		this.sprite = job.imgPos
		this.name = name
		this.level = level
		this.hpMax = startStats.hp
		this.hpLeft = startStats.hp
		this.atk = startStats.atk
		this.def = startStats.def
		this.wis = startStats.wis
		this.spe = startStats.spe
	}
}

class Enemy {
	constructor(type, level) {
		this.sprite = type.imgPos
		this.name = type.name
		this.level = level
		this.hpMax = type.hp
		this.hpLeft = type.hp
		this.atk = type.atk
		this.def = type.def
		this.wis = type.wis
		this.spe = type.spe
	}
}

function randHero () {
	const newHero = new Hero (randList(names), 1, randListObj(jobs))

	return newHero
}

function randEnemy () {
	const newEnemy = new Enemy (randListObj(enemies), 1)

	return newEnemy
}

function randBetween (to, from) {
	return Math.floor((Math.random() * to) + from)
}

function randList (list) {
	let num = Math.floor((Math.random() * list.length))
	
	return list[num]
}

function randListObj (object) {
	let keys = Object.keys(object)
	
	return object[keys[ Math.floor(keys.length * Math.random()) ] ]
}