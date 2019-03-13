/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

require("owl.carousel");
require("jquery");


$(".home-carousel-swipe").owlCarousel({
    nav: true,
    dots: true,
    items: 1,
    loop: true
    // autoplay: true
});

$(".home-carousel-swipe .owl-prev").html('<i class="ico ico-prev"></i>');
$(".home-carousel-swipe .owl-next").html('<i class="ico ico-next"></i>');

var owl = $(".multi-item-carousel");
$(".multi-item-carousel").owlCarousel({
    stagePadding: 40,
    margin: 30,
    nav: true,
    dots: false,
    items: 8,
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 3
        },
        1000: {
            items: 7
        },
        1500: {
            items: 8
        }
    }
});

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app'
});
