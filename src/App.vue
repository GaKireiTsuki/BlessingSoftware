<template>
    <div>
        <menus></menus>
        <keep-alive :max="8">
            <router-view v-wechat-title='$route.meta.title' class="content"></router-view>
        </keep-alive>
        <audioplayer></audioplayer>
    </div>
</template>
<script>
    import menus from './components/Menus'
    import audioplayer from './components/AudioPlayer'
    export default {
        name: 'app',
        components: {menus, audioplayer},
    }
</script>