<template>
    <div>
        <video style="width: 100%;" :src="url" controls></video>
        <div class="search_title">
            <h2>更多{{artistName}}的作品</h2>
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
    name: 'MV',
    data() {
        return {
            url: '',
            artistId: '',
            mvs: [],
            artistName: '',
        }
    },
    methods: {
        playmv() {
            var that = this;
            this.$serve.postPlayMV(this.$route.params.id).then(res => {
                that.url = res.data.url;
            })
            this.$serve.postInfoMV(this.$route.params.id).then(res => {
                console.log(res)
                that.artistId = res.data.artistId;
                that.artistName = res.data.artistName;
                this.$serve.postArtistMV(this.artistId).then(res => {
                    that.mvs = res.mvs;
                })
            })
        }
    },
    watch: {
        $route(to, from) {
            this.playmv()
        }
    },
    activated() {
        var that = this;
        this.$serve.postPlayMV(this.$route.params.id).then(res => {
            that.url = res.data.url;
        })
        this.$serve.postInfoMV(this.$route.params.id).then(res => {
            console.log(res)
            that.artistId = res.data.artistId;
            that.artistName = res.data.artistName;
            this.$serve.postArtistMV(this.artistId).then(res => {
                that.mvs = res.mvs;
            })
        })
    }
}
</script>