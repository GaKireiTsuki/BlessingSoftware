<template>
    <div class="radios">
        <!-- <iframe
            allow="autoplay *; encrypted-media *; fullscreen *"
            frameborder="0"
            height="450"
            style="
                width: 100%;
                max-width: 660px;
                overflow: hidden;
                background: transparent;
            "
            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
            src="http://localhost:100/album/%E5%A4%A9%E6%B0%97%E3%81%AE%E5%AD%90/80440087"
        >
        </iframe> -->
        <flexLayout ref="flexLayout" :albums="toplist"></flexLayout>
    </div>
</template>
<script>
import axios from 'axios'
import flexLayout from '@/components/public/flexLayout/flexLayout'
export default {
    name: 'radio',
    components: {flexLayout},
    data() {
        return {
            toplist: []
        }
    },
    activated() {
        this.$api.music.djr().then(res => {
            this.toplist = res.toplist
        })
    },
}
</script>
<style>
    
</style>