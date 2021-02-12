<template>
    <div class="flex_layout">
        <div class="albums" v-for="(item, index) in albums" :key="index">
            <router-link
                :to="{
                    name: 'Album',
                    params: { id: item.id, name: item.name },
                }"
            >
                <img
                    class="album_cover"
                    v-lazy="item.picUrl + '?param=150y150'"
                    :key="item.picUrl + '?param=150y150'"
                    :alt="item.name"
                    :title="item.name"
                />
            </router-link>
            <div class="info">
                <router-link
                    :to="{
                        name: 'Album',
                        params: { id: item.id, name: item.name },
                    }"
                    >{{ item.name }}</router-link
                >
                <router-link
                    :to="{
                        name: 'Artist',
                        params: { id: item.artist.id, name: item.artist.name },
                    }"
                >
                    {{ item.artists[0].name }}</router-link
                >
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "flexLayout",
    props: ["albums"],
};
</script>