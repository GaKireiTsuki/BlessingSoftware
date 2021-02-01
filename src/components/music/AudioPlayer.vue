<template>
    <div class="audioplayer bmbl">
        <div class="song_info">
            <img v-lazy="img + '?param=44y44'" alt="" />
            <div id="song_info">
                <span class="info" v-show="url !== ''">{{songName}}</span>
                <span class="info" v-show="url !== ''">{{artistName}} — {{albumName}}</span>
                <audio controls :src="url" v-show="url !== ''"></audio>
            </div>
        </div>
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
                url: '',
                img: '',
                artistName: '',
                songName: '',
                albumName: ''
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
                            that.songName = res[0].songs[0].name
                            that.artistName = res[0].songs[0].ar[0].name
                            that.albumName = res[0].songs[0].al.name
                        })

                        setTimeout(() => {
                            $("audio").trigger("play");
                        }, 400)
                    }
                });
            },
        }
    };
</script>
<style>
    .song_info{
        display: flex;
        height: 44px;
        width: 100%;
        max-width: 600px;
        padding: 0 5px;
        box-sizing: border-box;
    }
    #song_info{
        border: 1px solid #E0E0E0;
        box-sizing: border-box;
        width: 100%;
        display: grid;
        grid-template-rows: 14px 14px 13px;
        background: #fff;
        border-left: none;
    }
    #song_info span{
        font-size: 12px;
        color: #000000f2;
        text-align: center;
    }
    #song_info span:nth-of-type(2){
        color: #3c3c4380;
    }
    .song_info audio{
        height: 100%;
        border-left: none;
        background: #fff;
        width: 100%;
    }
    .song_info img{
        width: 44px;
        height: 44px;
        filter: invert(0.1);
    }
    .audioplayer {
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 54px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-top: 1px solid rgba(0, 0, 0, 0.16);
        transition: all 0.4s ease-in-out;
        z-index: 2;
        background: hsl(0deg 0% 100% / 88%) !important;
        backdrop-filter: saturate(50%) blur(20px) !important;
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