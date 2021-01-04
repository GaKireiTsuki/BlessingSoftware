<template>
    <div class="album">
        <div id="album">
            <img v-lazy="picUrl + '?param=200y200'" :alt="name" :title="name">
            <div class="album_content">
                <h1>{{name}}</h1>
                <router-link :to="{name: 'Artist', params: {id: item.id}}" v-for="item in artistname" :key="item.name">{{item.name}}</router-link>
                <div id="album_song_list">
                    <div class="album_song_list" v-for="item in songs" :key="item.name">
                        <span>{{item.no}}</span>
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
export default {
    name: 'Album',
    data() {
        return {
            picUrl: '',
            name: '',
            size: '',
            company: '',
            artistname: [],
            songs: []
        }
    },
    activated() {
        var that = this;
        this.$serve.postAlbum(this.$route.params.id).then(res => {
            console.log(res)
            that.picUrl = res.data.album.picUrl;
            that.name = res.data.album.name;
            that.artistname = res.data.album.artists;
            that.size = res.data.album.size;
            that.company = res.data.album.company;
            that.songs = res.data.songs;
        }).catch(err => {
            console.log(err)
            alert('找不到专辑为 ' + this.$route.params.id + ' 的专辑');
            window.location.href = "/music";
        })
    },
}
</script>
<style>
    #album{
        margin: 40px 0px;
        display: flex;
        grid-auto-flow: column;
        font-family: "SF Pro Text","PingFang SC",Arial,sans-serif;
    }
    #album img{
        position: sticky;
        top: 84px;
        width: 35%;
        height: 35%;
        box-shadow: 0 4px 14px rgba(0,0,0,.1);
        border-radius: 4px;
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
        font-size: 14px;
        color: #3c3c4399;
    }
    @media screen and (max-width: 484px) {
        #album img{
            width: 100%;
            height: 100%;
            position: unset;
        }
        #album{
            display: block;
        }
        .album{
            padding: 0px 24px;
            box-sizing: border-box;
        }
        .album_content{
            margin: 40px 0 0 0;
        }
    }
</style>