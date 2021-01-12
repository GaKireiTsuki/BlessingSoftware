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
            var that = this;
            this.$serve.postPlayIf(id).then(res => {
                console.log(res)
            }).catch(err => {
                console.log(err)
            })
            this.$serve.postPlay(id).then(res => {
                that.url = res.data[0].url;
            }).catch(err => {
                console.log(err)
            })
            this.$serve.postInfo(id).then(res => {
                that.img = res.songs[0].al.picUrl;
            }).catch(err => {
                console.log(err)
            })
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
        }).catch(err => {
            console.log(err)
        })
        this.$serve.postSearchAlbum(this.$route.params.keywords).then(res => {
            that.albums = res.result.albums;
        }).catch(err => {
            console.log(err)
        })
        this.$serve.postSearchSong(this.$route.params.keywords).then(res => {
            that.songs = res.result.songs;
        }).catch(err => {
            console.log(err)
        })
        this.$serve.postSearchMV(this.$route.params.keywords).then(res => {
            that.mvs = res.result.mvs;
        }).catch(err => {
            console.log(err)
        })
    },
}