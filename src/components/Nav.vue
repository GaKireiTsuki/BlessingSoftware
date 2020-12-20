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
                <img style="width: 18px" src="../assets/img/ss.png" alt="" />
            </a>
            <div class="menu">
                <div></div>
                <div></div>
            </div>
        </div>
        <div class="menu_mobile">
            <router-link to="/store" id="mobile_nav_link">STORE</router-link>
            <router-link to="/news" id="mobile_nav_link">NEWS</router-link>
            <a id="mobile_nav_link">LOGIN</a>
            <a id="mobile_nav_link">
                <img style="width: 18px" src="../assets/img/ss.png" alt="" />
            </a>
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
        $(".menu, #mobile_nav_link").click(function () {
            $(".menu div").toggleClass("menus");
            if ($("#nav").hasClass("e")) {
                $("#nav").css({ background: "rgb(0 0 0 / 0%)" }).removeClass("e");
            } else {
                $("#nav").css({ background: "#1d1d1f" }).addClass("e");
            }
            if ($(".menu_mobile").hasClass("e")) {
                $(".menu_mobile").css({ opacity: "0", height: "44px", padding: "0 34.5px" }).removeClass("e");
            } else {
                $(".menu_mobile").css({ opacity: "1", height: "100vh", padding: "88px 34.5px 34.5px 34.5px" }).addClass("e");
            }
        });
    });
</script>

<style>
    .menu_mobile {
        padding: 0 34.5px;
        box-sizing: border-box;
        width: 100vw;
        height: 0;
        opacity: 0;
        transition: all 0.5s;
        position: absolute;
        background: #1d1d1f;
        color: #dadce0;
        z-index: 1;
        line-height: 2.5em;
        box-shadow: 1px 1px 1px rgba(255, 255, 255, 0.24);
    }
    #mobile_nav_link{
        color: #dadce0;
        display: block;
        font-size: 20px;
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
    }
</style>