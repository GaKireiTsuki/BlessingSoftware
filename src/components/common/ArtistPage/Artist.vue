<template>
    <div class="artist" v-wechat-title="'BS Music - ' + this.name">
        <div class="artist_info">
            <img v-lazy="img1v1Url + '?param=190y190'" :key="img1v1Url + '?param=190y190'" :alt="name" :title="name">
            <h1>{{name}}</h1>
        </div>
        <div class="search_title">
            <h2>歌曲排行</h2>
        </div>
        <div class="helf_layout">
            <div class="new_song" v-for="(item, index) in hotSongs" :key="index">
                <div class="play_music">
                    <img v-lazy="item.al.picUrl + '?param=50y50'" :key="item.al.picUrl + '?param=50y50'" :alt="item.name" :title="item.name">
                    <svg @click="playSong(item.id)" id="play_button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 27"><path d="M11.3545232,18.4180929 L18.4676039,14.242665 C19.0452323,13.9290954 19.0122249,13.1204156 18.4676039,12.806846 L11.3545232,8.63141809 C10.7603912,8.26833741 9.98471883,8.54889976 9.98471883,9.19254279 L9.98471883,17.8404645 C9.98471883,18.5006112 10.7108802,18.7976773 11.3545232,18.4180929 Z"></path></svg>
                </div>
                <div class="info">
                    <router-link to="">{{item.name}}</router-link>
                    <span>
                        <router-link :to="{name: 'Artist', params: {id: item.id}}" v-for="(item, index) in item.ar" :key="index">{{item.name}}</router-link>
                    </span>
                </div>
                <div @click="addSong(item)" class="add_play_list">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="glyph-add" aria-hidden="true"><path d="M15.169 21.24v-4.423h-4.387a.824.824 0 01-.818-.813c0-.448.379-.821.818-.821h4.387V10.76c0-.44.38-.796.827-.796.447 0 .827.356.827.796v4.423h4.395c.447 0 .818.373.818.821a.82.82 0 01-.818.813h-4.395v4.423c0 .431-.38.796-.827.796-.447 0-.827-.365-.827-.796z"></path></svg>
                </div>
            </div>
        </div>
        <div class="search_title">
            <h2>专辑</h2>
        </div>
        <div class="flex_layout">
            <div class="albums" v-for="(item, index) in hotAlbums" :key="index">
                <router-link :to="{name: 'Album', params: {id: item.id}}">
                    <img class="album_cover" v-lazy="item.picUrl + '?param=150y150'" :key="item.picUrl + '?param=150y150'" :alt="item.name" :title="item.name">
                </router-link>
                <div class="info">
                    <router-link :to="{name: 'Album', params: {id: item.id}}">{{item.name}}</router-link>
                    <router-link :to="{name: 'Artist', params: {id: item.artist.id}}">{{item.artists[0].name}}</router-link>
                </div>
            </div>
        </div>
        <div class="search_title" v-show="mvs && mvs.length>0">
            <h2>热门视频排行</h2>
        </div>
        <div class="flex_layout" v-show="mvs && mvs.length>0">
            <div class="albums mv" v-for="(item, index) in mvs" :key="index">
                <router-link :to="{name: 'MV', params: {id: item.id}}">
                    <img class="album_cover" v-lazy="item.imgurl16v9 + '?param=159y90'" :key="item.imgurl16v9 + '?param=159y90'" :alt="item.name" :title="item.name">
                </router-link>
                <div class="info">
                    <router-link :to="{name: 'MV', params: {id: item.id}}">{{item.name}}</router-link>
                    <router-link :to="{name: 'Artist', params: {id: item.artist.id}}">{{item.artistName}}</router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import './artist.css'
import artis from './artist'
export default artis
</script>