const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
        delay: 2000,
        enabled: true,
    },
    speed: 1500,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    observer: true,
    observeParents: true,
    grabCursor: true,
});



const swiper_job = new Swiper('.swiper_job', {
    loop: true,
    autoplay: {
        delay: 3000,
        enabled: true,
    },
    speed: 500,
    observer: true,
    observeParents: true,
    slidesPerView: 1,
    grabCursor: true,
});


const swiper_trust_one = new Swiper('.swiper_trust_one', {
    slidesPerView: 10,
    loop: true,
    autoplay: {
        delay: 1000,
        enabled: true,
    },
    speed: 2000,
    grabCursor: true,
    breakpoints: {
        100: {
            slidesPerView: 2
        },
        320: {
            slidesPerView: 2
        },
        400: {
            slidesPerView: 3
        },
        500: {
            slidesPerView: 4
        },
        700: {
            slidesPerView: 5
        },
        900: {
            slidesPerView: 7
        }
    },
});

const swiper_trust_two = new Swiper('.swiper_trust_two', {
    slidesPerView: 10,
    loop: true,
    autoplay: {
        delay: 1000,
        enabled: true,
        reverseDirection: true,
    },
    speed: 2000,
    grabCursor: true,
    breakpoints: {
        100: {
            slidesPerView: 2
        },
        320: {
            slidesPerView: 2
        },
        400: {
            slidesPerView: 3
        },
        500: {
            slidesPerView: 4
        },
        700: {
            slidesPerView: 7
        },
        900: {
            slidesPerView: 10
        }
    },
});