<template>
    <div class="game_info">
        <div class="game_title bmbl">
            <span class="click_top">崩坏3</span>
        </div>
        <img v-for="item in img" :key="item.id" v-lazy="item.img" alt="">
    </div>
</template>

<script>
import $ from 'jquery'
export default {
    name: 'GameInfo',
    data() {
        return {
            img: [
                {img: require('../assets/img/BlessingSoftware.png')},
                {img: require('../assets/img/BlessingSoftware.png')},
                {img: require('../assets/img/BlessingSoftware.png')},
                {img: require('../assets/img/BlessingSoftware.png')},
                {img: require('../assets/img/BlessingSoftware.png')},
                {img: require('../assets/img/BlessingSoftware.png')},
                {img: require('../assets/img/BlessingSoftware.png')},
                {img: require('../assets/img/BlessingSoftware.png')},
            ]
        }
    },
}
$(document).ready(function () {
    $(function () {
        $(window).scroll(function () { 
            if ($(window).scrollTop() > 40) {
                $('.game_title').css({
                    'position': 'fixed',
                    'left': '0',
                    'right': '0',
                    });
            } else {
                $('.game_title').css({'position': 'sticky'});
            }
        });
    });
    $('.game_title').click(function () {
        $('body, html').animate({scrollTop: 0}, 500, 'linear');
    });
});
</script>

<style>
    .game_title{
        font-size: 21px;
        color: #636366;
        font-weight: 400;
        border-bottom: 1px solid #d6d6d6;
        padding: 10.93px 0px;
        top: 44px;
        position: sticky;
        position: -webkit-sticky;
        cursor: pointer;
    }
    .click_top{
        max-width: 980px;
        margin: auto;
        display: block;
    }
</style>