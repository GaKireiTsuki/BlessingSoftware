<template>
    <div class="artist" v-wechat-title="'BS Music - ' + this.name">
        <div class="artist_info">
            <img v-lazy="img1v1Url + '?param=190y190'" :key="img1v1Url + '?param=190y190'" :alt="name" :title="name">
            <h1>{{name}}</h1>
        </div>
        <div class="search_title">
            <h2>歌曲排行</h2>
        </div>
        <helfLayout ref="helfLayout" :songs="hotSongs"></helfLayout>
        <div class="search_title" v-show="hotAlbums && hotAlbums.length>0">
            <h2>专辑</h2>
        </div>
        <flexLayout ref="flexLayout" :albums="hotAlbums" v-show="hotAlbums && hotAlbums.length>0"></flexLayout>
        <div class="search_title" v-show="mvs && mvs.length>0">
            <h2>热门视频排行</h2>
        </div>
        <flexLayoutMV ref="flexLayoutMV" :mvs="mvs" v-show="mvs && mvs.length>0"></flexLayoutMV>
    </div>
</template>
<script>
import './artist.css'
import artis from './artist'
export default artis
</script>