import $ from 'jquery'
export default {
    name: 'music',
    data() {
        return {
            keywords: '',
            SearchData: [],
            postNewSong: [],
            postNewAlbum: [],
            url: '',
            img: ''
        }
    },
    methods: {
        search: function () {
            this.$router.push({name: 'Search', params: {keywords: this.keywords}})
        },
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
    created () {
        var that = this;
        this.$serve.postNewSong().then(res => {
            that.postNewSong = res.result;
        }).catch(err => {
            console.log(err)
        })
        this.$serve.postNewAlbum().then(res => {
            that.postNewAlbum = res.albums
        }).catch(err => {
            console.log(err)
        })
    }
}
$(document).ready(function () {
    $(".music input[type=search]").click(function () {
        $("body, html").animate({ scrollTop: 0 }, 300, "linear");
    });
});