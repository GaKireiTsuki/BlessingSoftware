<template>
    <div class="flex_layout">
        <div class="albums mv" v-for="(item, index) in mvs" :key="index">
            <router-link
                v-if="item.cover"
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
            <router-link
                v-if="item.imgurl16v9"
                :to="{ name: 'MV', params: { id: item.id, name: item.name } }"
            >
                <img
                    class="album_cover"
                    v-lazy="item.imgurl16v9 + '?param=159y90'"
                    :key="item.imgurl16v9 + '?param=159y90'"
                    :alt="item.name"
                    :title="item.name"
                />
            </router-link>
            <div class="info" v-if="item.artists">
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
            <div class="info" v-if="item.artist">
                <router-link
                    :to="{
                        name: 'MV',
                        params: { id: item.id, name: item.name },
                    }"
                    >{{ item.name }}</router-link
                >
                <router-link
                    :to="{
                        name: 'Artist',
                        params: { id: item.artist.id, name: item.artist.name },
                    }"
                    >{{ item.artistName }}</router-link
                >
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