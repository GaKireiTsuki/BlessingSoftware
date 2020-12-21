<template>
    <div>
        <Nav></Nav>
        <keep-alive :max="8">
            <router-view v-wechat-title='$route.meta.title' class="content"></router-view>
        </keep-alive>
    </div>
</template>
<script>
    import Nav from './components/Nav'
    export default {
        components: {Nav},
    }
</script>