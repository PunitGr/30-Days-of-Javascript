const dogs = [
	{ name: 'Snickers', age: 2},
	{ name: 'hugo', age: 8},
]

function makeGreen() {
	const p = document.querySelector('p');
	p.style.color = '#BADA55';
	p.style.fontSize = '50px';
}

// clearing
console.clear();

// Interpolated
console.log("Hello I am a %s string", '💩');

// Styled
console.log("%c Check out the size", 'font-size:20px');

// Warning
console.warn('Holy moly!');

// Error
console.error('Damn');

// Info
console.info("Lorem ipsum dolor sit amet.");

// Assertion
console.assert(1 == 2, 'That is wrong');

// Testing
const p = document.querySelector('p');
console.assert(p.classList.contains('ouch'), 'That is wrong!');

// Viewing DOM elements
console.log(p);
console.dir(p);

// Grouping Together
dogs.forEach(dog => {
	console.group(`${dog.name}`);
	console.log(`This is ${dog.name}`);
	console.groupEnd(`${dog.name}`);
});

// counting
console.count('PunitGr');
console.count('PunitGr');
console.count('Pasta');
console.count('PunitGr');
console.count('Pasta');
console.count('PunitGr');
console.count('Pasta');
console.count('Pasta');

// timing
console.time('Fetching data');
fetch('https://api.github.com/users/punitgr')
	.then(data => data.json())
	.then(data => {
		console.timeEnd('Fetching data');
		console.log(data);
	});

// tables
console.table(dogs);