<template>
    <div id="app">
        <menus></menus>
        <keep-alive :max="8">
            <router-view v-wechat-title='$route.meta.title' class="content"></router-view>
        </keep-alive>
        <playlist></playlist>
        <audioplayer></audioplayer>
    </div>
</template>
<script>
import menus from '@/components/Menus'
import audioplayer from '@/components/AudioPlayer'
import playlist from '@/components/PlayList'
export default {
    name: 'app',
    components: {menus, audioplayer, playlist},
}
</script>