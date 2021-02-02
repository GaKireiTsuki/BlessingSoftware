<template>
    <div id="app">
        <menus></menus>
        <login></login>
        <transition name="slide">
            <keep-alive :max="8">
                <router-view v-wechat-title='$route.meta.title' class="content"></router-view>
            </keep-alive>
        </transition>
        <lyric></lyric>
        <playlist></playlist>
        <audioplayer></audioplayer>
    </div>
</template>
<script>
import menus from '@/components/common/Menus/Menus'
import audioplayer from '@/components/common/AudioPlayer/AudioPlayer'
import playlist from '@/components/common/PlayList/PlayList'
import login from '@/components/common/Login/Login'
import lyric from '@/components/common/Lyric/Lyric'
export default {
    name: 'app',
    components: {menus, audioplayer, playlist, login, lyric},
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