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
            banners: [],
            url: '',
            img: ''
        }
    },
    methods: {
        search () {
            this.$router.push({name: 'Search', params: {keywords: this.keywords}})
        },
        play (id) {
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
    async created () {
        var that = this;
        axios.all([
            this.$api.music.newsong(this.ssize), 
            this.$api.music.newalbum(this.area, this.asize), 
            this.$api.music.banner()
        ])
        .then(axios.spread((res1, res2, res3)=>{
            that.result = res1.result;
            that.albums = res2.albums
            that.banners = res3.banners
        }))
    }
}
$(function () {
    $(".music input[type=search]").on("click", function () {
        $("body, html").animate({ scrollTop: 0 }, 300, "linear");
    });
    $(".category input[type=radio]").on("click", function () {
        $(".flex_layout").animate({ scrollLeft: 0 }, 300, "linear");
    });
    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 50) {
            $(".music input[type=search]").css({top: "0px"});
        } else {
            $(".music input[type=search]").removeAttr("style");
        }
    });
});