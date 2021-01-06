<template>
    <div class="news">
        <p>Blessing Software News</p>
        <div v-for="item in news" :key="item.id">
            <h1 class="NewsTitle">{{ item.NewsTitle }}</h1>
            <p class="NewsDateTime">{{ item.NewsDateTime}}</p>
            <div class="NewsContent">{{ item.NewsContent }}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'news',
        data() {
            return {
                news: [],
            };
        },
    };
</script>

<style>
    .news {
        color: #3d3e3f;
    }
    .NewsTitle {
        font-size: 28px;
        line-height: 1.42em;
    }
    .NewsDateTime {
        color: #82909a;
        font-size: 28px;
        line-height: 1em;
        letter-spacing: 0.05em;
    }
    .NewsContent {
        font-size: 16px;
    }
</style>