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
                <button @click="addAlbum(item.id)"
                    class="add_button play_button"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="27"
                        height="27"
                        viewBox="0 0 27 27"
                        class="glyph"
                    >
                        <path
                            d="M8.89547677 13.5330073c0-1.1057457-.97371638-2.0959657-2.09596577-2.0959657-1.13875305 0-2.0794621.99022-2.0794621 2.0959657 0 1.1222494.94070905 2.0794621 2.0794621 2.0794621 1.12224939 0 2.09596577-.9572127 2.09596577-2.0794621zm6.68398533 0c0-1.1057457-.9572127-2.0959657-2.0794621-2.0959657-1.1222494 0-2.0794621.99022-2.0794621 2.0959657 0 1.1222494.9572127 2.0794621 2.0794621 2.0794621 1.1222494 0 2.0794621-.9572127 2.0794621-2.0794621zm6.700489 0c0-1.1057457-.940709-2.0959657-2.0794621-2.0959657-1.1222494 0-2.0959658.99022-2.0959658 2.0959657 0 1.1222494.9737164 2.0794621 2.0959658 2.0794621 1.1387531 0 2.0794621-.9572127 2.0794621-2.0794621z"
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
        ...mapActions(["playSong", "playAlbum", "addSong"]),
        playAlbum(id) {
            this.$api.music.albuminfo(id).then((res) => {
                this.$store.dispatch("playAlbum", res.songs);
                this.$store.dispatch("playSong", res.songs[0].id);
            });
        },
        addAlbum(id) {
            this.$api.music.albuminfo(id).then((res) => {
                this.$store.dispatch("addSong", res.songs);
            });
        },
    },
};
</script>