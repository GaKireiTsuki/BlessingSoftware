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
    import app from '@/assets/js/app'
    export default app
</script>