<template>
    <div class="audioplayer bmbl">
        <img :src="img + '?param=50y50'" alt="" />
        <img :src="img + '?param=1000y1000'" alt="" />
        <audio controls :src="url"></audio>
        <div class="open_list">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill-rule="evenodd"
                stroke-linejoin="round" stroke-miterlimit="2" clip-rule="evenodd" version="1.1" viewBox="0 0 18 18"
                xml:space="preserve">
                <path
                    d="M2.504,4.063l0.519,0c0.431,0 0.78,0.349 0.78,0.779c0,0.431 -0.349,0.78 -0.78,0.78l-0.519,0c-0.431,0 -0.78,-0.349 -0.78,-0.78c0,-0.43 0.349,-0.779 0.78,-0.779Zm3.118,0l9.874,0c0.431,0 0.78,0.349 0.78,0.779c0,0.431 -0.349,0.78 -0.78,0.78l-9.874,0c-0.43,0 -0.78,-0.349 -0.78,-0.78c0,-0.43 0.35,-0.779 0.78,-0.779Zm-3.118,4.157l0.519,0c0.431,0 0.78,0.35 0.78,0.78c0,0.43 -0.349,0.78 -0.78,0.78l-0.519,0c-0.431,0 -0.78,-0.35 -0.78,-0.78c0,-0.43 0.349,-0.78 0.78,-0.78Zm3.118,0l9.874,0c0.431,0 0.78,0.35 0.78,0.78c0,0.43 -0.349,0.78 -0.78,0.78l-9.874,0c-0.43,0 -0.78,-0.35 -0.78,-0.78c0,-0.43 0.35,-0.78 0.78,-0.78Zm-3.118,4.158l0.519,0c0.431,0 0.78,0.349 0.78,0.78c0,0.43 -0.349,0.779 -0.78,0.779l-0.519,0c-0.431,0 -0.78,-0.349 -0.78,-0.779c0,-0.431 0.349,-0.78 0.78,-0.78Zm3.118,0l9.874,0c0.431,0 0.78,0.349 0.78,0.78c0,0.43 -0.349,0.779 -0.78,0.779l-9.874,0c-0.43,0 -0.78,-0.349 -0.78,-0.779c0,-0.431 0.35,-0.78 0.78,-0.78Z">
                </path>
            </svg>
        </div>
    </div>
</template>
<script>
    import $ from "jquery";
    import axios from "axios";
    import { mapState } from "vuex";
    export default {
        name: "audioplayer",
        data() {
            return {
                url: "",
                img: "",
            };
        },
        computed: {
            ...mapState(["songID"]),
        },
        watch: {
            songID(songID) {
                var that = this;
                this.$api.music.playmusic(songID).then((res) => {
                    if (res.data[0].url === null) {

                        this.$message({
                            content: "No Copyright",
                            time: 60000,
                            type: "error",
                            hasClose: true,
                        });
                    }
                    if (res.data[0].fee === 1) {
                        console.log("试听");
                    }
                    if (res.data[0].url !== null) {
                        that.url = res.data[0].url

                        axios.all([this.$api.music.musicinfo(songID)])
                        .then(res => {
                            that.img = res[0].songs[0].al.picUrl
                        })

                        setTimeout(() => {
                            $("audio").trigger("play");
                        }, 400)
                    }
                });
            },
        },
        async created() {
            var that = this;
            axios
                .all([
                    this.$api.music.playmusic(this.songID),
                    this.$api.music.musicinfo(this.songID),
                ])
                .then(
                    axios.spread((res1, res2) => {
                        that.url = res1.data[0].url;
                        that.img = res2.songs[0].al.picUrl;
                    })
                );
        },
    };
    $(function () {
        $(".audioplayer").click(function () {
            if ($(window).width() < 484) {
                $(".audioplayer audio").toggleClass("audioplayer_audio");
                if ($(".audioplayer").hasClass("e")) {
                    $(".audioplayer")
                        .css({ height: "54px", background: "hsl(0deg 0% 100%)" })
                        .removeClass("e");
                    $("body").css({ overflow: "auto" });
                    setTimeout(() => {
                        $(".audioplayer img:nth-of-type(1)").show();
                    }, 400);
                    $(".audioplayer img:nth-of-type(2)").hide();
                } else {
                    $(".audioplayer")
                        .css({ height: "calc(100% - 44px)", background: "#fff" })
                        .addClass("e");
                    $("body").css({ overflow: "hidden" });
                    $(".audioplayer img:nth-of-type(1)").hide();
                    $(".audioplayer img:nth-of-type(2)").show();
                }
            }
        });
    });
</script>
<style>
    .audioplayer {
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 54px;
        display: flex;
        justify-content: center;
        border-top: 1px solid rgba(0, 0, 0, 0.16);
        transition: all 0.4s ease-in-out;
        z-index: 2;
    }

    .audioplayer img:nth-of-type(1) {
        padding: 4px;
        border-radius: 8px;
        height: 100%;
        box-sizing: border-box;
    }

    .audioplayer img:nth-of-type(2) {
        position: absolute;
        width: 100%;
        padding: 30px;
        border-radius: 40px;
        display: none;
        box-sizing: border-box;
    }

    .audioplayer_audio {
        position: absolute;
        bottom: 0;
    }
</style>