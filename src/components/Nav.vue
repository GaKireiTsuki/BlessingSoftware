<template>
    <div class="nav hmbl">
        <div id="nav">
            <div class="menu">
                <div></div>
                <div></div>
            </div>
            <router-link to="/" id="nav_link" class="logo_mobile">
                <img class="logo" src="../assets/img/blessingsoftware-logo.svg" alt="" />
            </router-link>
            <router-link to="/store" id="nav_link">STORE</router-link>
            <router-link to="/news" id="nav_link">NEWS</router-link>
            <a id="nav_link">LOGIN</a>
            <a id="nav_link">
                <img style="width: 18px" src="../assets/img/search_white.svg" alt="" />
            </a>
            <a id="nav_link">
                <img style="width: 18px" src="../assets/img/bag.svg" alt="" />
            </a>
            <div class="menu">
                <div></div>
                <div></div>
            </div>
        </div>
        <div class="menu_mobile">
            <div id="search">
                <input type="search" name="" id="">
                <img style="width: 18px" src="../assets/img/search.svg" alt="" />
                <span id="cancel">Cancel</span>
            </div>
            <div id="mobile_nav_link">
                <router-link to="/store" >STORE</router-link>
                <router-link to="/news">NEWS</router-link>
                <a>LOGIN</a>
            </div>
        </div>
    </div>
</template>

<script>
    import $ from "jquery";
    export default {
        name: "Nav",
    };
    $(document).ready(function () {
        //Click back to top
        $("#nav_link").click(function () {
            $("body, html").animate({ scrollTop: 0 }, 500, "linear");
        });
        //Refresh back to top
        $("body, html").animate({ scrollTop: 0 }, 200);
        $(".menu, #mobile_nav_link a").click(function () {
            $(".menu div").toggleClass("menus");
            if ($("#nav").hasClass("e")) {
                $("#nav").css({ background: "rgb(0 0 0 / 0%)" }).removeClass("e");
                $(".menu_mobile").css({ height: "0", "z-index": "1" }).removeClass("e");
                $("#mobile_nav_link").css({ display: "none" }).removeClass("e");
                $("body").css({ overflow: "auto" }).removeClass("e");
                $("#search").css({ display: "none" }).removeClass("e");
            } else {
                $("#nav").css({ background: "#000" }).addClass("e");
                $(".menu_mobile").css({ height: "100vh", "z-index": "2" }).addClass("e");
                $("#mobile_nav_link").css({ display: "block" }).addClass("e");
                $("body").css({ overflow: "hidden" }).addClass("e");
                $("#search").css({ display: "flex" }).addClass("e");
            }
        });
        $("input[type=search]").click(function () { 
            $(".menu_mobile").css({ "margin-top": "0" });
            $("#cancel").css({ display: "block" });
            $("#mobile_nav_link").css({ display: "none" });
        });
        $("#cancel").click(function () { 
            $(".menu_mobile").css({ margin: "43px 0 0 0" });
            $("#cancel").css({ display: "none" });
            $("#mobile_nav_link").css({ display: "block" });
        });
    });
</script>

<style>
    .menu_mobile {
        box-sizing: border-box;
        width: 100vw;
        height: 0;
        margin: 43px 0 0 0;
        transition: all 0.5s;
        position: absolute;
        background: #000;
        color: #dadce0;
        z-index: 1;
        overflow: auto;
        line-height: 2.5em;
    }
    #mobile_nav_link{
        padding: 0 34.5px;
        display: none;
    }
    #mobile_nav_link a{
        color: #dadce0;
        font-size: 18px;
        display: block;
        border-top: 1px solid rgba(255, 255, 255, 0.24);
    }
    #mobile_nav_link a:nth-of-type(1){
        border: none;
    }
    #search{
        display: flex;
        align-items: center;
        height: 2.5em;
        padding: 16px 10px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.24);
        position: sticky;
        top: 0;
        background: #000;
        display: none;
    }
    #search img{
        position: absolute;
        width: 13px !important;
        padding: 11.5px;
    }
    input[type=search]{
        padding: 0 0 0 36px;
        width: 100%;
        height: 36px;
        border: none;
        background: #1D1D1F;
        border-radius: 6px;
        color: #dadce0;
        font-size: 16px;
        outline: none;
        transition: all 0.5s;
    }
    #cancel{
        margin-left: 16px;
        color: #1b91dd;
        display: none;
    }
    .menu {
        height: 25px;
        width: 25px;
        position: relative;
    }
    .menu div {
        width: 100%;
        height: 2px;
        background: #dadce0;
        border-radius: 1px;
        transition: all 0.5s;
        position: inherit;
    }
    .menus:nth-of-type(1) {
        transform-origin: center center;
        -webkit-transform-origin: center center;
        transform: translateY(7px) rotate(-45deg);
    }
    .menus:nth-of-type(2) {
        transform-origin: center center;
        -webkit-transform-origin: center center;
        transform: translateY(-7px) rotate(45deg);
    }
    .menu div:nth-of-type(1) {
        top: 5px;
    }
    .menu div:nth-of-type(2) {
        top: 17px;
    }
    .nav {
        height: 48px;
        max-height: 44px;
        position: sticky;
        top: 0;
        z-index: 1;
        display: flex;
        background: rgb(0, 0, 0, 0.8);
    }
    #nav {
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
        z-index: 2;
        transition: all 0.4s;
    }
    .logo {
        width: 25px;
    }
    .logo:hover {
        animation: logo 3s ease-in-out;
        animation-iteration-count: infinite;
    }
    @keyframes logo {
        0% {
            transform: rotate(360deg);
        }
        100% {
            transform: rotate(0deg);
        }
    }
    #nav_link {
        display: flex;
        align-items: center;
        height: 100%;
        padding: 0px 10px;
        color: #fff;
        cursor: pointer;
    }
    @media screen and (max-width: 484px) {
        .logo_mobile {
            display: block !important;
        }
        .logo {
            margin-top: 9.5px;
        }
        #nav_link {
            display: none;
        }
        #nav {
            padding: 0px 9.5px;
            display: flex;
            justify-content: space-between;
        }
    }
    @media screen and (min-width: 484px) {
        .menu,
        .menu_mobile {
            display: none;
        }
        #nav{
            background: none !important;
        }
        body{
            overflow: auto !important;
        }
    }
</style>