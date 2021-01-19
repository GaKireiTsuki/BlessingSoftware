import $ from 'jquery'
import axios from 'axios'
export default {
    name: 'music',
    data() {
        return {
            ssize: 32,
            area: 'ALL',
            category: [
                {text: 'ALL', value: 'ALL'},
                {text: 'C-POP', value: 'ZH'},
                {text: 'J-POP', value: 'JP'},
                {text: 'EA-POP', value: 'EA'},
                {text: 'K-POP', value: 'KR'}
            ],
            asize: 24,
            keywords: '',
            result: [],
            albums: [],
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
        },
        area () {
            var that = this;
            this.$api.music.newalbum(this.area, this.asize).then((res)=>{
                that.albums = res.albums;
            })
        }
    },
    created () {
        var that = this;
        axios.all([this.$api.music.newsong(this.ssize), this.$api.music.newalbum(this.area, this.asize)])
        .then(axios.spread((res1, res2)=>{
            that.result = res1.result;
            that.albums = res2.albums
        }))
    }
}
$(function () {
    $(".music input[type=search]").on("click", function () {
        $("body, html").animate({ scrollTop: 0 }, 300, "linear");
    });
});