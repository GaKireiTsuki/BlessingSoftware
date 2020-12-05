<template>
    <div id="Err">
        <p>Loading...</p>
    </div>
</template>
<script>
export default {
    name: 'Loading',
    data() {
        return {
            loading: false
        }
    },
    created() {
        var that = this;
        this.bus.$on('loading', function (data) {
            that.loading = !!data;
        })
    },
}
</script>