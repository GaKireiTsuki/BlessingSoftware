<template>
    <div>
        <h3 v-show="playHistory && playHistory.length>0">历史记录</h3>
        <div id="play_list" v-for="(item, index) in playHistory" :key="index" tabindex="1" outline=0>
            <img @click="play(item.id)" v-lazy="item.al.picUrl + '?param=40y40'" :alt="item.name" :title="item.name">
            <div class="play_list_name">
                <div>
                    <span id="list_name">{{item.name}}</span>
                    <span id="list_name">{{item.ar[0].name}}</span>
                    </div>
                <div class="more" tabindex="0" outline=0>
                    <span></span>
                    <div class="more_list">
                        <div class="clear" @click="removeSong(item.id)">从“历史记录”中移除项目</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
    name: 'list',
    computed: {
        ...mapState(['playList', 'playHistory'])
    },
    methods: {
        ...mapActions(['play', 'Clear', 'removeSong'])
    }
}
</script>