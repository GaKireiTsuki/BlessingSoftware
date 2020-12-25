<template>
    <div class="nav hmbl">
        <div class="pc_search">
            <div class="pc_input_search">
                <div id="pc_input_search">
                    <input type="search" name="" id="">
                    <img style="width: 18px" src="../assets/img/search_white.svg" alt="" />
                </div>
            </div>
        </div>
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
            <a href="javascript:;" id="nav_link">LOGIN</a>
            <a href="javascript:;" id="nav_link" class="search">
                <img style="width: 18px" src="../assets/img/search_white.svg" alt="" />
            </a>
            <a href="javascript:;" id="nav_link" class="bag">
                <img style="width: 18px" src="../assets/img/bag.svg" alt="" />
                <div id="bag">
                    <p>Your</p>
                    <div class="bag_menu">
                        <router-link to="/">LOGIN</router-link>
                        <router-link to="">BAG</router-link>
                        <router-link to="">LOGINOUT</router-link>
                    </div>
                </div>
            </a>
        </div>
        <!-- 移动端菜单 -->
        <div class="menu_mobile">
            <div id="search">
                <input type="search" name="" id="m_search">
                <img style="width: 18px" src="../assets/img/search.svg" alt="" />
                <span id="cancel">Cancel</span>
            </div>
            <div id="mobile_nav_link">
                <router-link to="/store" >STORE</router-link>
                <router-link to="/news">NEWS</router-link>
                <a href="javascript:;">LOGIN</a>
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
        //控制移动端菜单控件是否显示与隐藏
        $(".menu, #mobile_nav_link a").click(function () {
            $(".menu div").toggleClass("menus");
            if ($("#nav").hasClass("e")) {
                $("#nav").css({ background: "rgb(0 0 0 / 0%)" }).removeClass("e");
                $(".menu_mobile").css({ height: "0", "z-index": "1" }).removeClass("e");
                $("#mobile_nav_link").hide().removeClass("e");
                $("body").css({ overflow: "auto" }).removeClass("e");
                $("#search").hide().removeClass("e");
                $(".bag img").css({ opacity: "1", transition: "all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)" }).removeClass("e");
            } else {
                $("#nav").css({ background: "#000" }).addClass("e");
                $(".menu_mobile").css({ height: "100vh", "z-index": "2" }).addClass("e");
                $("#mobile_nav_link").show().addClass("e");
                $("body").css({ overflow: "hidden" }).addClass("e");
                $("#search").css({ display: "flex" }).addClass("e");
                $(".bag img").css({ opacity: "0", transition: "all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)" }).addClass("e");
            }
        });
        //控制搜索取消控件是否显示与隐藏
        $("#m_search").click(function () { 
            $(".menu_mobile").css({ "margin-top": "0" });
            $("#cancel").show();
            $("#mobile_nav_link").hide();
        });
        $("#cancel").click(function () { 
            $(".menu_mobile").css({ margin: "43px 0 0 0" });
            $("#cancel").hide();
            $("#mobile_nav_link").show();
            $("input[type=search]").val("");
        });
        //控制购物袋是否显示与隐藏
        $(".bag").click(function () { 
            if ($("#bag").is(":hidden")) {
                $("#bag").show();
                event.stopPropagation();
            } else {
                $("#bag").hide();
            }
        });
        //PC端搜索控件
        $("#nav").children("a#nav_link").css({ transition: "all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)" })
        $(".search, .pc_search").click(function () { 
            event.stopPropagation();
            if ($("#nav").children("a#nav_link").hasClass("e")) {
                $("#nav").children("a#nav_link").css({ opacity: "1", transform: "scale(1)" }).removeClass("e");
                $(".pc_search").css({ opacity: "0", "z-index": "-3", }).removeClass("e");
                $("input[type=search]").val("");
                $(".pc_search").removeAttr( "style" );
            } else {
                $("#nav").children("a#nav_link").css({ opacity: "0", transform: "scale(0.3)" }).addClass("e");
                $(".pc_search").css({ opacity: "1", "z-index": "3", height: "100vh" }).addClass("e");
                $("#pc_input_search input[type=search]").focus();
                $("#bag").hide();
            }
        });
        $("input[type=search]").click(function () { 
            event.stopPropagation();
        });
        $(document).click(function () { 
            $("#bag").hide();
        });
    });
</script>

<style>
    .pc_search{
        position: fixed;
        margin: auto;
        right: 0;
        left: 0;
        z-index: -3;
        opacity: 0;
        transition: all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
        background: rgba(0,0,0,0.48);
    }
    .pc_input_search{
        height: 44px;
        background: #1D1D1F;
        width: 100%;
        left: 0;
        right: 0;
        position: absolute;
    }
    #pc_input_search{
        height: 44px;
        background: #1D1D1F;
        max-width: 680px;
        margin: auto;
        width: 100%;
        left: 0;
        right: 0;
        position: absolute;
    }
    #pc_input_search img:nth-of-type(1){
        padding: 13px;
    }
    #pc_input_search input[type=search]{
            padding: 0 0 0 44px;
        height: 44px;
        background: none;
        max-width: 680px;
        margin: auto;
        width: 100%;
        left: 0;
        right: 0;
        position: absolute;
    }
    #bag{
        line-height: 2.5em;
        color: #dadce0;
        position: absolute;
        top: 50px;
        border-radius: 10px;
        background: #fff;
        border: 1px solid #d2d2d7;
        padding: 5px 20px;
        right: -49.5px;
        display: none;
        outline: none;
    }
    #bag p{
        height: 45px;
        line-height: 45px;
        color: #1D1D1F;
    }
    .bag_menu{
        display: grid;
    }
    #bag a{
        color: #1b91dd;
        width: 100px;
        border-top: 1px solid #d2d2d7;
    }
    #bag a:hover{
        text-decoration: underline;
    }
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
        font-weight: 300;
        outline: none;
    }
    @media screen and (max-width: 1029.5px) {
        #bag{
            right: 0;
        }
    }
    @media screen and (max-width: 484px) {
        .logo_mobile {
            display: block !important;
        }
        .logo {
            margin-top: 9.5px;
        }
        #nav_link,
        .pc_search {
            display: none;
        }
        .bag{
            display: flex !important;
            padding: 0 !important;
            opacity: 1 !important;
            transform: scale(1) !important;
        }
        #nav {
            padding: 0px 16px;
            display: flex;
            justify-content: space-between;
        }
        #bag {
            top: 43px;
            width: 100vw;
            right: -15px;
            box-sizing: border-box;
            border: none;
            border-bottom: 1px solid #d2d2d7;
            border-radius: unset;
        }
        #bag a{
            width: 100%;
        }
    }
    @media screen and (min-width: 484px) {
        .menu,
        .menu_mobile {
            display: none;
        }
        .bag{
            opacity: 1 !important;
        }
        .bag img{
            opacity: 1 !important;
        }
        #nav{
            background: none !important;
        }
        body{
            overflow: auto !important;
        }
    }
</style>