const products = [
	{
		id: 1,
		title: 'The Ritual',
		structure: 'Cleanser + Serum + Moisturizer',
		img: './img/prod1.png',
		popularity: '',
		desc: `Custom, complementary, and oh so simple. Your personalized products work better together to increase routine effectiveness and support your skin goals.`,
	},
	{
		id: 2,
		title: 'The Serum',
		structure: '',
		img: './img/prod2.png',
		popularity: '',
		desc: `A daily-use serum that delivers a powerful dose of actives to your skincare routine to help you reach all of your skin goals.`,
	},
	{
		id: 3,
		title: 'The Boost',
		structure: 'Serum + Moisturizer',
		img: './img/prod3.png',
		popularity: '',
		desc: `Boost your natural glow with a double-action duo that lets you use more actives without conflict and pair ingredients that complement each other's effects.`,
	},
	{
		id: 4,
		title: 'The Base',
		structure: 'Cleanser + Serum',
		img: './img/prod4.png',
		popularity: '',
		desc: `A good skin day starts with a good base. Our pH-balancing custom cleanser gives your unique skin a fresh foundation so your custom serum can work even harder on targeting your goals.`,
	},
];

let productBody = document.querySelector('.products__card');

window.addEventListener('DOMContentLoaded', function () {
	displayProductsItems(products);
});

const displayProductsItems = (productsItems) => {
	let displayFarm = productsItems.map((item) => {
		return `
        <div class="products__card-body">
        <div class="products__card-body__image">
          <img src=${item.img} alt=${item.title} />
          <span>Most Popular </span>
        </div>
        <h3 class="products__card-body-title">${item.title}</h3>
        <p class="products__card-body-include">
            ${item.structure}
        </p>
        <p class="products__card-body-description">
        ${item.desc}
        </p>
      </div>
      `;
	});
	displayFarm = displayFarm.join('');
	productBody.innerHTML = displayFarm;
};

const sections = document.querySelectorAll('div[id]');
window.addEventListener('scroll', navHighlighter);

function navHighlighter() {
	// Get current scroll position
	let scrollY = window.pageYOffset;

	// Now we loop through sections to get height, top and ID values for each
	sections.forEach((current) => {
		const sectionHeight = current.offsetHeight;
		const sectionTop = current.offsetTop - 50;
		sectionId = current.getAttribute('id');

		if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
			document
				.querySelector('.header a[href*=' + sectionId + ']')
				.classList.add('active');
		} else {
			document
				.querySelector('.header a[href*=' + sectionId + ']')
				.classList.remove('active');
		}
	});
}

const navSlide = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.header__navigation-list');
	const navLinks = document.querySelectorAll('.header__navigation-list li');

	//toggle nav
	burger.addEventListener('click', () => {
		nav.classList.toggle('nav-active');
		navLinks.forEach((link, index) => {
			if (link.style.animation) {
				link.style.animation = '';
			} else {
				link.style.animation = `navLinkFade 0.2s ease-in-out forwards ${
					index / 7
				}s`;
			}
		});

		burger.classList.toggle('toggle');
	});
};
navSlide();

const displayDiscount = () => {
	const dis = document.querySelector('.hero__discount');
	const closeBtn = document.querySelector('.close-btn');

	closeBtn.addEventListener('click', () => {
		dis.style.display = 'none';
	});
};
displayDiscount();
