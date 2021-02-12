import axios from 'axios'
import flexLayoutMV from '@/components/public/flexLayout/flexLayoutMV'
import flexLayout from '@/components/public/flexLayout/flexLayout'
import helfLayout from '@/components/public/helfLayout/helfLayout'
export default {
    name: 'Artist',
    data() {
        return {
            img1v1Url: '',
            name: '',
            hotSongs: [],
            hotAlbums: [],
            mvs: []
        }
    },
    components: {flexLayoutMV, flexLayout, helfLayout},
    methods: {
        artist() {
            var that = this;
            axios.all([
                this.$api.music.artistsong(this.id),
                this.$api.music.artistalbum(this.id),
                this.$api.music.artistmv(this.id),
            ])
                .then(axios.spread((res1, res2, res3) => {
                    that.img1v1Url = res1.artist.img1v1Url;
                    that.name = res1.artist.name;
                    that.hotSongs = res1.hotSongs;
                    that.hotAlbums = res2.hotAlbums;
                    that.mvs = res3.mvs;
                }))
        }
    },
    beforeRouteUpdate(to, from, next) {
        if (to.fullPath != from.fullPath) {
            next()
            this.id = this.$route.params.id
            this.artist()
        }
    },
    async activated() {
        var id = this.$route.params.id
        if (this.id != id) {
            this.id = id
            this.artist()
        }
    }
}