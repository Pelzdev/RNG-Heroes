const names = ['Harald', 'Carl', 'Browald', 'Bob']

const jobs = {
	archer: {name: 'archer', spritePos: 0},
	druid: {name: 'druid', spritePos: 2},
	knight: {name: 'knight', spritePos: 4},
	mage: {name: 'mage', spritePos: 6},
	healer: {name: 'healer', spritePos: 8},
}
const startStats = {
	hpMax: 50,
	atk: 20,
	def: 20,
	wis: 20,
	spe: 20
}

class Hero {
	constructor(name, level, job) {
		this.job = job.name
		this.sprite = job.spritePos
		this.name = name
		this.level = level
		this.hpMax = startStats.hpMax
		this.atk = startStats.atk
		this.def = startStats.def
		this.wis = startStats.wis
		this.spe = startStats.spe
	}
}

function randHero () {
	const newHero = new Hero (randList(names), 1, randListObj(jobs))

	return newHero
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