import axios from 'axios'
import { mapActions } from 'vuex'
export default {
    name: 'Search',
    data() {
        return {
            query: this.$route.params.keywords,
            artists: [],
            albums: [],
            songs: [],
            mvs: [],
            asize: 12,
            ssize: 24,
            msize: 12
        }
    },
    methods: {
        ...mapActions(['play']),
        searchs () {
            var that = this;
            axios.all([
                this.$api.music.searchartist(this.keywords), 
                this.$api.music.searchalbum(this.keywords, this.asize), 
                this.$api.music.searchsong(this.keywords, this.ssize), 
                this.$api.music.searchmv(this.keywords, this.msize)
            ])
            .then(axios.spread((res1, res2, res3, res4)=>{
                that.artists = res1.result.artists;
                that.albums = res2.result.albums;
                that.songs = res3.result.songs;
                that.mvs = res4.result.mvs;
            }))
        }
    },
    async activated() {
        var keywords = this.$route.params.keywords
        if (this.keywords != keywords) {
            this.keywords = keywords
            this.query = keywords
            this.searchs()
        }
    }
}