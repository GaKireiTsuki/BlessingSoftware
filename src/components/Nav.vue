<template>
    <div class="nav">
        <div id="nav">
            <router-link to="/" id="nav_link">
                <img src="../assets/img/blessingsoftware-logo.svg" alt="">
            </router-link>
            <router-link to="/news" id="nav_link">NEWS</router-link>
            <router-link to="/store" id="nav_link">STORE</router-link>
        </div>
    </div>
</template>
<script>

import '../assets/css/nav.css'

export default {
    name: 'Nav',
}

</script>