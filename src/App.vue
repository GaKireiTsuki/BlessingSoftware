<template>
    <div id="app">
        <menus></menus>
        <transition name="slide">
            <keep-alive :max="8">
                <router-view v-wechat-title='$route.meta.title' class="content"></router-view>
            </keep-alive>
        </transition>
        <playlist></playlist>
        <audioplayer></audioplayer>
    </div>
</template>
<script>
import menus from '@/components/Menus'
import audioplayer from '@/components/music/AudioPlayer'
import playlist from '@/components/music/PlayList'
export default {
    name: 'app',
    components: {menus, audioplayer, playlist},
}
</script>
<style>
    .slide-enter-active,
    .slide-leave-active{
        transition: all 350ms ease-in-out;
        opacity: 1;
    }
    .slide-enter,
    .slide-leave-to {
        opacity: 0;
    }
</style>