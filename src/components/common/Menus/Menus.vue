<template>
    <div class="nav bmbl">
        <div class="pc_search">
            <div class="pc_input_search">
                <div id="pc_input_search">
                    <input type="search" v-model="term" @keyup.enter="search()" name="" id="" />
                    <img style="width: 18px" src="../../../assets/img/search_white.svg" alt="" />
                    <suggest></suggest>
                </div>
            </div>
        </div>
        <div id="nav">
            <div class="menu">
                <div></div>
                <div></div>
            </div>
            <router-link to="/" id="nav_link" class="logo_mobile">
                <img
                    class="logo"
                    src="../../../assets/img/blessingsoftware-logo.svg"
                    alt=""
                />
            </router-link>
            <router-link to="/music" id="nav_link">MUSIC</router-link>
            <router-link to="/artists" id="nav_link">ARTISTS</router-link>
            <router-link to="/store" id="nav_link">STORE</router-link>
            <a href="javascript:;" id="nav_link" class="search">
                <img
                    style="width: 18px"
                    src="../../../assets/img/search_white.svg"
                    alt=""
                />
            </a>
            <a href="javascript:;" id="nav_link" class="bag">
                <img style="width: 18px" src="../../../assets/img/bag.svg" alt="" />
                <div id="bag">
                    <p>Your</p>
                    <div class="bag_menu">
                        <router-link v-show="loginStatu === true" to="/account">Account</router-link>
                        <a v-show="loginStatu !== true" href="javascript:;" class="open_login">Sign in</a>
                        <a v-show="loginStatu === true" href="javascript:;" @click="out()">Sign out</a>
                    </div>
                </div>
            </a>
        </div>
        <!-- 移动端菜单 -->
        <div class="menu_mobile">
            <div id="search">
                <input type="search" v-model="term" @keyup.enter="search()" name="" id="m_search" />
                <img
                    style="width: 18px"
                    src="../../../assets/img/search.svg"
                    alt=""
                />
                <span id="cancel">Cancel</span>
            </div>
            <suggest></suggest>
            <div id="mobile_nav_link">
                <router-link to="/music">MUSIC</router-link>
                <router-link to="/artists">ARTISTS</router-link>
                <router-link to="/store">STORE</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import $ from 'jquery'
import suggest from './Suggest'
import Cookies from 'js-cookie'
import { mapState, mapActions } from 'vuex'
export default {
    name: "menus",
    components: { suggest },
    data() {
        return {
            term: ''
        };
    },
    computed: {
        ...mapState(['loginStatu']),
    },
    methods: {
        ...mapActions(['logout']),
        out () {
            this.logout()
            Cookies.remove('MUSIC_U')
        },
        search () {
            this.$router.push({name: 'Search', query: {term: this.term}})
            $(function () {
                var nav = $("#nav");
                var pc_search = $(".pc_search");
                nav.children("a").removeAttr("style");
                $("input[type=search]").val("");
                pc_search.removeAttr("style");
                $(".suggest").css({ display: "none" });
                setTimeout(() => {
                    $(".suggest").removeAttr("style");
                }, 300);
            })
        },
    },
    watch: {
        keywords (keywords) {
            return this.$store.dispatch("suggest", keywords);
        },
    },
};
$(function () {
    var pc_search = $(".pc_search");
    var bag = $("#bag");
    var nav = $("#nav");
    var search = $("input[type=search]");
    var menu_mobile = $(".menu_mobile");
    var cancel = $("#cancel");
    //控制移动端菜单控件是否显示与隐藏
    $(".menu, #mobile_nav_link a").on("click", function () {
        $(".menu div").toggleClass("menus");
        if (menu_mobile.css("z-index") == 2) {
            nav.removeAttr("style");
            menu_mobile.removeAttr("style");
            $("#mobile_nav_link").hide();
            $("body").removeAttr("style");
            $("#search").hide();
            $(".bag img").css({
                opacity: "1",
                transition: "all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)",
            });
        } else {
            nav.css({ background: "#000" });
            menu_mobile.css({ height: "100vh", "z-index": "2" });
            $("#mobile_nav_link").show();
            $("body").css({ overflow: "hidden" });
            $("#search").css({ display: "flex" });
            $(".bag img").css({
                opacity: "0",
                transition: "all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)",
            });
        }
    });
    //控制搜索取消控件是否显示与隐藏
    $("#m_search").on("click", function () {
        menu_mobile.css({ "margin-top": "0" });
        cancel.show();
        $("#mobile_nav_link").hide();
    });
    cancel.on("click", function () {
        menu_mobile.css({ margin: "43px 0 0 0" });
        cancel.hide();
        $("#mobile_nav_link").show();
        search.val("");
    });
    //控制购物袋是否显示与隐藏
    $(".bag").on("click", function (event) {
        if (bag.is(":hidden")) {
            bag.show();
            event.stopPropagation();
        } else {
            bag.hide();
        }
    });
    //PC端搜索控件
    $(".search, .pc_search").on("click", function (event) {
        event.stopPropagation();
        if (pc_search.css("opacity") == 1) {
            nav.children("a").removeAttr("style");
            $("input[type=search]").val("");
            pc_search.removeAttr("style");
            $(".suggest").css({ display: "none" });
        } else {
            nav.children("a").css({ opacity: "0", transform: "scale(0.3)" });
            pc_search.css({
                opacity: "1",
                "z-index": "3",
                height: "100vh",
                "max-width": "none",
            });
            $("#pc_input_search").children(search).focus();
            bag.hide();
            $(".suggest").css({ display: "block" });
        }
    });
    search.on("click", function (event) {
        event.stopPropagation();
    });
    $(document).on("click", function () {
        bag.hide();
    });
    //判断窗口宽度
    $(window).on("resize", function () {
        if ($(window).width() < 484) {
            nav.children("a").removeAttr("style");
            $("input[type=search]").val("");
            pc_search.removeAttr("style");
        } else {
            $(".menu div").removeClass("menus");
            nav.removeAttr("style");
            menu_mobile.removeAttr("style");
            $("#mobile_nav_link").hide();
            $("body").removeAttr("style");
            $("#search").hide();
            $(".bag img").css({
                opacity: "1",
                transition: "all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)",
            });
            menu_mobile.css({ margin: "43px 0 0 0" });
            cancel.hide();
            $("#mobile_nav_link").show();
            search.val("");
        }
    });
});
</script>

<style>
.pc_search {
    position: fixed;
    margin: auto;
    right: 0;
    left: 0;
    z-index: -3;
    opacity: 0;
    transition: all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
    background: rgba(0, 0, 0, 0.48);
    max-width: 0;
}
.pc_input_search {
    height: 44px;
    background: #1d1d1f;
    width: 100%;
    left: 0;
    right: 0;
    position: absolute;
}
#pc_input_search {
    height: 44px;
    background: #1d1d1f;
    max-width: 680px;
    margin: auto;
    width: 100%;
    left: 0;
    right: 0;
    position: absolute;
}
#pc_input_search img:nth-of-type(1) {
    padding: 13px;
}
#pc_input_search input[type="search"] {
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
#bag {
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
#bag p {
    height: 45px;
    line-height: 45px;
    color: #1d1d1f;
}
.bag_menu {
    display: grid;
}
#bag a {
    color: #1b91dd;
    width: 100px;
    border-top: 1px solid #d2d2d7;
}
#bag a:hover {
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
#mobile_nav_link {
    padding: 0 34.5px;
    display: none;
}
#mobile_nav_link a {
    color: #dadce0;
    font-size: 18px;
    display: block;
    border-top: 1px solid rgba(255, 255, 255, 0.24);
}
#mobile_nav_link a:nth-of-type(1) {
    border: none;
}
#search {
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
#search img {
    position: absolute;
    width: 13px !important;
    padding: 11.5px;
}
input[type="search"] {
    padding: 0 0 0 36px;
    width: 100%;
    height: 36px;
    border: none;
    background: #1d1d1f;
    border-radius: 6px;
    color: #dadce0;
    font-size: 16px;
    outline: none;
    transition: all 0.5s;
}
#cancel {
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
    background: #000000f2;
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
    z-index: 999;
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
    filter: invert(0) !important;
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
    color: #000000f2;
    font-weight: 400;
    outline: none;
    transition: all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
}
#nav_link img{
    filter: invert(1);
}
@media screen and (max-width: 1029.5px) {
    #bag {
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
    .bag {
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
    #bag a {
        width: 100%;
    }
}
@media screen and (min-width: 484px) {
    .menu,
    .menu_mobile {
        display: none;
    }
    .bag {
        opacity: 1 !important;
    }
    .bag img {
        opacity: 1 !important;
    }
    #nav {
        background: none !important;
    }
}
</style>