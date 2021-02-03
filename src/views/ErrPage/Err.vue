<template>
    <div id="Err" v-wechat-title="'Not Found Page - BS Music'">
        <p>Not Found Page</p>
    </div>
</template>
<script>
/* import $ from "jquery"; */
export default {
    name: 'err'
};
//错误页重定向至首页
/* $(function () {
    setTimeout(() => {
        alert("Not Found Page")
        window.location.href = "/music"
    }, 200)
}) */
</script>
<style>
    #Err {
        height: calc(100vh - 98px);
        display: grid;
        place-items: center;
        font-size: 48px;
        font-weight: 600;
        text-align: center;
        padding-bottom: 0px !important;
    }
</style>