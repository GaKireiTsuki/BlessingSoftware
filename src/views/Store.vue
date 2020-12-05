<template>
    <div class="store">
        <div class="StoreContent">
            <div class="banner">
                
            </div>
            <div class="GameOne">
                <div class="GameTab">
                    <img src="../assets/img/bh3.jpg" alt="">
                </div>
                <router-link :to="{name: 'GameInfo', params: {GameID: item.GameID}}" class="GameTab" v-for="item in Game" :key="item.GameID">
                    <img :src="item.GameCover" alt="">
                    <div class="GameName">
                        <span>{{item.GameName}}</span>
                        <span>{{item.ReleaseDate | DateTime}}</span>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import Filters from '../assets/js/Filters'
export default {
    name: 'Store',
    filters: Filters,
    data() {
        return {
            Game: []
        }
    },
    created() {
        var that = this;
        //请求游戏简介
        axios.post('/games')
        .then(res => {
            console.log(res)
            that.Game = res.data;
        })
        .catch(err => {
            console.error(err, '请求失败，状态码为500。')
        })
    },
}
</script>
<style>
    .store{
        padding-top: 100px;
    }
    .StoreContent{
        max-width: 950px;
        margin: auto;
        display: grid;
        gap: 100px;
    }
    .banner{
        height: 300px;
        display: flex;
        justify-content: center;
    }
    .GameOne{
        display: grid;
        grid-auto-flow: column;
        grid-template-columns: repeat(3,1fr);
        grid-template-rows: repeat(3, 1fr);
        gap: 20px;
    }
    .GameTab{
        transition: all .4s;
        position: relative;
        overflow: hidden;
    }
    .GameTab:hover{
        box-shadow: 0px 0px 0px 1px rgba(0,0,0,0.16);
    }
    .GameTab:hover .GameName{
        bottom: 0;
        display: block;
        color: #fff;
    }
    .GameTab img{
        transition: all .4s;
        display: block;
    }
    .GameTab img:hover{
        filter: saturate(180%) blur(20px);
        box-sizing: border-box;
    }
    .GameName{
        box-shadow: 0px -1px 0px rgba(0,0,0,0.16);
        position: absolute;
        width: 100%;
        display: none;
        box-sizing: border-box;
        padding: 0px 4px;
        transition: all .4s;
    }
    .GameName span{
        line-height: 20px;
        display: block;
    }
</style>