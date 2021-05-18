//#########
// Header
//#########

const burger = document.querySelector('.burger');
const nav = document.getElementsByTagName('nav')[0];
const navLinks = document.querySelectorAll('.nav__links li');
const htmlOverlay = document.getElementById('htmlOverlay');

// When the burger menu is clicked
function burgerClick(){
	//Toggle Nav
	nav.classList.toggle('nav-active');

	//prevent scroll while active nav
	if (nav.classList.contains("nav-active")) {
		document.body.style.overflow = "hidden"
		htmlOverlay.classList.add('overlay--visible');
	} else {
		document.body.style.overflow = "auto"
		htmlOverlay.classList.remove('overlay--visible');
	}

	//animate Links
	navLinks.forEach((link, index) => {
		if (link.style.animation) {
			link.style.animation = ''
		} else {
			link.style.animation =`navLinkFade 0.5s ease forwards ${index / 7 + 0.2}s`;
		}
	});

	//Burger Animation
	burger.classList.toggle('burger-toggle')
}

//Clicking dark area closes the nav
htmlOverlay.addEventListener('click', () => { burgerClick() })

// Burger menu clicked
burger.addEventListener('click', () => { burgerClick() });


// Header styling on scroll
const header = document.getElementsByTagName('header')[0];
addEventListener('scroll', () => {
    if (scrollY == 0){
        header.classList.remove('header--scrolled')
    } else if (scrollY != 0 && !header.classList.contains('header--scrolled')){
        header.classList.add('header--scrolled')
    }
})



//#########
// Footer 
//#########

function setVariable () {
    let footerHeight = document.getElementsByTagName('footer')[0].offsetHeight;
    document.querySelector(':root').style.setProperty('--footer-height', footerHeight + 'px');
}

setTimeout(() => {setVariable()}, 100);


addEventListener('resize', () => {
    setVariable();
})