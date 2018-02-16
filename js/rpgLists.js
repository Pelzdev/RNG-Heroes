const names = ['Harald', 'Carl', 'Browald', 'Bob']

const jobs = {
	archer: 	{name: 'archer', 	spritePos: 10},
	druid: 		{name: 'druid', 	spritePos: 12},
	knight: 	{name: 'knight', 	spritePos: 14},
	mage: 		{name: 'mage', 		spritePos: 16},
	healer: 	{name: 'healer', 	spritePos: 18},
	raider: 	{name: 'raider', 	spritePos: 20},
	templar: 	{name: 'templar', spritePos: 22},
	thief: 		{name: 'thief', 	spritePos: 24},
	warrior: 	{name: 'warrior', spritePos: 26}
}
const enemies = {
	blob: 		{name: 'blob', 		spritePos: 0, hp: 10, atk: 5, def: 5, wis: 5, spe: 5},
	fly: 			{name: 'fly', 		spritePos: 2, hp: 10, atk: 5, def: 5, wis: 5, spe: 5},
	rat: 			{name: 'rat', 		spritePos: 4, hp: 10, atk: 5, def: 5, wis: 5, spe: 5},
	skeleton: {name: 'skeleton',spritePos: 6, hp: 10, atk: 5, def: 5, wis: 5, spe: 5},
	wolf: 		{name: 'wolf', 		spritePos: 8, hp: 10, atk: 5, def: 5, wis: 5, spe: 5}
}

const startStats = {
	hp: 	50,
	atk: 		20,
	def: 		20,
	wis: 		20,
	spe: 		20
}

class Hero {
	constructor(name, level, job) {
		this.job = job.name
		this.sprite = job.spritePos
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
		this.sprite = type.spritePos
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