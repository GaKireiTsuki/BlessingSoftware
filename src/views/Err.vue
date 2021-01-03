<template>
    <div id="Err">
        <p>Not Found Page</p>
    </div>
</template>

<script>
    import $ from "jquery";
    export default {
        
    };
    //错误页重定向至首页
    $(document).ready(function () {
        setTimeout(() => {
            alert("Not Found Page");
            window.location.href = "/";
        }, 200);
    });
</script>

<style>
    #Err {
        height: calc(100vh - 50px);
        display: grid;
        place-items: center;
    }
</style>