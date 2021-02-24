import axios from 'axios'
import { mapActions, mapState } from 'vuex'
import flexLayoutMV from '@/components/public/flexLayout/flexLayoutMV'
import flexLayout from '@/components/public/flexLayout/flexLayout'
export default {
    name: 'Album',
    data() {
        return {
            album: '',
            songs: [],
            hotAlbums: [],
            artistsname: '',
            mvs: []
        }
    },
    components: {flexLayoutMV, flexLayout},
    computed: {
        ...mapState(["songID", "playIng"]),
    },
    methods: {
        ...mapActions(['playSong', 'addSong', 'playAlbum', 'playPause']),
        // 播放
        ControlPlay () {
            this.playPause(true)
        },
        // 暂停
        ControlPause () {
            this.playPause(false)
        },
        getalbum () {
            this.$api.music.albuminfo(this.id).then(res => {
                this.album = res.album
                this.songs = res.songs;
                this.artistid = res.album.artist.id
                axios.all([this.$api.music.artistalbum(this.artistid), this.$api.music.artistmv(this.artistid)])
                .then(axios.spread((res1, res2)=>{
                    this.hotAlbums = res1.hotAlbums;
                    this.artistsname = res1.artist.name;
                    this.mvs = res2.mvs;
                }))
            })
        }
    },
    beforeRouteUpdate (to, from, next) {
        if (to.fullPath != from.fullPath) {
            next()
            this.id = this.$route.params.id
            this.getalbum()
        }
    },
    async activated() {
        var id = this.$route.params.id
        if (this.id != id) {
            this.id = id
            this.getalbum()
        }
    }
}