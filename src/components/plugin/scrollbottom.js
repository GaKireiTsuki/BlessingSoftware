import Vue from 'vue'
Vue.directive('scroll', {
    bind: function (el, binding) {
        window.addEventListener('scroll', () => {
            if (document.body.scrollTop + window.innerHeight >= el.clientHeight) {
                console.log('load data');
            }
        })
    }
})