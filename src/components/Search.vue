<template>
    <div class="search">
        <div class="search_title">
            <h2>艺人</h2>
        </div>
        <div id="search_artists">
            <div class="search_artists" v-for="item in artists" :key="item.name">
                <router-link :to="{name: 'Artist', params: {id: item.id}}"><img :src="item.img1v1Url + '?param=120y120'" :alt="item.name" :title="item.name"></router-link>
                <router-link :to="{name: 'Artist', params: {id: item.id}}">{{item.name}}</router-link>
            </div>
        </div>
        <div class="search_title">
            <h2>专辑</h2><router-link to="">查看全部</router-link>
        </div>
        <div class="albums_grid">
            <div class="albums" v-for="item in albums" :key="item.names">
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
import search from '../axios/search'
export default search
</script>
<style>
    *{
        font-family: "SF Pro Text","PingFang SC",Arial,sans-serif;
    }
    .search{
        padding-top: 32px;
    }
    .search_title{
        line-height: 1.22226;
        letter-spacing: .005em;
        border-top: .5px solid #D9D9D9;
        padding: 13px 0px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .search_title h2{
        font-size: 18px;
        color: #000000f2;
    }
    .search_title a{
        font-size: 15px;
        color: #fa233b;
    }
    .search_title a:hover{
        text-decoration: underline;
    }
    .search_artists a:hover{
        text-decoration: underline;
    }
    .search_artists a{
        width: 100%;
        text-align: center;
    }
    #search_artists{
        display: flex;
        column-gap: 20px;
        padding: 15px 0px;
        box-sizing: border-box;
    }
    .search_artists{
        display: grid;
        justify-items: center;
        font-size: 12px;
        row-gap: 4px;
        grid-template-rows: 120px 46px;
    }
    .search_artists img{
        border-radius: 120px;
    }
    .search_artists img:hover{
        filter: brightness(80%);
        transition: 0.1s ease-in;
    }
</style>