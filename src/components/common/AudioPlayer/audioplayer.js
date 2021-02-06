import $ from "jquery";
import axios from "axios";
import { mapActions, mapState, mapMutations } from "vuex";
export default {
    name: "audioplayer",
    data() {
        return {
            url: '',
            img: '',
            artistName: '',
            songName: '',
            albumName: ''
        };
    },
    methods: {
        ...mapActions(['prevSong', 'nextSong']),
        ...mapMutations([
            'PLAY_HISTORY',
            'SEND_LYRIC'
        ])
    },
    computed: {
        ...mapState(['songID'])
    },
    watch: {
        songID(songID) {
            var that = this;
            this.$api.music.playmusic(songID).then((res) => {
                if (res.data[0].url === null) {

                    this.$message({
                        content: "No Copyright",
                        time: 60000,
                        type: "error",
                        hasClose: true,
                    });
                }
                if (res.data[0].fee === 1) {
                    console.log("试听");
                }
                if (res.data[0].url !== null) {
                    that.url = res.data[0].url

                    axios.all([
                        this.$api.music.musicinfo(songID),
                        this.$api.music.musiclyric(songID)
                    ])
                        .then(axios.spread((res1, res2) => {
                            that.img = res1.songs[0].al.picUrl
                            this.$store.commit('PLAY_HISTORY', {
                                id: res1.songs[0].id,
                                songs: res1.songs[0]
                            })
                            that.songName = res1.songs[0].name
                            that.artistName = res1.songs[0].ar[0].name
                            that.albumName = res1.songs[0].al.name
                            switch (res2.nolyric) {
                                case true:
                                    this.$store.commit('SEND_LYRIC', '')
                                    break;
                                default:
                                    this.$store.commit('SEND_LYRIC', res2.lrc.lyric)
                                    break;
                            }
                        }))
                    setTimeout(() => {
                        $("audio").trigger("play");
                    }, 400)
                }
            });
        }
    }
}
$(function () {
    var playlist = $(".play_list")
    var openlist = $(".open_list")
    var lyric = $(".lyric")
    var openlyric = $(".open_lyric")
    var audioplayer = $(".audioplayer")
    var song_info = $(".song_info")
    var controls = $(".controls")
    var controls_container = $(".controls_container")
    var button_song = $("button[class $= '_song']")
    openlyric.on("click", function (e) {
        e.stopPropagation()
        if (lyric.is(":hidden")) {
            lyric.show()
            openlyric.css({ background: '#6c6c6c', color: '#fff' })
            if (playlist.is(":visible")) {
                openlist.click()
            }
        } else {
            lyric.hide()
            openlyric.removeAttr('style')
        }
    });
    openlist.on("click", function (e) {
        e.stopPropagation()
        if (playlist.is(":hidden")) {
            playlist.show()
            openlist.css({ background: '#6c6c6c', })
            openlist.children('svg').css({ fill: '#fff' })
            if (lyric.is(":visible")) {
                openlyric.click()
            }
        } else {
            playlist.hide()
            openlist.removeAttr('style')
            openlist.children('svg').removeAttr('style')
        }
    });
    audioplayer.on("click", function () {
        if ($(window).width() < 484) {
            if (controls.is(':hidden')) {
                controls.css({ position: 'relative', top: '21px' }).show()
                controls_container.css({ display: 'flex', position: 'relative', top: '26px' })
                audioplayer.css({ height: '118px' })
                song_info.css({ position: 'absolute', top: '-1px', padding: '0' })
            } else {
                if (lyric.is(":visible")) {
                    openlyric.click()
                } if (playlist.is(":visible")) {
                    openlist.click()
                }
                audioplayer.removeAttr("style")
                setTimeout(() => {
                    song_info.removeAttr("style")
                }, 400)
                setTimeout(() => {
                    controls.hide().removeAttr("style")
                    controls_container.hide().removeAttr("style")
                }, 300)
            }
        }
    })
    $(window).on("resize", function () {
        if ($(window).width() <= 484) {
            if (lyric.is(":visible")) {
                openlyric.click()
            } if (playlist.is(":visible")) {
                openlist.click()
            }
            if (controls.is(':visible')) {
                audioplayer.removeAttr("style")
                setTimeout(() => {
                    song_info.removeAttr("style")
                }, 400)
                setTimeout(() => {
                    controls.hide().removeAttr("style")
                    controls_container.hide().removeAttr("style")
                }, 300)
            }
        }
    })
    button_song.on("click", function (e) {
        e.stopPropagation()
    })
})