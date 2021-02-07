import axios from 'axios'
import { mapActions } from 'vuex'
export default {
    name: 'music',
    data() {
        return {
            ssize: 32,
            area: 'ALL',
            category: [
                {text: '全部', value: 'ALL'},
                {text: '国语流行', value: 'ZH'},
                {text: '日语流行', value: 'JP'},
                {text: '欧美流行', value: 'EA'},
                {text: '韩语流行', value: 'KR'}
            ],
            asize: 24,
            keywords: '',
            result: [],
            albums: [],
            banners: [],
            results: []
        }
    },
    methods: {
        ...mapActions(['playSong', 'addSong']),
    },
    watch: {
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