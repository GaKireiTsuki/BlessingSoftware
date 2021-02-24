import $ from "jquery";
import axios from "axios";
import { mapActions, mapState, mapMutations } from "vuex";
var CreateAudio = new Audio()
CreateAudio.src = true
export default {
    name: "audioplayer",
    data() {
        return {
            url: '',
            img: '',
            artistName: '',
            songName: '',
            albumName: '',
            volume: '50'
        };
    },
    methods: {
        ...mapActions(['prevSong', 'nextSong', 'playPause', 'playSong']),
        ...mapMutations([
            'PLAY_HISTORY',
            'PLAY_LIST',
            'SEND_LYRIC',
            'SEND_SONGS_ID'
        ]),
        // 调整音量大小
        ControlVolume () {
            CreateAudio.volume = this.volume / 100
        },
        // 播放
        ControlPlay () {
            this.playPause(true)
        },
        // 暂停
        ControlPause () {
            this.playPause(false)
        },
        playIngs() {
            if (this.playIng == true) {
                CreateAudio.play()
            }
            if (this.playIng == false) {
                CreateAudio.pause()
            }
        },
        volumes() {
            var volume = document.querySelector("#volume")
            volume.style.setProperty("--volume", this.volume + '%')
            this.ControlVolume()
        }
    },
    mounted() {
        CreateAudio.oncanplay = () => {
            this.playPause(true)
            this.playIngs()
        }
        CreateAudio.onended = () => {
            this.playPause(false)
            this.$store.commit('SEND_SONGS_ID', '1')
        }
        CreateAudio.onplay = () => {
            this.playPause(true)
        }
        CreateAudio.onpause = () => {
            this.playPause(false)
        }
        this.volumes()
    },
    computed: {
        ...mapState(['songID', 'playList', 'playIng'])
    },
    watch: {
        playIng() {
            if (this.playIng == true) {
                CreateAudio.play()
                .catch((err) => {
                    err
                });
                if (this.songID == '1') {
                    this.$store.commit('SEND_SONGS_ID', this.songName.id)
                }
            }
            if (this.playIng == false) {
                CreateAudio.pause()
                if (this.songID != '1') {
                    this.$store.commit('SEND_SONGS_ID', '1')
                }
            }
        },
        volume() {
            this.volumes()
        },
        url() {
            CreateAudio.src = this.url
        },
        songID(songID) {
            var that = this;
            if (songID != 1) {
                this.$api.music.playmusic(songID).then((res) => {
                if (res.data[0].url === null) {

                    this.$message({
                        content: "No Copyright",
                        time: 60000,
                        type: "error",
                        hasClose: true,
                    });
                    this.playPause(false)
                    this.$store.commit('SEND_SONGS_ID', '1')
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
                            this.$store.commit('PLAY_HISTORY', res1.songs[0])
                            this.$store.dispatch('addSong', res1.songs[0])
                            that.songName = res1.songs[0]
                            that.artistName = res1.songs[0].ar[0]
                            that.albumName = res1.songs[0].al
                            if (res2.lrc == null) {
                                this.$store.commit('SEND_LYRIC', '')
                            } else {
                                this.$store.commit('SEND_LYRIC', res2.lrc.lyric)
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
    var button_song = $("button[class *= '_song']")
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
                song_info.removeAttr("style")
                controls.hide().removeAttr("style")
                controls_container.hide().removeAttr("style")
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
                song_info.removeAttr("style")
                controls.hide().removeAttr("style")
                controls_container.hide().removeAttr("style")
            }
        }
    })
    button_song.on("click", function (e) {
        e.stopPropagation()
    })
})