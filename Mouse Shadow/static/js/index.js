const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 16;

function shadow(e) {
	const { offsetWidth: width, offsetHeight: height } = hero;
	let { offsetX: x, offsetY: y } = e;
	
	if (this !== e.target) {
		x = x + e.target.offsetLeft;
		y = y + e.target.offsetTop;
	}

	const xWalk = Math.round((x / width * walk) - (walk / 2));
	const yWalk = Math.round((y / width * walk) - (walk / 2));

	text.style.textShadow = `
		${xWalk}px ${yWalk}px 0 #999
	`;
}

hero.addEventListener('mousemove', shadow);