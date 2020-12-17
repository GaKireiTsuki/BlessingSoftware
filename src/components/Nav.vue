<template>
    <div class="nav hmbl">
        <div id="nav">
            <router-link to="/" id="nav_link" class="logo_mobile">
                <img class="logo" src="../assets/img/blessingsoftware-logo.svg" alt="">
            </router-link>
            <router-link to="/store" id="nav_link">STORE</router-link>
            <router-link to="/news" id="nav_link">NEWS</router-link>
            <a id="nav_link">LOGIN</a>
            <a id="nav_link">
                <img style="width: 18px;" src="../assets/img/ss.png" alt="">
            </a>
        </div>
    </div>
</template>

<script>
import $ from 'jquery'
export default {
    name: 'Nav',
}
$(document).ready(function () {
    //Click back to top
    $('a').click(function () {
        $('body, html').animate({scrollTop: 0}, 500, 'linear');
    });
    //Refresh back to top
    $('body, html').animate({scrollTop: 0}, 200);
});
</script>

<style>
    .nav{
        height: 48px;
        max-height: 44px;
        position: sticky;
        top: 0;
        display: flex;
        background: rgb(0, 0, 0, 0.8);
    }
    #nav{
        margin: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-sizing: border-box;
        font-size: 14px;
        color: #3d3e3f;
        position: sticky;
        position: -webkit-sticky;
        max-width: 980px;
        height: 100%;
        width: 100%;
        transition: 0.5s cubic-bezier(0.25, 0.1, 0.25, 1);
        z-index: 1;
    }
    .logo{
        width: 25px;
    }
    .logo:hover{
        animation: logo 3s ease-in-out;
        animation-iteration-count: infinite;
    }
    @keyframes logo{
        0% {transform: rotate(360deg);}
        100% {transform: rotate(0deg);}
    }
    #nav_link{
        display: flex;
        align-items: center;
        height: 100%;
        padding: 0px 10px;
        color: #fff;
        cursor: pointer;
    }
    @media screen and (max-width: 484px) {
        .logo_mobile{
            display: block !important;
            margin: auto;
        }
        .logo{
            margin: 9.5px 0;
        }
        #nav_link{
            display: none;
        }
    }
</style>