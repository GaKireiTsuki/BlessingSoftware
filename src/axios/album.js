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
            url: '',
            img: '',
        }
    },
    methods: {
        play: function (id) {
            this.player(id);
        },
        song: function () {
            this.$store.dispatch('add', this.songs)
        }
    },
    watch: {
        url () {
            return this.$store.dispatch('play', this.url)
        },
        img () {
            return this.$store.dispatch('show', this.img)
        },
    },
    activated() {
        var that = this;
        this.$serve.postAlbum(this.$route.params.id).then(res => {
            that.subType = res.album.subType;
            that.publishTime = res.album.publishTime;
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