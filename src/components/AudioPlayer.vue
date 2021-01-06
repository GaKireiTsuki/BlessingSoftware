<template>
    <div class="audioplayer bmbl">
        <img :src="this.$store.state.img + '?param=50y50'" alt="">
        <img :src="this.$store.state.img + '?param=1000y1000'" alt="">
        <audio autoplay controls :src="this.$store.state.url"></audio>
        <span v-show="this.$store.state.msg == 999" class="msg">无法播放</span>
        <div class="play_list">
            <h3>待播清单</h3>
            <div id="play_list" v-for="item in song" :key="item.name" tabindex="1" outline=0>
                <img @click="play(item.id)" :src="item.al.picUrl + '?param=40y40'" :alt="item.name" :title="item.name">
                <div style="display: grid; height: 55px; border-bottom: .5px solid #00000026; align-items: center;">
                    <div>
                        <span>{{item.name}}</span>
                        <span id="list_name">{{item.ar[0].name}}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="open_list">
            open
        </div>
    </div>
</template>
<script>
import $ from 'jquery'
export default {
    name: 'audioplayer',
    data() {
        return {
            url: '',
            img: '',
            msg: ''
        }
    },
    computed: {
        song() {
            return this.$store.state.song
        }
    },
    methods: {
        play: function (id) {
            var that = this;
            this.$serve.postPlayIf(id).then(res => {
                console.log(res)
                that.msg = '1'
            }).catch(err => {
                console.log(err)
                that.img = 'htps://music.jpg';
                that.url = 'htps://music.mp3';
                that.msg = '0'
            })
            this.$serve.postPlay(id).then(res => {
                that.url = res.data[0].url;
            }).catch(err => {
                console.log(err)
            })
            this.$serve.postInfo(id).then(res => {
                that.img = res.songs[0].al.picUrl;
            }).catch(err => {
                console.log(err)
            })
        },
    },
    watch: {
        url () {
            return this.$store.dispatch('play', this.url)
        },
        img () {
            return this.$store.dispatch('show', this.img)
        },
        msg () {
            return this.$store.dispatch('msgs', this.msg)
        }
    }
}
$(document).ready(function () {
    $(".audioplayer").click(function () { 
        if ($(window).width() < 484) {
            $(".audioplayer audio").toggleClass("audioplayer_audio");
            if ($(".audioplayer").hasClass("e")) {
                $(".audioplayer").css({height: "54px", background: "hsl(0deg 0% 100%)"}).removeClass("e");
                $("body").css({"overflow": "auto"});
                setTimeout(() => {
                    $(".audioplayer img:nth-of-type(1)").show();
                }, 400);
                $(".audioplayer img:nth-of-type(2)").hide();
            } else {
                $(".audioplayer").css({height: "calc(100% - 44px)", background: "#fff"}).addClass("e");
                $("body").css({"overflow": "hidden"});
                $(".audioplayer img:nth-of-type(1)").hide();
                $(".audioplayer img:nth-of-type(2)").show();
            }
        }
    });
    $(".open_list").click(function () { 
        if ($(".play_list").hasClass("e")) {
            $(".play_list").css({ height: "0px", padding: "0"}).removeClass("e");
        } else {
            $(".play_list").css({ height: "calc(100vh - 120px)", padding: "10px 20px"}).addClass("e");
        }
    });
});
</script>
<style>
    .play_list #play_list:last-child{
        border-bottom: .5px solid #00000026;
    }
    .play_list #play_list:last-child div{
        border-bottom: none !important;
    }
    .open_list{
        color: #1d1d1f;
        font-size: 14px;
        width: 45px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid rgba(0,0,0,0.16);
        border-radius: 4px;
        position: absolute;
        right: 12px;
        bottom: 12px;
    }
    .play_list h3{
        font-size: 18px;
        padding: 13px 0 12px;
        font-family: "SF Pro Display","PingFang SC",Arial,sans-serif;
        border-bottom: .5px solid #00000026;
    }
    .play_list{
        position: fixed;
        bottom: 54px;
        height: 0px;
        width: 300px;
        right: 0px;
        overflow-y: auto;
        padding: 0;
        border-top: 1px solid #00000012;
        border-left: .5px solid #00000026;
        box-shadow: 0 0 3px rgba(0,0,0,.1);
        transition: all .4s ease-in-out;
        background: #fff;
    }
    .play_list::-webkit-scrollbar{
        display: none;
    }
    #play_list{
        display: grid;
        column-gap: 20px;
        grid-template-columns: 40px 1fr;
        align-items: center;
        height: 55px;
        box-sizing: border-box;
        outline: none;
    }
    #play_list:focus{
        background: #fa233b;
        color: #fff;
    }
    #play_list:focus #list_name{
        color: #fff;
    }
    #play_list img{
        border-radius: 4px;
        padding: 0;
    }
    #play_list span{
        font-size: 14px;
        -webkit-line-clamp: 1;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        white-space: normal;
        overflow: hidden;
    }
    #play_list span:nth-of-type(2){
        font-size: 12px;
        color: #3c3c4399;
        font-family: "SF Pro Text";
        border-top: none;
    }
    .msg{
        display: grid;
        position: fixed;
        bottom: 60px;
        right: 0;
        margin: auto;
        height: 32px;
        width: 64px;
        align-items: center;
        justify-items: center;
        font-size: 14px;
        color: #fa233b;
        border: 1px solid rgba(0,0,0,0.16);
    }
    .audioplayer{
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 54px;
        display: flex;
        justify-content: center;
        border-top: 1px solid rgba(0,0,0,0.16);
        transition: all .4s ease-in-out;
        z-index: 2;
    }
    .audioplayer img:nth-of-type(1){
        padding: 4px;
        border-radius: 8px;
        box-sizing: border-box;
    }
    .audioplayer img:nth-of-type(2){
        position: absolute;
        width: 100%;
        padding: 30px;
        border-radius: 40px;
        display: none;
        box-sizing: border-box;
    }
    .audioplayer_audio{
        position: absolute;
        bottom: 0;
    }
</style>