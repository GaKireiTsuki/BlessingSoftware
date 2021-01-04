<template>
    <div>
        Artist
    </div>
</template>
<script>
export default {
    name: 'Artist',
    data() {
        return {
            
        }
    },
    activated() {
        this.$serve.postArtist(this.$route.params.id).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
    },
}
</script>