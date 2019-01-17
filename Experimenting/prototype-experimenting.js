function unicorn(colour='white') {
    this.colour=colour;
}

console.log('Initially prototype and __proto__ point to empty:');
console.log('unicorn.prototype: ', unicorn.prototype);
var rainbow= new unicorn('pink');
var starlight= new unicorn('silver');
console.log('rainbow.__proto__: ', rainbow.__proto__);
console.log('starlight.__proto__: ', starlight.__proto__);
console.log('\nrainbow and starlight objects:')
console.log('rainbow: ', rainbow);
console.log('starlight: ', starlight);
unicorn.prototype['property']='horn';
unicorn.prototype.powers=['magic', 'healing'];
console.log('\nAfter adding property and powers to prototype:');
console.log('unicorn.prototype: ', unicorn.prototype);
console.log('rainbow.__proto__: ', rainbow.__proto__);
console.log('starlight.__proto__: ', starlight.__proto__);
console.log('rainbow: ', rainbow);
console.log('rainbow.property: ', rainbow.property);
rainbow.property=['horn', 'tail'];
console.log('\nAfter changing property for rainbow object:');
console.log('rainbow.property: ', rainbow.property);
console.log('rainbow.__proto__.property: ', rainbow.__proto__.property);
console.log('unicorn.prototype: ', unicorn.prototype);
console.log('starlight.property: ', starlight.property);
starlight.powers.push('teleport');
console.log('\nAfter changing powers ARRAY for starlight object:');
console.log('rainbow.powers: ', rainbow.powers);
console.log('unicorn.prototype: ', unicorn.prototype);
console.log('starlight.powers: ', starlight.powers);