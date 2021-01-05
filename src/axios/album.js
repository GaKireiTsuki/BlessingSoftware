export default {
    name: 'Album',
    data() {
        return {
            picUrl: '',
            name: '',
            size: '',
            company: '',
            artistname: [],
            songs: [],
            url: '',
            img: ''
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
        this.$serve.postAlbum(this.$route.params.id).then(res => {
            console.log(res)
            that.picUrl = res.album.picUrl;
            that.name = res.album.name;
            that.artistname = res.album.artists;
            that.size = res.album.size;
            that.company = res.album.company;
            that.songs = res.songs;
        }).catch(err => {
            console.log(err)
            alert('找不到专辑为 ' + this.$route.params.id + ' 的专辑');
            window.location.href = "/music";
        })
    },
}