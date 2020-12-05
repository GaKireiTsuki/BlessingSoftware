<template>
    <div class="nav">
        <div id="nav">
            <router-link to="/">
                <img src="../assets/img/blessingsoftware-logo.svg" alt="">
            </router-link>
            <router-link to="/news">NEWS</router-link>
            <router-link to="/store">STORE</router-link>
        </div>
    </div>
</template>
<script>

import '../assets/css/nav.css'

export default {
    name: 'Nav',
}

</script>