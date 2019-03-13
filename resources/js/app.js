
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

//Vue.component('example-component', require('./components/ExampleComponent.vue'));

Vue.component('post-component', require('./components/PostComponent.vue'));
const posts = new Vue({
    el: '#posts'
});

//Vue.component(
//    'passport-clients',
//    require('./components/passport/Clients.vue')
//);
//Vue.component(
//    'passport-authorized-clients',
//    require('./components/passport/AuthorizedClients.vue')
//);
//Vue.component(
//    'passport-personal-access-tokens',
//    require('./components/passport/PersonalAccessTokens.vue')
//);

Vue.component('register-type-component', require('./components/RegisterTypeComponent.vue'));
Vue.component('register-purpose-component', require('./components/RegisterPurposeComponent.vue'));
const form = new Vue({
    el: '#form-register',
    data: {
      selectedType: '',
      checkedPurposes: [],
    },
});

Vue.component('edit-field-component', require('./components/EditFieldComponent.vue'));
Vue.component('edit-category-component', require('./components/EditCategoryComponent.vue'));
Vue.component('edit-profession-component', require('./components/EditProfessionComponent.vue'));
const form_edit = new Vue({
    el: '#form-edit',
    data: {
        selectedField: '',
        checkedCategories: []
    }
});

Vue.component('matched-list-component', require('./components/MatchedListComponent.vue'));
const matches = new Vue({
    el: '#matches'
});

$(function(){
    $('#round_start').on('change', function(){
        var start = $(this).val();
        var end = $('#round_end').val();
        if (end < start) $('#round_end').val(start);
    })
    $('#round_end').on('change', function(){
        var start = $('#round_start').val();
        var end = $(this).val();
        if (start > end) $('#round_start').val(end);
    })
    $('#scale_start').on('change', function(){
        var start = $(this).val();
        var end = $('#scale_end').val();
        if (end < start) $('#scale_end').val(start);
    })
    $('#scale_end').on('change', function(){
        var start = $('#scale_start').val();
        var end = $(this).val();
        if (start > end) $('#scale_start').val(end);
    })

    // Count input text
    let count_text = $('<span>').addClass('count-text float-right').append($('<span>').addClass('count-input-text')).append($('<span>').text(' / ')).append($('<span>').addClass('count-max-text'));
    $('.countable-text').each(function(){
        $(this).after(count_text.clone());
        $(this).next().find('.count-max-text').text($(this).attr('data-max'));
        calcCount($(this));
    });
    $('.countable-text').on('keydown keyup keypress change', function(){
        calcCount($(this));
    });
    function calcCount(countable_text) {
        var count = $(countable_text).val().replace(/\\n|\r\n|\n\r|\r|\n/g, "\r\n").length;
        var max = $(countable_text).attr('data-max');
        $(countable_text).next().find('.count-input-text').text(count);
        if (count > max) {
          $(countable_text).addClass('text-danger');
          $(countable_text).next().addClass('text-danger');
        } else {
          $(countable_text).removeClass('text-danger');
          $(countable_text).next().removeClass('text-danger');
        }
    }
});
