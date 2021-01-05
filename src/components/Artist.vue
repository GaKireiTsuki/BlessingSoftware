<template>
    <div class="artist">
        <div class="artist_info">
            <img v-lazy="img1v1Url + '?param=190y190'" :alt="name" :title="name">
            <h1>{{name}}</h1>
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
            postArtistSong: [],
            postArtistAlbum: [],
            postArtistMV: [],
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
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
        this.$serve.postArtistAlbum(this.$route.params.id).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
        this.$serve.postArtistMV(this.$route.params.id).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
    },
}
</script>
<style>
    *{
        font-family: "SF Pro Display","PingFang SC",Arial,sans-serif;
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
</style>