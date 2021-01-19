import axios from 'axios'
export default {
    name: 'Search',
    data() {
        return {
            artists: [],
            albums: [],
            songs: [],
            mvs: [],
            url: '',
            img: '',
        }
    },
    methods: {
        play: function (id) {
            this.player(id);
        },
        searchs: function () {
            var that = this;
            axios.all([
                this.$api.music.searchartist(this.keywords), 
                this.$api.music.searchalbum(this.keywords), 
                this.$api.music.searchsong(this.keywords), 
                this.$api.music.searchmv(this.keywords)
            ])
            .then(axios.spread((res1, res2, res3, res4)=>{
                that.artists = res1.result.artists;
                that.albums = res2.result.albums;
                that.songs = res3.result.songs;
                that.mvs = res4.result.mvs;
            }))
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
        var keywords = this.$route.params.keywords
        if (this.keywords != keywords) {
            this.keywords = keywords
            this.searchs()
        }
    }
}