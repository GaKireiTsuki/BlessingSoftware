<template>
    <div class="game_info">
        <div class="game_title bmbl">
            <span class="click_top">崩坏3</span>
        </div>
        <img src="../assets/img/BlessingSoftware.png" alt="">
        <img src="../assets/img/BlessingSoftware.png" alt="">
        <img src="../assets/img/BlessingSoftware.png" alt="">
        <img src="../assets/img/BlessingSoftware.png" alt="">
        <img src="../assets/img/BlessingSoftware.png" alt="">
        <img src="../assets/img/BlessingSoftware.png" alt="">
    </div>
</template>

<script>
import axios from 'axios'
import $ from 'jquery'
export default {
    name: 'GameInfo'
}
axios.post('/gameinfos')
.then(res => {
    console.log(res)
})
.catch(err => {
    console.error(err); 
})
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
        top: 0;
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