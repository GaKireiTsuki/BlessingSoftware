<template>
    <div class="helf_layout">
        <div class="new_song" v-for="(item, index) in songs" :key="index">
            <div class="play_music" v-if="!item.al && !item.picUrl">
                <img v-lazy="'?param=50y50'" :key="'?param=50y50'" />
                <svg
                    @click="playSong(item.id)"
                    v-show="songID != item.id"
                    id="play_button"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 27 27"
                >
                    <path
                        d="M11.3545232,18.4180929 L18.4676039,14.242665 C19.0452323,13.9290954 19.0122249,13.1204156 18.4676039,12.806846 L11.3545232,8.63141809 C10.7603912,8.26833741 9.98471883,8.54889976 9.98471883,9.19254279 L9.98471883,17.8404645 C9.98471883,18.5006112 10.7108802,18.7976773 11.3545232,18.4180929 Z"
                    ></path>
                </svg>
                <div class="bars" v-show="songID == item.id">
                    <div class="bars1"></div>
                    <div class="bars2"></div>
                    <div class="bars3"></div>
                    <div class="bars4"></div>
                </div>
            </div>
            <div class="play_music" v-if="item.al">
                <img
                    v-lazy="item.al.picUrl + '?param=50y50'"
                    :key="item.al.picUrl + '?param=50y50'"
                    :alt="item.name"
                    :title="item.name"
                />
                <svg
                    @click="playSong(item.id)"
                    v-show="songID != item.id"
                    id="play_button"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 27 27"
                >
                    <path
                        d="M11.3545232,18.4180929 L18.4676039,14.242665 C19.0452323,13.9290954 19.0122249,13.1204156 18.4676039,12.806846 L11.3545232,8.63141809 C10.7603912,8.26833741 9.98471883,8.54889976 9.98471883,9.19254279 L9.98471883,17.8404645 C9.98471883,18.5006112 10.7108802,18.7976773 11.3545232,18.4180929 Z"
                    ></path>
                </svg>
                <div class="bars" v-show="songID == item.id">
                    <div class="bars1"></div>
                    <div class="bars2"></div>
                    <div class="bars3"></div>
                    <div class="bars4"></div>
                </div>
            </div>
            <div class="play_music" v-if="item.picUrl">
                <img
                    v-lazy="item.picUrl + '?param=50y50'"
                    :key="item.picUrl + '?param=50y50'"
                    :alt="item.name"
                    :title="item.name"
                />
                <svg
                    @click="playSong(item.id)"
                    v-show="songID != item.id"
                    id="play_button"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 27 27"
                >
                    <path
                        d="M11.3545232,18.4180929 L18.4676039,14.242665 C19.0452323,13.9290954 19.0122249,13.1204156 18.4676039,12.806846 L11.3545232,8.63141809 C10.7603912,8.26833741 9.98471883,8.54889976 9.98471883,9.19254279 L9.98471883,17.8404645 C9.98471883,18.5006112 10.7108802,18.7976773 11.3545232,18.4180929 Z"
                    ></path>
                </svg>
                <div class="bars" v-show="songID == item.id">
                    <div class="bars1"></div>
                    <div class="bars2"></div>
                    <div class="bars3"></div>
                    <div class="bars4"></div>
                </div>
            </div>
            <div class="info" v-if="item.artists">
                <router-link to="">{{ item.name }}</router-link>
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
            <div class="info" v-if="item.ar">
                <router-link to="">{{ item.name }}</router-link>
                <span>
                    <router-link
                        :to="{
                            name: 'Artist',
                            params: { id: item.id, name: item.name },
                        }"
                        v-for="(item, index) in item.ar"
                        :key="index"
                        >{{ item.name }}</router-link
                    >
                </span>
            </div>
            <div class="info" v-if="item.song">
                <router-link to="">{{ item.name }}</router-link>
                <router-link
                    :to="{
                        name: 'Artist',
                        params: {
                            id: item.song.artists[0].id,
                            name: item.song.artists[0].name,
                        },
                    }"
                    >{{ item.song.artists[0].name }}</router-link
                >
            </div>
            <div @click="addSong(item)" class="add_play_list">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    class="glyph-add"
                    aria-hidden="true"
                >
                    <path
                        d="M15.169 21.24v-4.423h-4.387a.824.824 0 01-.818-.813c0-.448.379-.821.818-.821h4.387V10.76c0-.44.38-.796.827-.796.447 0 .827.356.827.796v4.423h4.395c.447 0 .818.373.818.821a.82.82 0 01-.818.813h-4.395v4.423c0 .431-.38.796-.827.796-.447 0-.827-.365-.827-.796z"
                    ></path>
                </svg>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
    name: "helfLayout",
    props: ["songs"],
    computed: {
        ...mapState(["songID"]),
    },
    methods: {
        ...mapActions(["playSong", "addSong"]),
    },
};
</script>