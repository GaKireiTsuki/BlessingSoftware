<template>
    <div class="grid_layout">
        <div class="albums" v-for="(item, index) in album" :key="index">
            <router-link
                :to="{
                    name: 'Artist',
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
                        name: 'Artist',
                        params: { id: item.id, name: item.name },
                    }"
                    >{{ item.name }}</router-link
                >
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "gridLayout",
    props: ["album"],
};
</script>