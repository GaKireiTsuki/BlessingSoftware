<template>
    <div class="audioplayer bmbl">
        <img :src="this.$store.state.img + '?param=50y50'" alt="">
        <img :src="this.$store.state.img + '?param=1000y1000'" alt="">
        <audio autoplay controls :src="this.$store.state.url"></audio>
        <span v-show="this.$store.state.msg == 999" class="msg">无法播放</span>
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
});
</script>
<style>
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