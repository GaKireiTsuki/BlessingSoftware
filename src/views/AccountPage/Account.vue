<template>
    <div class="account">
        <div class="account_back">
            <div class="account_title">
                <h1>账户</h1>
                <a href="javascript:;" @click="out()">注销</a>
            </div>
        </div>
        <div class="account_header account_back">
            <div id="account_header">
                <img :src="profile.backgroundUrl" :alt="profile.nickname" :title="profile.nickname">
            </div>
            <div id="account_header">
                <h1>嗨，{{profile.nickname}}：</h1>
                <span>您的 Music ID 是 {{account.id}}</span>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
    name: 'account',
    data() {
        return {
            profile: '',
            account: ''
        }
    },
    computed: {
        ...mapState(['loginStatu']),
    },
    methods: {
        ...mapActions(['logout']),
        out () {
            this.logout()
            this.$api.music.logout()
        },
        userinfo () {
            this.$api.music.userinfo().then(res => {
                this.profile = res.profile
                this.account = res.account
            })
        }
    },
    activated() {
        this.userinfo()
    },
    watch: {
        loginStatu () {
            if (this.loginStatu !== true) {
                this.$router.push({name: 'Music'})
            }
        }
    }
}
</script>
<style>
    .account_back{
        background: #f5f5f7;
        position: absolute;
        left: 0;
        right: 0;
        padding: 0 calc((100% - 980px) / 2);
    }
    .account_title{
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #06c;
        height: 52px;
        border-bottom: 1px solid #CECECF;
    }
    .account_title h1{
        line-height: 24px;
        font-size: 21px;
        font-family: 'SF Pro SC';
    }
    .account_title a{
        line-height: 16px;
        font-size: 12px;
        color: #06c;
    }
    .account_header{
        height: 122px;
        margin-top: 52px;
        display: grid;
        align-items: center;
        grid-template-columns: 100px 1fr;
    }
    .account_header div:last-child{
        line-height: 1.1;
    }
    #account_header{
        font-family: "SF Pro Display", Arial, sans-serif;
    }
    #account_header h1{
        font-weight: 600;
        font-size: 32px;
        text-transform: uppercase;
    }
    #account_header span{
        font-size: 21px;
        margin-top: 8px;
        display: block;
    }
    #account_header img{
        height: 80px;
        border-radius: 100%;
    }
</style>