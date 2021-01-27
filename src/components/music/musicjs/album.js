import axios from 'axios'
import { mapActions } from 'vuex'
export default {
    name: 'Album',
    data() {
        return {
            picUrl: '',
            name: '',
            size: '',
            company: '',
            subType: '',
            publishTime: '',
            artistname: [],
            songs: [],
            hotAlbums: [],
            artistsname: '',
            mvs: []
        }
    },
    methods: {
        ...mapActions(['play', 'add']),
        album () {
            var that = this;
            this.$api.music.albuminfo(this.id).then(res => {
                that.subType = res.album.subType;
                that.publishTime = res.album.publishTime;
                that.picUrl = res.album.picUrl;
                that.name = res.album.name;
                that.artistname = res.album.artists;
                that.size = res.album.size;
                that.company = res.album.company;
                that.songs = res.songs;
                that.artistid = res.album.artist.id
                axios.all([this.$api.music.artistalbum(this.artistid), this.$api.music.artistmv(this.artistid)])
                .then(axios.spread((res1, res2)=>{
                    that.hotAlbums = res1.hotAlbums;
                    that.artistsname = res1.artist.name;
                    that.mvs = res2.mvs;
                }))
            })
        }
    },
    beforeRouteUpdate (to, from, next) {
        if (to.fullPath != from.fullPath) {
            next()
            this.id = this.$route.params.id
            this.album()
        }
    },
    async activated() {
        var id = this.$route.params.id
        if (this.id != id) {
            this.id = id
            this.album()
        }
    }
}