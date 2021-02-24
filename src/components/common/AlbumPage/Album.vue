<template>
    <div
        class="album"
        v-wechat-title="
            'BS Music 上' + artistsname + '的专辑' + '《' + album.name + '》'
        "
    >
        <div id="album">
            <div class="cover play_cover">
                <button
                    @click="playAlbum(songs), playSong(songs[0].id)"
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
                    v-lazy="album.picUrl + '?param=1000y1000'"
                    :key="album.picUrl + '?param=1000y1000'"
                    :alt="album.name"
                    :title="album.name"
                />
                <img
                    id="album_cover_bg"
                    v-lazy="album.picUrl + '?param=1000y1000'"
                    :key="album.picUrl + '?param=1000y1000' + 'a'"
                    :alt="album.name"
                    :title="album.name"
                />
            </div>
            <div class="album_content">
                <div id="album_info">
                    <h1>{{ album.name }}</h1>
                    <router-link
                        :to="{
                            name: 'Artist',
                            params: { id: item.id, name: item.name },
                        }"
                        v-for="(item, index) in album.artists"
                        :key="index"
                        >{{ item.name }}</router-link
                    >
                    <h3>
                        {{ album.subType }} · {{ album.publishTime | Year }}
                    </h3>
                    <div class="album_button">
                        <button
                            @click="playAlbum(songs), playSong(songs[0].id)"
                        >
                            播放
                        </button>
                        <button @click="addSong(songs)">添加</button>
                    </div>
                </div>
                <div id="album_song_list">
                    <div
                        class="album_song_list"
                        v-for="(item, index) in songs"
                        :key="index"
                        tabindex="0"
                        outline="0"
                    >
                        <div style="width: 17.5px"></div>
                        <span>
                            <div v-show="songID != item.id">{{ item.no }}</div>
                            <div
                                class="bars"
                                v-show="songID == item.id && playIng == true"
                            >
                                <div class="bars1"></div>
                                <div class="bars2"></div>
                                <div class="bars3"></div>
                                <div class="bars4"></div>
                            </div>
                            <button
                                v-show="songID == item.id && playIng != false"
                                style="background: no-repeat; border: none"
                            >
                                <svg
                                    @click="ControlPause"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 27 27"
                                >
                                    <path
                                        d="M9,17.6071429 C9,18.3928571 9.42,19 10.14,19 L10.92,19 C11.58,19 12,18.3928571 12,17.6071429 L12,9.39285714 C12,8.60714286 11.58,8 10.92,8 L10.14,8 C9.42,8 9,8.60714286 9,9.39285714 L9,17.6071429 Z M15,17.6071429 C15,18.3928571 15.42,19 16.14,19 L16.92,19 C17.58,19 18,18.3928571 18,17.6071429 L18,9.39285714 C18,8.60714286 17.58,8 16.92,8 L16.14,8 C15.42,8 15,8.60714286 15,9.39285714 L15,17.6071429 Z"
                                    ></path>
                                </svg>
                            </button>
                            <button
                                v-show="songID != item.id"
                                style="background: no-repeat; border: none"
                            >
                                <svg
                                    @click="playSong(item.id), ControlPlay"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 27 27"
                                >
                                    <path
                                        d="M11.3545232,18.4180929 L18.4676039,14.242665 C19.0452323,13.9290954 19.0122249,13.1204156 18.4676039,12.806846 L11.3545232,8.63141809 C10.7603912,8.26833741 9.98471883,8.54889976 9.98471883,9.19254279 L9.98471883,17.8404645 C9.98471883,18.5006112 10.7108802,18.7976773 11.3545232,18.4180929 Z"
                                    ></path>
                                </svg>
                            </button>
                        </span>
                        <span class="info name_artist">
                            <div>{{ item.name }}</div>
                            <div
                                id="name_artist"
                                v-show="item.ar && item.ar.length > 1"
                            >
                                <router-link
                                    :to="{
                                        name: 'Artist',
                                        params: {
                                            id: item.id,
                                            name: item.name,
                                        },
                                    }"
                                    v-for="(item, index) in item.ar"
                                    :key="index"
                                    >{{ item.name }}</router-link
                                >
                            </div>
                        </span>
                        <span>
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
                            {{ item.dt | Duration }}
                        </span>
                        <div style="width: 17.5px"></div>
                    </div>
                    <div class="album_song_list" style="height: 0.01px">
                        <div style="width: 17.5px"></div>
                        <span></span>
                        <span></span>
                        <span></span>
                        <div style="width: 17.5px"></div>
                    </div>
                </div>
                <div class="album_info">
                    <span>{{ album.size }}&nbsp;首歌曲</span>
                    <span>发行日期 {{ album.publishTime | Date }}</span>
                    <span>{{ album.company }}</span>
                </div>
            </div>
        </div>
        <div class="search_title" v-show="mvs && mvs.length > 0">
            <h2>音乐视频</h2>
        </div>
        <flexLayoutMV
            ref="flexLayoutMV"
            :mvs="mvs"
            v-show="mvs && mvs.length > 0"
        ></flexLayoutMV>
        <div class="search_title">
            <h2>更多{{ artistsname }}的作品</h2>
        </div>
        <flexLayout ref="flexLayout" :albums="hotAlbums"></flexLayout>
    </div>
</template>
<script>
import album from "./album";
export default album;
</script>
<style>
.album_button {
    padding: 14px 0 16px;
    display: flex;
    justify-content: flex-start;
    column-gap: 10px;
}
.album_button button {
    height: 28px;
    cursor: pointer;
    color: var(--whiteFontColor);
    border: none;
    background: var(--redBgColor);
    padding: 0 12px;
    border-radius: 4px;
    min-width: 90px;
    font-size: 13px;
    outline: none;
}
.album_song_list span:nth-of-type(3) .add_play_list {
    left: 0;
}
#name_artist a {
    font-size: 12px;
    color: var(--grayishFontColor);
}
#name_artist {
    display: flex;
}
.name_artist {
    display: grid;
    align-content: center;
}
.name_artist div:nth-of-type(1) {
    -webkit-line-clamp: 1;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    white-space: normal;
    overflow: hidden;
}
.name_artist div {
    line-height: 24.5px;
}
#album {
    display: flex;
    grid-auto-flow: column;
    margin-bottom: 40px;
}
#album .search_title {
    padding-left: 0px;
}
.cover {
    position: sticky;
    top: 84px;
    height: 47%;
    width: 47%;
}
#album img {
    width: 100%;
    height: 100%;
    box-shadow: 0 4px 8px 0 rgb(0 0 0 / 10%), 0 10px 13px 0 rgb(0 0 0 / 11%);
    border-radius: 6px;
}
.album_content {
    margin-left: 20px;
    width: -webkit-fill-available;
}
.album_content h1 {
    font-size: 24px;
}
.album_content h3 {
    margin-top: 4px;
    color: var(--grayishFontColor);
    text-transform: uppercase;
    font-size: 11px;
    line-height: 1.18182;
    font-weight: 500;
    letter-spacing: 0.006em;
}
.album_content a {
    font-size: 24px;
    color: var(--redFontColor);
    margin-right: 8px;
}
.album_content a:hover {
    text-decoration: underline;
}
#album_song_list {
    margin-top: 16px;
}
.album_song_list {
    display: grid;
    font-size: 14px;
    grid-template-columns: 17.5px 26px 1fr 70px 17.5px;
}
.album_song_list span:nth-of-type(3) {
    text-align: end;
    font-size: 12px;
    display: flex;
    position: relative;
    justify-content: flex-end;
    color: var(--grayishFontColor);
}
.album_song_list:hover {
    background: #fbfbfb;
    border-radius: 8px;
}
.album_song_list:hover span {
    box-shadow: none;
}
.album_song_list:hover + .album_song_list span {
    box-shadow: none;
}
.album_song_list:hover span:nth-of-type(1) div {
    opacity: 0;
}
.album_song_list:hover span:nth-of-type(1) svg {
    opacity: 1;
    cursor: pointer;
}
.album_song_list:focus {
    background: #dd1f34;
    border-radius: 8px;
    outline: none;
}
.album_song_list:focus .bars div[class*="bars"] {
    background: var(--whiteBgColor);
}
.album_song_list:focus span {
    color: var(--whiteFontColor) !important;
    box-shadow: none;
}
.album_song_list:focus #name_artist a {
    color: var(--whiteFontColor);
}
.album_song_list:focus + .album_song_list span {
    box-shadow: none;
}
.album_song_list:focus span:nth-of-type(1) svg {
    fill: var(--whiteFillColor);
}
.album_song_list:focus span:nth-of-type(3) svg {
    fill: var(--whiteFillColor);
}
.album_song_list:focus span:nth-of-type(3) {
    color: #dd1f34 !important;
}
.album_song_list span {
    box-shadow: 0px -1px #00000026;
    height: 55px;
    line-height: 55px;
}
.album_song_list span:nth-of-type(1) {
    height: 55px;
    width: 26px;
    position: relative;
    color: var(--grayishFontColor);
}
.album_song_list span:nth-of-type(1) svg {
    left: -12px;
    width: 34px;
    top: 10.5px;
    position: absolute;
    fill: var(--redFillColor);
    opacity: 0;
}
#album_info {
    padding: 0px 17.5px;
}
.album_info {
    padding: 20px 17.5px 0;
}
.album_info span {
    display: block;
    color: var(--grayishFontColor);
    font-size: 12px;
    line-height: 1.18182;
    font-weight: 500;
    letter-spacing: 0.006em;
    margin-bottom: 3px;
    font-family: "SF Pro", "PingFang SC";
}
.album {
    margin-top: 40px;
}
#album_cover_bg {
    transform: scale(0.92) translateY(calc(4% + 14px)) translateZ(0);
    -webkit-filter: blur(30px) brightness(130%);
    filter: blur(30px) brightness(130%);
    opacity: 0.55;
    position: absolute;
    z-index: -1;
}
@media screen and (max-width: 484px) {
    #album_info {
        padding: 0;
        text-align: center;
    }
    #album .cover {
        margin: 0 53px;
        width: calc(100% - 53px * 2);
        height: 100%;
        position: relative;
        top: 0;
    }
    #album {
        display: block;
        margin-bottom: 40px;
    }
    .album {
        padding: 24px;
        margin-top: 0;
    }
    .album_content {
        margin: 18px 0 0;
    }
}
</style>