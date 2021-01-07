<template>
    <div class="album">
        <div id="album">
            <div class="cover" @click="song()">
                <img v-lazy="picUrl + '?param=1000y1000'" :alt="name" :title="name">
            </div>
            <div class="album_content">
                <h1>{{name}}</h1>
                <router-link :to="{name: 'Artist', params: {id: item.id}}" v-for="item in artistname" :key="item.name">{{item.name}}</router-link>
                <div id="album_song_list">
                    <div class="album_song_list" v-for="item in songs" :key="item.name">
                        <span @click="play(item.id)">{{item.no}}</span>
                        <span>{{item.name}}</span>
                    </div>
                </div>
                <div class="album_info">
                    <span>{{size}}&nbsp;首歌曲</span>
                    <span></span>
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
        border-bottom: .5px solid #00000026;
    }
    .album_song_list{
        display: flex;
        align-items: center;
        height: 55px;
        font-size: 14px;
        border-top: .5px solid #00000026;
    }
    .album_song_list:hover{
        background: #FBFBFB;
    }
    .album_song_list span:nth-of-type(1){
        display: grid;
        place-content: center;
        height: 55px;
        width: 26px;
    }
    .album_info{
        padding-top: 20px;
    }
    .album_info span{
        display: block;
        font-size: 12px;
        color: #3c3c434d;
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