<template>
    <div class="store">
        <div class="StoreContent">
            <div class="banner"></div>
            <div class="GameOne">
                <router-link to="/store/bh3" class="GameTab" v-for="item in Game" :key="item.id">
                    <img v-lazy="item.img" alt="" />
                    <div class="GameName">
                        <span>{{ item.GameName }}</span>
                        <span>{{ item.ReleaseDate}}</span>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                Game: [
                    { img: require("../assets/img/bh3.jpg") },
                    { img: require("../assets/img/bh3.jpg") },
                    { img: require("../assets/img/bh3.jpg") },
                    { img: require("../assets/img/bh3.jpg") },
                    { img: require("../assets/img/bh3.jpg") },
                    { img: require("../assets/img/bh3.jpg") },
                    { img: require("../assets/img/bh3.jpg") },
                    { img: require("../assets/img/bh3.jpg") },
                    { img: require("../assets/img/bh3.jpg") },
                ],
            };
        },
    };
</script>

<style>
    .store {
        padding-top: 100px;
    }
    .StoreContent {
        max-width: 950px;
        margin: auto;
        display: grid;
        gap: 100px;
    }
    .banner {
        height: 300px;
        display: flex;
        justify-content: center;
    }
    .GameOne {
        display: grid;
        grid-auto-flow: column;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(3, 1fr);
        gap: 20px;
    }
    .GameTab {
        transition: all 0.4s;
        position: relative;
        overflow: hidden;
    }
    .GameTab:hover {
        box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.16);
    }
    .GameTab:hover .GameName {
        bottom: 0;
        display: block;
        color: #fff;
    }
    .GameTab img {
        transition: all 0.4s;
        display: block;
    }
    .GameTab img:hover {
        filter: saturate(180%) blur(20px);
        box-sizing: border-box;
    }
    .GameName {
        box-shadow: 0px -1px 0px rgba(0, 0, 0, 0.16);
        position: absolute;
        width: 100%;
        display: none;
        box-sizing: border-box;
        padding: 0px 4px;
        transition: all 0.4s;
    }
    .GameName span {
        line-height: 20px;
        display: block;
    }
</style>