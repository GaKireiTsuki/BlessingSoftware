<template>
    <div>
        <p>{{query}}</p>
    </div>
</template>
<script>
export default {
    name: 'Search',
    data() {
        return {
            query: []
        }
    },
    activated() {
        var that = this;
        this.$serve.postSearch(this.$route.params.keywords).then(res => {
            console.log(res)
            that.query = res.data.result.songs;
        }).catch(err => {
            console.log(err)
        })
    },
}
</script>