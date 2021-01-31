<template>
    <div class="album">
        <div id="album">
            <div class="cover">
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
                            <button v-show="songID === item.id" style="background: no-repeat; border: none;">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 27"><path d="M9,17.6071429 C9,18.3928571 9.42,19 10.14,19 L10.92,19 C11.58,19 12,18.3928571 12,17.6071429 L12,9.39285714 C12,8.60714286 11.58,8 10.92,8 L10.14,8 C9.42,8 9,8.60714286 9,9.39285714 L9,17.6071429 Z M15,17.6071429 C15,18.3928571 15.42,19 16.14,19 L16.92,19 C17.58,19 18,18.3928571 18,17.6071429 L18,9.39285714 C18,8.60714286 17.58,8 16.92,8 L16.14,8 C15.42,8 15,8.60714286 15,9.39285714 L15,17.6071429 Z"></path></svg>
                            </button>
                            <button v-show="songID !== item.id" style="background: no-repeat; border: none;">
                                <svg @click="play(item.id)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 27"><path d="M11.3545232,18.4180929 L18.4676039,14.242665 C19.0452323,13.9290954 19.0122249,13.1204156 18.4676039,12.806846 L11.3545232,8.63141809 C10.7603912,8.26833741 9.98471883,8.54889976 9.98471883,9.19254279 L9.98471883,17.8404645 C9.98471883,18.5006112 10.7108802,18.7976773 11.3545232,18.4180929 Z"></path></svg>
                            </button>
                        </span>
                        <span class="info name_artist">
                            <div>{{item.name}}</div>
                            <div id="name_artist" v-show="item.ar && item.ar.length>1">
                                <router-link :to="{name: 'Artist', params: {id: items.id}}" v-for="items in item.ar" :key="items.name">{{items.name}}</router-link>
                            </div>
                        </span>
                        <span>
                            <div @click="add(item.id)" class="add_play_list">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="glyph-add" aria-hidden="true"><path d="M15.169 21.24v-4.423h-4.387a.824.824 0 01-.818-.813c0-.448.379-.821.818-.821h4.387V10.76c0-.44.38-.796.827-.796.447 0 .827.356.827.796v4.423h4.395c.447 0 .818.373.818.821a.82.82 0 01-.818.813h-4.395v4.423c0 .431-.38.796-.827.796-.447 0-.827-.365-.827-.796z"></path></svg>
                            </div>
                            {{item.dt | Duration}}
                        </span>
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
        <div class="search_title" v-show="mvs && mvs.length>0">
            <h2>音乐视频</h2>
        </div>
        <div class="flex_layout" v-show="mvs && mvs.length>0">
            <div class="albums mv" v-for="item in mvs" :key="item.names">
                <router-link :to="{name: 'MV', params: {id: item.id}}">
                    <img class="album_cover" v-lazy="item.imgurl16v9 + '?param=159y90'" :alt="item.name" :title="item.name">
                </router-link>
                <div class="info">
                    <router-link :to="{name: 'MV', params: {id: item.id}}">{{item.name}}</router-link>
                    <router-link :to="{name: 'Artist', params: {id: item.artist.id}}">{{item.artistName}}</router-link>
                </div>
            </div>
        </div>
        <div class="search_title">
            <h2>更多{{artistsname}}的作品</h2>
        </div>
        <div class="flex_layout">
            <div class="albums" v-for="item in hotAlbums" :key="item.names">
                <router-link :to="{name: 'Album', params: {id: item.id}}">
                    <img class="album_cover" v-lazy="item.picUrl + '?param=150y150'" :alt="item.name" :title="item.name">
                </router-link>
                <div class="info">
                    <router-link :to="{name: 'Album', params: {id: item.id}}">{{item.name}}</router-link>
                    <router-link :to="{name: 'Artist', params: {id: item.artist.id}}">{{item.artists[0].name}}</router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import album from './musicjs/album'
export default album
</script>
<style>
    .add_play_list{
        width: 32px;
        height: 100%;
        display: inline-flex;
        align-items: center;
        cursor: pointer;
        position: absolute;
        left: 0;
    }
    .add_play_list svg{
        width: 32px;
        height: 32px;
        fill: #fa233b;
    }
    #name_artist a{
        font-size: 12px;
        color: rgba(60,60,67,.6);
    }
    #name_artist{
        display: flex;
    }
    .name_artist{
        display: grid;
        align-content: center;
    }
    .name_artist div:nth-of-type(1){
        -webkit-line-clamp: 1;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        white-space: normal;
        overflow: hidden;
    }
    .name_artist div{
        line-height: 24.5px;
    }
    #album{
        margin: 40px 0px;
        display: flex;
        grid-auto-flow: column;
    }
    #album .search_title{
        padding-left: 0px;
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
        display: flex;
        position: relative;
        justify-content: flex-end;
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
    .album_song_list:focus #name_artist a{
        color: #fff;
    }
    .album_song_list:focus + .album_song_list span{
        box-shadow: none;
    }
    .album_song_list:focus span:nth-of-type(1) svg{
        fill: #fff;
    }
    .album_song_list:focus span:nth-of-type(3) svg{
        fill: #fff;
    }
    .album_song_list:focus span:nth-of-type(3){
        color: #DD1F34;
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
            margin-bottom: 40px;
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