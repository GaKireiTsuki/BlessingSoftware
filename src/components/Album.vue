<template>
    <div class="album">
        <div id="album">
            <div class="cover" @click="song()">
                <img v-lazy="picUrl + '?param=1000y1000'" :alt="name" :title="name">
            </div>
            <div class="album_content">
                <div id="album_info">
                    <h1>{{name}}</h1>
                    <router-link :to="{name: 'Artist', params: {id: item.id}}" v-for="item in artistname" :key="item.name">{{item.name}}</router-link>
                    <h3>{{subType}} · {{publishTime | Year}}</h3>
                </div>
                <div id="album_song_list">
                    <div class="album_song_list" v-for="item in songs" :key="item.names" tabindex="0" outline=0>
                        <div style="width: 17.5px"></div>
                        <span>
                            <div>{{item.no}}</div>
                            <svg @click="play(item.id)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 27" class="dt-play-button__list-item-play-glyph"><path d="M11.3545232,18.4180929 L18.4676039,14.242665 C19.0452323,13.9290954 19.0122249,13.1204156 18.4676039,12.806846 L11.3545232,8.63141809 C10.7603912,8.26833741 9.98471883,8.54889976 9.98471883,9.19254279 L9.98471883,17.8404645 C9.98471883,18.5006112 10.7108802,18.7976773 11.3545232,18.4180929 Z"></path></svg>
                        </span>
                        <span class="info">{{item.name}}</span>
                        <span>{{item.dt | Duration}}</span>
                        <div style="width: 17.5px"></div>
                    </div>
                    <div class="album_song_list" style="height: 0.01px">
                        <div style="width: 17.5px"></div>
                        <span></span>
                        <span></span>
                        <span></span>
                        <div style="width: 17.5px"></div>
                    </div>
                </div>
                <div class="album_info">
                    <span>{{size}}&nbsp;首歌曲</span>
                    <span>发行日期 {{publishTime | Date}}</span>
                    <span>{{company}}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import album from '../axios/album'
export default album
</script>
<style>
    #album{
        margin: 40px 0px;
        display: flex;
        grid-auto-flow: column;
    }
    .cover{
        position: sticky;
        top: 84px;
        height: 47%;
        width: 47%;
    }
    #album img{
        width: 100%;
        height: 100%;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,.1), 0 10px 13px 0 rgba(0,0,0,.11);
        border-radius: 4px;
    }
    #album img:hover{
        filter: brightness(80%);
        transition: 0.1s ease-in;
    }
    .album_content{
        margin-left: 20px;
        width: -webkit-fill-available;
    }
    .album_content h1{
        font-size: 24px;
    }
    .album_content h3{
        margin-top: 4px;
        color: #3c3c4399;
        text-transform: uppercase;
        font-size: 11px;
        line-height: 1.18182;
        font-weight: 500;
        letter-spacing: .006em;
    }
    .album_content a{
        font-size: 24px;
        color: #fa233b;
        margin-right: 8px;
    }
    .album_content a:hover{
        text-decoration: underline;
    }
    #album_song_list{
        margin-top: 16px;
    }
    .album_song_list{
        display: grid;
        font-size: 14px;
        grid-template-columns: 17.5px 26px 1fr 70px 17.5px;
        box-sizing: border-box;
    }
    .album_song_list span:nth-of-type(3){
        text-align: end;
        font-size: 12px;
        color: #3c3c4399;
    }
    .album_song_list:hover{
        background: #FBFBFB;
        box-sizing: border-box;
        border-radius: 8px;
    }
    .album_song_list:hover span{
        box-shadow: none;
    }
    .album_song_list:hover + .album_song_list span{
        box-shadow: none;
    }
    .album_song_list:hover span:nth-of-type(1) div{
        opacity: 0;
    }
    .album_song_list:hover span:nth-of-type(1) svg{
        opacity: 1;
        cursor: pointer;
    }
    .album_song_list:focus{
        background: #DD1F34;
        border-radius: 8px;
        outline: none;
    }
    .album_song_list:focus span{
        color: #fff;
        box-shadow: none;
    }
    .album_song_list:focus + .album_song_list span{
        box-shadow: none;
    }
    .album_song_list:focus span:nth-of-type(1) svg{
        fill: #fff;
    }
    .album_song_list span{
        box-shadow: 0px -1px #00000026;
        height: 55px;
        line-height: 55px;
        box-sizing: border-box;
    }
    .album_song_list span:nth-of-type(1){
        height: 55px;
        width: 26px;
        position: relative;
    }
    .album_song_list span:nth-of-type(1) svg{
        left: -12px;
        width: 34px;
        top: 10.5px;
        position: absolute;
        fill: #fa233b;
        opacity: 0;
    }
    #album_info{
        padding: 0px 17.5px;
        box-sizing: border-box;
    }
    .album_info{
        padding: 20px 17.5px 0;
        box-sizing: border-box;
    }
    .album_info span{
        display: block;
        color: #3c3c434d;
        font-size: 11px;
        line-height: 1.18182;
        font-weight: 500;
        letter-spacing: .006em;
        margin-bottom: 3px;
    }
    .album_info span:nth-of-type(1){
        font-size: 12px;
        color: #3c3c4399;
    }
    @media screen and (max-width: 484px) {
        #album .cover{
            padding: 16px;
            width: 100%;
            height: 100%;
            box-sizing: border-box;
            position: unset;
        }
        #album{
            display: block;
            margin: 0;
        }
        .album{
            padding: 24px;
            box-sizing: border-box;
        }
        .album_content{
            margin: 0;
        }
    }
</style>