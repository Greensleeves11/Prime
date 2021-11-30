

// Viewport animations

const observerAbout = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animation-right-straight');
        }
    });
});
observerAbout.observe(document.querySelector('.article-about'));


const observerReviewsHeading = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animation-left-straight');
        }
    });
});
observerReviewsHeading.observe(document.querySelector('.reviews-heading'));


const observerReviews = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animation-right-straight');
        }
    });
});
observerReviews.observe(document.querySelector('.reviews-container'));

// Hamburger-menu animation

const menu = document.querySelector('.hamburger-menu');
const nav = document.querySelector('.nav-main');
const navMainMobile = document.querySelector('.nav-main-mobile');
const hamburgerIconExpand = document.querySelector('.hamburger-menu-expand');
const hamburgerIconExit = document.querySelector('.hamburger-menu-exit');
const hidden = 'nav-main-mobile-hidden';
const iconInvisible ='button-invisible';

menu.addEventListener('click', () => {
    nav.classList.toggle(hidden);
    hamburgerIconExpand.classList.toggle(iconInvisible);
    hamburgerIconExit.classList.toggle(iconInvisible);
});

navMainMobile.addEventListener('click', () => {
    nav.classList.toggle(hidden);
    hamburgerIconExpand.classList.toggle(iconInvisible);
    hamburgerIconExit.classList.toggle(iconInvisible);
});

// Send button behaviour in contact form

const contactForm = document.querySelector('.contact-form');
const textOnSubmit = document.querySelector('.submitted')
const textOnSubmitHidden = 'submitted-hidden';

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    textOnSubmit.classList.remove(textOnSubmitHidden);
});

// Newsletter behaviour

const newsletterForm = document.querySelector('.newsletter-form');
const textOnSubscribe = document.querySelector('.newsletter-submit-text');

newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    textOnSubscribe.classList.remove(textOnSubmitHidden);
});

const closeNewsletterIcon = document.querySelector('.newsletter-close');
const newsletterModal = document.querySelector('.newsletter-modal');
const newsletterOpen = document.querySelector('.newsletter-open');
const newsletterVisibility = 'newsletter-visibility';
const header = document.querySelector('.header');
const blurEffect = 'newsletter-blur'

newsletterOpen.addEventListener('click', () => {
    newsletterModal.classList.remove(newsletterVisibility);
    header.classList.add(blurEffect);
    nav.classList.add(blurEffect);
});

closeNewsletterIcon.addEventListener('click', () => {
    newsletterModal.classList.add(newsletterVisibility);
    header.classList.remove(blurEffect);
    nav.classList.remove(blurEffect);
});






