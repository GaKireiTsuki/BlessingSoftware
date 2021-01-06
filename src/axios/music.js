const music = {
    data() {
        return {
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
}

export default music