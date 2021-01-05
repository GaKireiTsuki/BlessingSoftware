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
    $("#new_song_helf .open").click(function () { 
        if ($(".new_song_helf").hasClass("e")) {
            $(".new_song_helf").animate({ scrollTop: 0 }, 400, "linear");
            $(".new_song_helf").css({height: "199.96", "margin-bottom": "25px", "overflow-y": "hidden"}).removeClass("e");
            $("#new_song_helf .open span:nth-of-type(1)").css({transform: "rotate(45deg)"}).removeClass("e");
            $("#new_song_helf .open span:nth-of-type(2)").css({transform: "rotate(-45deg)"}).removeClass("e");
        } else {
            if ($(window).width() < 484) {
                $(".new_song_helf").css({height: "447.92px", "margin-bottom": "0px", "overflow-y": "auto"}).addClass("e");
            } else {
                $(".new_song_helf").css({height: "447.92px", "margin-bottom": "0px", "overflow-y": "hidden"}).addClass("e");
            }
            $("#new_song_helf .open span:nth-of-type(1)").css({transform: "rotate(-45deg)"}).addClass("e");
            $("#new_song_helf .open span:nth-of-type(2)").css({transform: "rotate(45deg)"}).addClass("e");
        }
    });
    $("#new_album_helf .open").click(function () { 
        if ($(".new_album_helf").hasClass("e")) {
            $(".new_album_helf").animate({ scrollTop: 0 }, 400, "linear");
            if ($(window).width() < 484) {
                $(".new_album_helf").css({height: "427.5px", "margin-bottom": "0px", "overflow-y": "auto"}).removeClass("e");
            } else {
                $(".new_album_helf").css({height: "412.66px", "margin-bottom": "25px", "overflow-y": "hidden"}).removeClass("e");
            }
            $("#new_album_helf .open span:nth-of-type(1)").css({transform: "rotate(45deg)"}).removeClass("e");
            $("#new_album_helf .open span:nth-of-type(2)").css({transform: "rotate(-45deg)"}).removeClass("e");
        } else {
            if ($(window).width() < 484) {
                $(".new_album_helf").css({height: "1216.5px", "margin-bottom": "0px", "overflow-y": "auto"}).addClass("e");
            } else {
                $(".new_album_helf").css({height: "845.99px", "margin-bottom": "0px", "overflow-y": "hidden"}).addClass("e");
            }
            $("#new_album_helf .open span:nth-of-type(1)").css({transform: "rotate(-45deg)"}).addClass("e");
            $("#new_album_helf .open span:nth-of-type(2)").css({transform: "rotate(45deg)"}).addClass("e");
        }
    });
});