import axios from 'axios'
import flexLayout from '@/components/public/flexLayout/flexLayout'
import flexLayoutMV from '@/components/public/flexLayout/flexLayoutMV'
import helfLayout from '@/components/public/helfLayout/helfLayout'
export default {
    name: 'Search',
    components: {flexLayout, helfLayout, flexLayoutMV},
    data() {
        return {
            terms: this.$route.query.term,
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
        searchs () {
            var that = this;
            axios.all([
                this.$api.music.searchartist(this.term), 
                this.$api.music.searchalbum(this.term, this.asize), 
                this.$api.music.searchsong(this.term, this.ssize), 
                this.$api.music.searchmv(this.term, this.msize)
            ])
            .then(axios.spread((res1, res2, res3, res4)=>{
                that.artists = res1.result.artists;
                that.albums = res2.result.albums;
                that.songs = res3.result.songs;
                that.mvs = res4.result.mvs;
            }))
        }
    },
    beforeRouteUpdate (to, from, next) {
        if (to.fullPath != from.fullPath) {
            next()
            this.term = this.$route.query.term
            this.terms = this.$route.query.term
            this.searchs()
        }
    },
    async activated() {
        var term = this.$route.query.term
        if (this.term != term) {
            this.term = term
            this.searchs()
        }
    }
}