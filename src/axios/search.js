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
        search: function () {
            var that = this;
            axios.all([
                this.$serve.postSearchArtist(this.keywords), 
                this.$serve.postSearchAlbum(this.keywords), 
                this.$serve.postSearchSong(this.keywords), 
                this.$serve.postSearchMV(this.keywords)
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
            this.search()
        }
    }
}