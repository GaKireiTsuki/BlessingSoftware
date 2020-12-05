<template>
    <div class="news">
        <p>Blessing Software News</p>
        <div v-for="item in news" :key="item.id">
            <h1 class="NewsTitle">{{item.NewsTitle}}</h1>
            <p class="NewsDateTime">{{item.NewsDateTime | DateTime}}</p>
            <div class="NewsContent">{{item.NewsContent}}</div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import Filters from '../assets/js/Filters'

export default {
    name: 'News',
    filters: Filters,

    data() {
        return {
            news: [],
        }
    },

    created() {
        var that = this;
        //请求新闻
        axios.post('/news')
        .then(res => {
            that.news = res.data;
        })
        .catch(err => {
            console.error(err, '请求失败，状态码为500。')
        })
    },
}
</script>
<style>
    .news{
    color: #3d3e3f;
    }
    .NewsTitle{
        font-size: 28px;
        line-height: 1.42em;
    }
    .NewsDateTime{
        color: #82909a;
        font-size: 28px;
        line-height: 1.0em;
        letter-spacing: .05em;
    }
    .NewsContent{
        font-size: 16px;
    }
</style>