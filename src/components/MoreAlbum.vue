<template>
    <div class="more-album">
        <div class="grid_layout">
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
export default {
    name: 'MoreAlbum',
    data() {
        return {
            albums: []
        }
    },
    activated() {
        var that = this;
        this.$serve.postSearchAlbum(this.$route.params.keywords).then(res => {
            that.albums = res.result.albums;
        }).catch(err => {
            console.log(err)
        })
    },
}
</script>
<style>
    .more-album{
        margin-top: 25px;
    }
</style>