<template>
    <div class="play_list bmbl">
        <h3 v-show="playList && playList.length>0">待播清单</h3>
        <div id="play_list" v-for="(item, index) in playList" :key="index" tabindex="1" outline=0>
            <img @click="play(item.id)" v-lazy="'?param=40y40'" :key="'?param=40y40'" :alt="item.name" :title="item.name">
            <!-- <img @click="play(item.id)" v-lazy="item.al.picUrl + '?param=40y40'" :alt="item.name" :title="item.name">
            <img @click="play(item.id)" v-lazy="item.picUrl + '?param=40y40'" :alt="item.name" :title="item.name"> -->
            <div class="play_list_name">
                <div>
                    <span id="list_name">{{item.name}}</span>
                    <!-- <span id="list_name">{{item.ar[0].name}}</span>
                    <span id="list_name">{{item.song.artists[0].name}}</span> -->
                </div>
                <div class="more" tabindex="0" outline=0>
                    <span></span>
                    <div class="more_list">
                        <div class="clear" @click="removesongs(item.id)">从“待播清单”中移除项目</div>
                    </div>
                    </div>
                </div>
            </div>
        <button v-show="playList && playList.length>0" @click="clear()">清除</button>
        <p class="typography_label" v-show="playList && playList.length<=0">无待播歌曲。</p>
    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
    name: 'playlist',
    computed: {
        ...mapState(['playList'])
    },
    methods: {
        ...mapActions(['play', 'add', 'clear']),
        removesongs(id) {
            this.$store.commit('removesongs', id)
        }
    }
}
</script>
<style>
    .typography_label{
        height: 100%;
        display: flex;
        place-items: center;
        place-content: center;
        color: #000000f2;
        font-size: 14px;
    }
    .more:focus .more_list{
        display: block;
    }
    .play_list button{
        color: #fa233b;
        font-size: 14px;
        height: 40px;
        width: 100%;
        border: none;
        background: none;
        outline: none;
        box-sizing: border-box;
        padding: 10px 20px 0;
        border-top: .5px solid #00000026;
    }
    .play_list_name{
        display: grid;
        height: 55px;
        border-top: .5px solid #00000026;
        align-items: center;
        box-sizing: border-box;
        grid-template-columns: 1fr 40px;
    }
    .more{
        display: flex;
        justify-content: center;
        position: relative;
        outline: none;
    }
    .more_list{
        position: absolute;
        width: 180px;
        right: 20px;
        bottom: -19.5px;
        font-size: 12px;
        background: #fff;
        border-radius: 6px;
        box-shadow: 0 2px 10px rgba(0,0,0,.08);
        z-index: 1;
        display: none;
    }
    .more_list div{
        padding: 7px 32px 0px 10px;
        box-sizing: border-box;
        height: 32px;
    }
    .more span{
        display: block;
        height: 25px;
        width: 25px;
        z-index: 9999;
        -webkit-mask-image: url("../../../assets/img/more.png");
        mask-image: url("../../../assets/img/more.png");
        -webkit-mask-repeatd: no-repeat;
        mask-repeat: no-repeat;
    }
    .open_list{
        color: #1d1d1f;
        font-size: 14px;
        width: 28px;
        height: 22px;
        padding: 2px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        border-radius: 4px;
        position: absolute;
        right: 12px;
        bottom: 12px;
        cursor: pointer;
    }
    .open_list svg{
        fill: #3c3c4399;
    }
    .play_list h3{
        font-size: 18px;
        padding: 13px 20px 12px;
        font-family: "SF Pro Display","PingFang SC",Arial,sans-serif;
    }
    .play_list{
        position: fixed;
        bottom: 53px;
        height: calc(100vh - 97px);
        width: 300px;
        right: 0px;
        overflow-y: auto;
        padding: 10px 0px;
        display: none;
        box-shadow: 0 0 3px rgba(0,0,0,.1);
        box-sizing: border-box;
        background: #fff;
        border-top: 1px solid #00000012;
        border-left: .5px solid #00000026;
        z-index: 2;
    }
    #play_list{
        display: grid;
        column-gap: 20px;
        grid-template-columns: 40px 1fr;
        align-items: center;
        height: 55px;
        padding: 0px 20px;
        box-sizing: border-box;
        outline: none;
        position: relative;
    }
    #play_list:hover .more span{
        background-color: #fa233b;
    }
    #play_list:hover{
        background: #fff;
    }
    #play_list:focus .more span{
        background-color: #fff;
    }
    #play_list:focus{
        background: #fa233b;
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
</style>