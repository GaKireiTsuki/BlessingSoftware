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
        var that = this;
        this.$serve.postSearchArtist(this.$route.params.keywords).then(res => {
            that.artists = res.result.artists;
        })
        this.$serve.postSearchAlbum(this.$route.params.keywords).then(res => {
            that.albums = res.result.albums;
        })
        this.$serve.postSearchSong(this.$route.params.keywords).then(res => {
            that.songs = res.result.songs;
        })
        this.$serve.postSearchMV(this.$route.params.keywords).then(res => {
            that.mvs = res.result.mvs;
        })
    },
}