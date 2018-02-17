const normalAttack = 20


function attack (a, d, p, m, t) {
	// Check for evasion
	if (randNum(1, 100) > 95) {
		return 
	}
	return  doDamage(a, d, p, m, t)
}

// Pokemons attack formula ;)
// a: attacker, d: defender, p: power, m: modifier, t: type (physical/magical)
function doDamage (a, d, p, m, t) {
	let damage = 0
	if (t === 'physical') {
		damage = ((((((2*a.level/5)/2)+2)*p*a.atk/d.def)/50)+2)*m
	} else {
		damage = ((((((2*a.level/5)/2)+2)*p*a.wis/d.wis)/50)+2)*m
	}
	
	d.hpLeft -= damage
	
	return damage
}