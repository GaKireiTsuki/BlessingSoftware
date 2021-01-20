import $ from 'jquery'
import axios from 'axios'

var plugin = {}

plugin.install = function (Vue) {
    Vue.prototype.player = function (id) {
        var that = this;
        axios.all([this.$api.music.playmusic(id), this.$api.music.musicinfo(id)])
        .then(axios.spread((res1, res2)=>{
            that.url = res1.data[0].url;
            that.img = res2.songs[0].al.picUrl;
        }))
        setTimeout(() => {
            $("audio").trigger("play");
        }, 400);
    }
}

export default plugin