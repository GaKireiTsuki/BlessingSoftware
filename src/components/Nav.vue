<template>
    <div>
        <div class="nav">
            <img src="../assets/img/BlessingSoftware_Logo.svg" alt="">
            <router-link to="/">HOME</router-link>
            <router-link to="/news">NEWS</router-link>
            <router-link to="/store">STORE</router-link>
        </div>
        <div class="menu">
            <div id="mebu_bar">
                <div id="menu">
                    <span class="menu_bar"></span>
                    <span class="menu_bar"></span>
                    <span class="menu_bar"></span>
                    <span class="menu_text">MENU</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

import '../assets/css/nav.css'

export default {
    name: 'Nav',
}

</script>