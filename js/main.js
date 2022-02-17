const swiper = new Swiper('.promo-slider', {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: '.promo-slider__arrow',
    },
    breakpoints: {
        320: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 1
        },
        1024: {
            slidesPerView: 2
        },
        1200: {
            slidesPerView: 2
        }
    }
});

const burger = document.querySelector('.burger');
if (burger) {
    const menuBurger = document.querySelector('.burger__menu');
    burger.addEventListener('click', (e) => {
        document.body.classList.toggle('_lock');
        burger.classList.toggle('_active');
        menuBurger.classList.toggle('_active');
    });
}