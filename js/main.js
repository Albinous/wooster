// Portfolio with filters

(function () {
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if (window.pageYOffset > 95) {
            header.classList.add('header__active');
        } else {
            header.classList.remove('header__active');
        }
    };
}());

$('.portfolio__cards').isotope({
    itemSelector: '.portfolio__card',
    layourMode: 'fitRows'
});

$('.portfolio__nav .portfolio__menu-link').click(function(){
    $('.portfolio__nav .portfolio__menu-link').removeClass('active');
    $(this).addClass('active');

    let selector = $(this).attr('data-filter');
    $('.portfolio__cards').isotope({
        filter:selector
    });

    return false;
});

// Burger handler

(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.nav');
    const menuCloseItem = document.querySelector('.header__nav-close')
    const menuLinks = document.querySelectorAll('.nav__menu-link');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('nav-open');
    });
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('nav-open')
    });
    if (window.innerWidth <= 767) {
        for (let i=0; i < menuLinks.length; i+=1) {
            menuLinks[i].addEventListener('click', () => {
                menu.classList.remove('nav-open')
            });
        }
    }
}());

// owl carousel

jQuery(document).ready(function ($) {

    $("#intro-carousel").owlCarousel({
        autoplay: true,
        dots: false,
        loop: true,
        animateOut: 'fadeOut',
        items: 1
      });

    $('.about-carousel').owlCarousel({
        autoplay:true,
        dots:false,
        nav:true,
        loop:true,
        responsive:{
            0:{
                items:1
            },
            767:{
                items:1
            },
            991:{
                items:1
            }
        }
    });

    // Scroll to top button

    var btn = $('#topBtn');  
    $(window).scroll(function() {     
        if ($(window).scrollTop() > 400) {
        btn.addClass('show');
        } else {
        btn.removeClass('show');
        }
    });
    btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '1500');
    });


});

// Animate on scroll

$(function() {
    AOS.init({
        disable: 'mobile',
        easing: 'ease',
        duration: 1000
    });
});

// Smooth scroll

(function () {

    const smoothScroll = function (targetEl, duration) {
        const headerElHeight =  document.querySelector('.header').clientHeight;
        let target = document.querySelector(targetEl);
        let targetPosition = target.getBoundingClientRect().top - headerElHeight;
        let startPosition = window.pageYOffset;
        let startTime = null;
    
        const ease = function(t,b,c,d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };
    
        const animation = function(currentTime){
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0,run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);

    };

    const scrollTo = function () {
        const links = document.querySelectorAll('.js-scroll');
        links.forEach(each => {
            each.addEventListener('click', function () {
                const currentTarget = this.getAttribute('href');
                smoothScroll(currentTarget, 1000);
            });
        });
        links.forEach(each => {
            each.addEventListener('click', function(event) {
                menuBtn = document.querySelector('.menu-btn');
            });
        });
    };
    scrollTo();
}());

// Popup modal

var modal = document.getElementById('popup');
var modalBtn = document.getElementById('modalBtn');
var closeBtn = document.getElementById('closeBtn');

modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

function openModal(){
    modal.style.display = 'block';
}

function closeModal(){
    modal.style.display = 'none';
}

function outsideClick(e){
    if (e.target == modal){
        modal.style.display = 'none';
    }
}
