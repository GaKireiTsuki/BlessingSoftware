<template>
    <div class="flex_layout">
        <div class="albums" v-for="(item, index) in albums" :key="index">
            <div
                class="play_cover"
                v-if="item.artists"
                style="
                    position: relative;
                    justify-items: inherit;
                    align-items: inherit;
                "
            >
                <button @click="playAlbum(item.id)" class="play_button">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 27 27"
                        class="glyph"
                    >
                        <path
                            d="M11.3545232,18.4180929 L18.4676039,14.242665 C19.0452323,13.9290954 19.0122249,13.1204156 18.4676039,12.806846 L11.3545232,8.63141809 C10.7603912,8.26833741 9.98471883,8.54889976 9.98471883,9.19254279 L9.98471883,17.8404645 C9.98471883,18.5006112 10.7108802,18.7976773 11.3545232,18.4180929 Z"
                        ></path>
                    </svg>
                </button>
                <router-link
                    class="play_cover"
                    :to="{
                        name: 'Album',
                        params: { id: item.id, name: item.name },
                    }"
                    ><img
                        class="album_cover"
                        v-lazy="item.picUrl + '?param=150y150'"
                        :key="item.picUrl + '?param=150y150'"
                        :alt="item.name"
                        :title="item.name"
                /></router-link>
            </div>
            <router-link v-if="item.program" class="play_cover" to="">
                <button
                    @click="playSong(item.program.mainTrackId)"
                    class="play_button"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 27 27"
                        class="glyph"
                    >
                        <path
                            d="M11.3545232,18.4180929 L18.4676039,14.242665 C19.0452323,13.9290954 19.0122249,13.1204156 18.4676039,12.806846 L11.3545232,8.63141809 C10.7603912,8.26833741 9.98471883,8.54889976 9.98471883,9.19254279 L9.98471883,17.8404645 C9.98471883,18.5006112 10.7108802,18.7976773 11.3545232,18.4180929 Z"
                        ></path>
                    </svg>
                </button>
                <img
                    class="album_cover"
                    v-lazy="item.program.coverUrl + '?param=150y150'"
                    :key="item.program.coverUrl + '?param=150y150'"
                    :alt="item.name"
                    :title="item.name"
                />
            </router-link>
            <div class="info" v-if="item.artists">
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
            <div class="info" v-if="item.program">
                <router-link to="">{{ item.program.description }}</router-link>
                <router-link to=""> {{ item.program.name }}</router-link>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
    name: "flexLayout",
    props: ["albums"],
    methods: {
        ...mapActions(["playSong", "playAlbum"]),
        playAlbum (id) {
            this.$api.music.albuminfo(id).then(res => {
                this.$store.dispatch('playAlbum', res.songs)
                this.$store.dispatch('playSong', res.songs[0].id)
            })
        }
    },
};
</script>