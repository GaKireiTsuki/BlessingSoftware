<template>
    <div class="artists">
        <div id="artists_category">
            <category ref="category" :category="AreaCategory" :option="area" @update="area = $event"></category>
            <category ref="category" :category="TypeCategory" :option="type" @update="type = $event"></category>
            <category ref="category" :category="NameCategory" :option="name" @update="name = $event"></category>
        </div>
        <gridLayout ref="gridLayout" :album="artists"></gridLayout>
        <infinite-loading @infinite="getartistlist">
            <div slots="no-more"></div>
            <div slots="no-results"></div>
            <div slots="error"></div>
        </infinite-loading>
    </div>
</template>
<script>
import category from '@/components/public/Category/Category'
import gridLayout from '@/components/public/gridLayout/gridLayout'
export default {
    name: "artists",
    components: {category, gridLayout},
    data() {
        return {
            AreaCategory: [
                { text: "全部", value: -1 },
                { text: "华语", value: 7 },
                { text: "日本", value: 8 },
                { text: "欧美", value: 96 },
                { text: "韩国", value: 16 },
                { text: "其他", value: 0 },
            ],
            area: -1,
            TypeCategory: [
                { text: "全部", value: -1 },
                { text: "男", value: 1 },
                { text: "女", value: 2 },
                { text: "乐队", value: 3 },
            ],
            type: -1,
            NameCategory: [],
            name: -1,
            artists: [],
            offset: 0,
            more: true,
        };
    },
    methods: {
        artistlist() {
            clearTimeout(this.timer);
            this.timer = setTimeout(() => {
                this.$api.music
                    .artistlist(this.offset, this.area, this.type, this.name)
                    .then((res) => {
                        this.offset = 0;
                        this.artists = res.artists;
                    });
            }, 600);
        },
        getartistlist($state) {
            setTimeout(() => {
                this.$api.music
                    .artistlist(
                        (this.offset += 24),
                        this.area,
                        this.type,
                        this.name
                    )
                    .then((res) => {
                        if (res.artists !== "") {
                            this.artists = this.artists.concat(res.artists)
                            $state.loaded()
                            if (res.more === false) {
                                this.more = false;
                                $state.complete()
                            } else {
                                this.more = true;
                            }
                        } else {
                            this.more = false;
                            $state.complete()
                        }
                    });
            }, 1000);
        },
    },
    computed: {
        params() {
            return this.area, this.type, this.name;
        },
    },
    watch: {
        params: {
            handler() {
                this.artistlist();
            },
            deep: true,
        },
    },
    created() {
        var NameCategory = this.NameCategory;
        for (var i = 0; i < 26; i++) {
            NameCategory.push({
                text: String.fromCharCode(65 + i),
                value: String.fromCharCode(97 + i),
            });
        }
        NameCategory.unshift({
            text: "ALL",
            value: "-1",
        });
        NameCategory.push({
            text: "#",
            value: "0",
        });
        this.artistlist();
    },
};
</script>
<style>
.artists #category {
    justify-content: flex-start;
    margin-bottom: 16px;
}
.artists #category:last-child {
    margin-bottom: 0px;
}
#artists_category {
    padding: 15px 0;
}
.artists #category:last-child .category {
    display: flex;
    flex-wrap: wrap;
    width: -webkit-fill-available;
    justify-content: space-between;
}
.artists #category:last-child .category label:nth-of-type(1) {
    width: 48px !important;
}
.artists #category:nth-child(2) .category {
    grid-template-rows: repeat(1, 1fr) !important;
}
.artists #category:last-child .category label {
    width: 32px;
}
.artists .grid_layout {
    padding-top: 26px;
}
.artists img {
    border-radius: 100%;
    box-shadow: 0 10px 25px rgb(0 0 0 / 10%);
}
.artists a {
    text-align: center;
}
</style>