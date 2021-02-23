<template>
    <div class="play_list bmbl">
        <transition name="slide">
            <div class="play_history" v-show="phsh">
                <h3 @click="phsh =! phsh">历史记录</h3>
                <div id="play_list" v-for="(item, index) in playHistory" :key="index" tabindex="1" outline=0>
                    <img @click="playSong(item.id), addSong(item)" v-lazy="item.al.picUrl + '?param=40y40'">
                    <div class="play_list_name">
                        <div>
                            <span id="list_name">{{item.name}}</span>
                            <span id="list_name">{{item.ar[0].name}}</span>
                            </div>
                        <div class="more" tabindex="0" outline=0>
                            <span></span>
                            <div class="more_list">
                                <div class="clear" @click="removeSong(item.id)">从“历史记录”中移除项目</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
        <h3 v-show="playList && playList.length>0" @click="phsh =! phsh">待播清单</h3>
        <div id="play_list" v-for="(item, index) in playList" :key="index" tabindex="1" outline=0>
            <img v-if="item.al" @click="playSong(item.id)" v-lazy="item.al.picUrl + '?param=40y40'" :key="item.al.picUrl + '?param=40y40'">
            <img v-if="item.picUrl" @click="playSong(item.id)" v-lazy="item.picUrl + '?param=40y40'" :key="item.picUrl + '?param=40y40'">
            <div class="play_list_name">
                <div>
                    <span id="list_name">{{item.name}}</span>
                    <span v-if="item.ar" id="list_name">{{item.ar[0].name}}</span>
                    <span v-if="item.song" id="list_name">{{item.song.artists[0].name}}</span>
                </div>
                <div class="more" tabindex="0" outline=0>
                    <span></span>
                    <div class="more_list">
                        <div class="clear" @click="removeSong(item.id)">从“待播清单”中移除项目</div>
                    </div>
                </div>
            </div>
        </div>
        <button v-show="playList && playList.length>0" @click="Clear()">清除</button>
        <p class="typography_label" v-show="playList && playList.length<=0">无待播歌曲。</p>
    </div>
</template>
<script>
import { mapState, mapActions, mapMutations } from 'vuex'
export default {
    name: 'playlist',
    data() {
        return {
            phsh: false
        }
    },
    computed: {
        ...mapState(['playList', 'playHistory']),
    },
    methods: {
        ...mapActions(['playSong', 'addSong', 'Clear', 'removeSong']),
        ...mapMutations(['ADD_PLAY_LIST'])
    }
}
</script>
<style>
    .slide-enter-active,
    .slide-leave-active{
        transition: all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
        height: 100% !important;
    }
    .slide-enter,
    .slide-leave-to {
        height: 0% !important;
    }
    .play_history{
        overflow-y: auto;
        height: 100%;
    }
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
        color: var(--redFontColor);
        font-size: 14px;
        height: 40px;
        width: 100%;
        border: none;
        background: none;
        outline: none;
        padding: 10px 20px 0;
        border-top: .5px solid #00000026;
    }
    .play_list_name{
        display: grid;
        height: 55px;
        border-top: .5px solid #00000026;
        align-items: center;
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
        background: var(--whiteBgColor);
        border-radius: 6px;
        box-shadow: 0 2px 10px rgba(0,0,0,.08);
        z-index: 1;
        display: none;
    }
    .more_list div{
        padding: 7px 32px 0px 10px;
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
        border-radius: 4px;
        cursor: pointer;
        border: none;
        background: none;
        outline: none;
    }
    .open_list svg{
        fill: var(--grayishFillColor);
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
        background: var(--whiteBgColor);
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
        outline: none;
        position: relative;
    }
    #play_list:hover .more span{
        background-color: var(--redBgColor);
    }
    #play_list:hover{
        background: var(--whiteBgColor);
    }
    #play_list:focus .more span{
        background-color: var(--whiteBgColor);
    }
    #play_list:focus{
        background: var(--redBgColor);
    }
    #play_list:focus #list_name{
        color: var(--whiteFontColor);
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
        color: var(--grayishFontColor);
        font-family: "SF Pro Text";
        border-top: none;
    }
</style>