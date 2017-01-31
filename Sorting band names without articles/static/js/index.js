const bands = ['The Plot in you', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled',
	'Say Anything', 'The Midway State', 'We Came as Romans', 'CounterParts', 'Oh, Sleeper', 'A Skylit Drive',
	'Anywhere but Here', 'An Old Dog'];

function strip(bandName) {
	return bandName.replace(/^(a |an |the)/i, '').trim();
}

const sortedBands = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1);

document.querySelector('#bands').innerHTML = sortedBands.map(band => `<li>${band}</li>`).join('');