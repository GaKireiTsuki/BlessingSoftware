import $ from 'jquery'
import axios from 'axios'
export default {
    name: 'music',
    data() {
        return {
            keywords: '',
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
        axios.all([this.$serve.postNewSong(), this.$serve.postNewAlbum()])
        .then(axios.spread((res1, res2)=>{
            that.postNewSong = res1.result;
            that.postNewAlbum = res2.albums
        }))
    }
}
$(function () {
    $(".music input[type=search]").on("click", function () {
        $("body, html").animate({ scrollTop: 0 }, 300, "linear");
    });
});