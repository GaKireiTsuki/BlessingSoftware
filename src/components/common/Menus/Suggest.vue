<template>
    <div class="suggest">
        <div id="suggest" v-for="(item,index) in results" :key="index">
            <router-link id="yuan" :to="{ name: 'Artist', params: { id: items.id } }" v-for="items in item.artists" :key="items.name">
                <img v-lazy="items.picUrl + '?param=110y110'" :alt="items.name" :title="items.name" />
                <span>
                    <p>{{ items.name }}</p>
                    <p>艺人</p>
                </span>
            </router-link>
            <router-link id="fang" to="" v-for="items in item.songs" :key="items.id">
                <img v-lazy="" />
                <span>
                    <p class="info" @click="play(items.id)">{{ items.name }}</p>
                    <p>
                        歌曲 ·
                        <span v-for="item in items.artists" :key="item.name">
                            {{ item.name }}
                        </span>
                    </p>
                </span>
            </router-link>
            <router-link id="fang" :to="{ name: 'Album', params: { id: items.id } }" v-for="items in item.albums" :key="items.id">
                <img v-lazy="" />
                <span>
                    <p>{{ items.name }}</p>
                    <p>
                        专辑 ·
                        <span>
                            {{ items.artist.name }}
                        </span>
                    </p>
                </span>
            </router-link>
        </div>
    </div>
</template>
<script>
    import { mapActions, mapState } from 'vuex'
    export default {
        name: "Suggest",
        data() {
            return {
                results: []
            };
        },
        methods: {
            ...mapActions(['play'])
        },
        computed: {
            ...mapState(['keywords'])
        },
        watch: {
            keywords(keywords) {
                clearTimeout(this.timer);
                var that = this;
                this.timer = setTimeout(() => {
                    this.$api.music.suggest(keywords).then((res) => {
                        that.results = res;
                    });
                }, 500);
            },
        },
    };
</script>
<style>
    .suggest {
        background: #fff;
        border-bottom-left-radius: 18px;
        border-bottom-right-radius: 18px;
        color: #86868b;
    }
    .suggest div:last-child{
        display: none;
    }
    #suggest {
        margin: 0 40px;
        padding: 24px 0 18px;
    }
    #suggest a {
        min-height: 60px;
        height: 60px;
        display: flex;
        align-items: center;
    }

    #fang img {
        width: 46px;
        height: 46px;
        border-radius: 4px;
        margin-right: 10px;
        padding: 0px !important;
    }

    #yuan img {
        width: 46px;
        height: 46px;
        border-radius: 100%;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
        margin-right: 10px;
        padding: 0px !important;
    }

    #suggest a {
        font-size: 13px;
    }
    #suggest p {
        line-height: normal;
    }

    #suggest a p:nth-of-type(2) {
        font-size: 12px;
        color: #3c3c4399;
    }
</style>