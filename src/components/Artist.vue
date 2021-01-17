<template>
    <div class="artist">
        <div class="artist_info">
            <img v-lazy="img1v1Url + '?param=190y190'" :alt="name" :title="name">
            <h1>{{name}}</h1>
        </div>
        <div class="search_title">
            <h2>歌曲排行</h2>
        </div>
        <div class="helf_layout">
            <div class="new_song" v-for="item in hotSongs" :key="item.names">
                <div class="play_music">
                    <img v-lazy="item.al.picUrl + '?param=50y50'" :alt="item.name" :title="item.name">
                    <svg @click="play(item.id)" class="play_button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 27"><path d="M11.3545232,18.4180929 L18.4676039,14.242665 C19.0452323,13.9290954 19.0122249,13.1204156 18.4676039,12.806846 L11.3545232,8.63141809 C10.7603912,8.26833741 9.98471883,8.54889976 9.98471883,9.19254279 L9.98471883,17.8404645 C9.98471883,18.5006112 10.7108802,18.7976773 11.3545232,18.4180929 Z"></path></svg>
                </div>
                <div class="info">
                    <router-link to="">{{item.name}}</router-link>
                    <router-link :to="{name: 'Artist', params: {id: item.ar[0].id}}">{{item.ar[0].name}}</router-link>
                </div>
            </div>
        </div>
        <div class="search_title">
            <h2>专辑</h2>
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
        <div class="search_title">
            <h2>热门视频排行</h2>
        </div>
        <div class="flex_layout">
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
    </div>
</template>
<script>
export default {
    name: 'Artist',
    data() {
        return {
            img1v1Url: '',
            name: '',
            postArtist: [],
            hotSongs: [],
            hotAlbums: [],
            mvs: [],
            url: '',
            img: '',
        }
    },
    methods: {
        play: function (id) {
            this.player(id);
        }
    },
    watch: {
        url () {
            return this.$store.dispatch('play', this.url)
        },
        img () {
            return this.$store.dispatch('show', this.img)
        }
    },
    activated() {
        var that = this;
        this.$serve.postArtist(this.$route.params.id).then(res => {
            that.img1v1Url = res.artist.img1v1Url;
            that.name = res.artist.name;
        }).catch(err => {
            console.log(err)
        })
        this.$serve.postArtistSong(this.$route.params.id).then(res => {
            that.hotSongs = res.hotSongs;
        }).catch(err => {
            console.log(err)
        })
        this.$serve.postArtistAlbum(this.$route.params.id).then(res => {
            that.hotAlbums = res.hotAlbums;
        }).catch(err => {
            console.log(err)
        })
        this.$serve.postArtistMV(this.$route.params.id).then(res => {
            that.mvs = res.mvs;
        }).catch(err => {
            console.log(err)
        })
    },
}
</script>
<style>
    .artist{
        padding: 0px;
    }
    .artist .helf_layout{
        grid-template-rows: repeat(3,1fr);
        gap: 0px 20px;
    }
    .artist_info{
        position: relative;
        padding-top: 80px;
        box-sizing: border-box;
        height: 386px;
        background: linear-gradient(180deg,#fff,#f3f3f3)
    }
    .artist_info img{
        width: 190px;
        border-radius: 190px;
        box-shadow: 0 10px 25px rgba(0,0,0,.1);
        display: block;
        margin: auto;
    }
    .artist_info h1{
        position: absolute;
        bottom: 0;
        padding: 0 40px 22px;
        line-height: 39px;
        width: -webkit-fill-available;
    }
    @media screen and (max-width: 980px) {
        .artist div[class $= '_layout'], div[class $= '_title']{
            padding-left: 20px;
        }
    }
</style>