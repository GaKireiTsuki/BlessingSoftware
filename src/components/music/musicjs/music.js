import axios from 'axios'
import { mapActions } from 'vuex'
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
            results: []
        }
    },
    methods: {
        ...mapActions(['play']),
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