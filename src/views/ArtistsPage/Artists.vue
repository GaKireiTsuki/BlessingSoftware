<template>
    <div class="artists">
        <div id="artists_category">
            <div id="category">
                <div class="category">
                    <label v-for="item in AreaCategory" :key="item.text">
                        <input type="radio" class="radio" v-model="area" :value="item.value">
                        <span>{{item.text}}</span>
                    </label>
                </div>
            </div>
            <div id="category">
                <div class="category">
                    <label v-for="item in TypeCategory" :key="item.text">
                        <input type="radio" class="radio" v-model="type" :value="item.value">
                        <span>{{item.text}}</span>
                    </label>
                </div>
            </div>
            <div id="category">
                <div class="category">
                    <label v-for="item in NameCategory" :key="item.text">
                        <input type="radio" class="radio" v-model="name" :value="item.value">
                        <span>{{item.text}}</span>
                    </label>
                </div>
            </div>
        </div>
        <div class="grid_layout">
            <div class="albums" v-for="item in artists" :key="item.name">
                <router-link :to="{name: 'Artist', params: {id: item.id}}">
                    <img class="album_cover" v-lazy="item.picUrl + '?param=150y150'" :alt="item.name" :title="item.name">
                </router-link>
                <div class="info">
                    <router-link :to="{name: 'Artist', params: {id: item.id}}">{{item.name}}</router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'artists',
    data() {
        return {
            AreaCategory: [
                {text: '全部', value: '-1'},
                {text: '华语', value: '7'},
                {text: '日本', value: '8'},
                {text: '欧美', value: '96'},
                {text: '韩国', value: '16'},
                {text: '其他', value: '0'}
            ],
            area: '-1',
            TypeCategory: [
                {text: '全部', value: '-1'},
                {text: '男', value: '1'},
                {text: '女', value: '2'},
                {text: '乐队', value: '3'}
            ],
            type: '-1',
            NameCategory: [],
            name: '-1',
            artists: []
        }
    },
    methods: {
        artistlist () {
            clearTimeout(this.timer)
            this.timer = setTimeout(() => {
                this.$api.music.artistlist(this.area, this.type, this.name).then(res => {
                    this.artists = res.artists
                })
            }, 1000)
        }
    },
    computed: {
        params () {
            return this.area, this.type, this.name
        }
    },
    watch: {
        params: {
            handler () {
                this.artistlist()
            },
            deep: true
        }
    },
    created() {
        var NameCategory = this.NameCategory
        for (var i = 0; i < 26; i++) {
            NameCategory.push({
                text: String.fromCharCode(65 + i),
                value: String.fromCharCode(97 + i)
            })
        }
        NameCategory.unshift ({
            text: 'ALL', value: '-1'
        })
        NameCategory.push ({
            text: '#', value: '0'
        })
        this.artistlist()
    },
}
</script>
<style>
    .artists #category{
        justify-content: flex-start;
        margin-bottom: 16px;
    }
    .artists #category:last-child{
        margin-bottom: 0px;
    }
    #artists_category{
        padding: 16px 0;
        box-sizing: border-box;
    }
    .artists #category:last-child .category{
        display: flex;
        flex-wrap: wrap;
        width: -webkit-fill-available;
        justify-content: space-between;
    }
    .artists #category:last-child .category label:nth-of-type(1){
        width: 48px !important;
    }
    .artists #category:nth-child(2) .category{
        grid-template-rows: repeat(1, 1fr) !important;
    }
    .artists #category:last-child .category label{
        width: 32px;
    }
    .artists .grid_layout{
        padding-top: 26px;
    }
    .artists img{
        border-radius: 100%;
        box-shadow: 0 10px 25px rgb(0 0 0 / 10%);
    }
    .artists a{
        text-align: center;
    }
</style>