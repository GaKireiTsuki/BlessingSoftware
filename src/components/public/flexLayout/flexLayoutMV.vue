<template>
    <div class="flex_layout">
        <div class="albums mv" v-for="(item, index) in mvs" :key="index">
            <router-link
                :to="{ name: 'MV', params: { id: item.id, name: item.name } }"
            >
                <img
                    class="album_cover"
                    v-lazy="item.cover + '?param=159y90'"
                    :key="item.cover + '?param=159y90'"
                    :alt="item.name"
                    :title="item.name"
                />
            </router-link>
            <div class="info">
                <router-link
                    :to="{
                        name: 'MV',
                        params: { id: item.id, name: item.name },
                    }"
                    >{{ item.name }}</router-link
                >
                <span>
                    <router-link
                        :to="{
                            name: 'Artist',
                            params: { id: item.id, name: item.name },
                        }"
                        v-for="(item, index) in item.artists"
                        :key="index"
                        >{{ item.name }}</router-link
                    >
                </span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "flexLayoutMV",
    props: ["mvs"],
};
</script>