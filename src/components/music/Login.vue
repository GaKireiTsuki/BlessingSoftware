<template>
    <div id="logins">
        <div id="login">
            <div class="login">
                <button @click="closetimer()" class="closes_login"></button>
                <div class="login_content">
                    <img src="../../assets/img/blessingsoftware-logo.svg" alt="">
                    <h1>使用 Music ID 登录</h1>
                    <img id="qrimg" :src="qrimg" alt="">
                    <span @click="loginstatus()" class="qrif">使用二维码登录</span>
                </div>
            </div>
            <button @click="closetimer()" class="close_login"></button>
        </div>
    </div>
</template>
<script>
import $ from 'jquery'
export default {
    name: 'login',
    data() {
        return {
            qrimg: '',
            code: ''
        }
    },
    methods: {
        checkstatu () {
            var that = this;
            this.$api.music.checkstatus(this.key).then( res => {
                that.code = res.code;
            })
        },
        getqr () {
            var that = this;
            this.$api.music.qrkey().then( res => {
                that.key = res.data.unikey
                this.$api.music.qrcreate(this.key).then( res => {
                    that.qrimg = res.data.qrimg
                    console.log('二维码已重置')
                })
            })
        },
        loginstatus () {
            this.$api.music.loginstatus().then( res => {
                if (res.data.account == null) {
                    this.getqr()
                    this.qr()
                } else {
                    alert('您已登录')
                    window.location = '/music'
                    this.closetimer(this.timer)
                }
            })
        },
        closetimer () {
            clearInterval(this.timer)
        },
        qr () {
            this.timer = setInterval( async() => {
                this.checkstatu()
                var code = this.code
                if (code === 800) {
                    console.log('二维码已过期')
                    this.getqr()
                } if (code === 801) {
                    console.log('等待扫码')
                } if (code === 802) {
                    console.log('待确认')
                } if (code === 803) {
                    console.log('授权登录成功')
                    clearInterval(this.timer)
                    this.loginstatus()
                }
            }, 3000);
        }
    }
}
$(function () {
    var close = $("#login button[class $= '_login']")
    var _login = $("#logins")
    var open_login = $(".open_login")
    var qrif = $('.qrif')
    var qrh = $('.login_content h1')
    var qrimg = $('#qrimg')
    close.on('click', function () {
        _login.hide()
        qrimg.hide()
        qrif.text('使用二维码登录')
        qrh.text('使用 Music ID 登录')
        $('body').removeAttr('style');
    })
    open_login.on('click', function () {
        _login.show()
        $('body').css({overflow: 'hidden'})
    })
    qrif.on('click', function () {
        if (qrimg.is(':hidden')) {
            setTimeout(() => {
                qrimg.show()
                qrif.text('使用 Music ID 登录')
                qrh.text('使用二维码登录')
            }, 300);
        } else {
            qrimg.hide()
            qrif.text('使用二维码登录')
            qrh.text('使用 Music ID 登录')
        }
    })
})
</script>
<style>
    #qrimg{
        width: 198px;
        height: 198px;
        display: none;
    }
    #logins{
        display: none;
    }
    .login_content img{
        width: 55px;
        height: 55px;
        margin-bottom: 24px;
    }
    .login_content{
        min-width: 640px;
        min-height: 480px;
        height: 480px;
        padding-top: 70px;
        position: relative;
        display: grid;
        justify-items: center;
        align-content: flex-start;
    }
    .login_content span{
        font-size: 14.875px;
        color: #0070c9;
        position: absolute;
        bottom: 40px;
        cursor: pointer;
    }
    .login_content h1{
        font-size: 24px;
        color: #111;
        height: 100%;
    }
    #login{
        position: fixed;
        width: 100vw;
        height: 100vh;
        top: 0;
        z-index: 9999;
        display: flex;
        place-content: center;
        place-items: center;
    }
    .login{
        min-height: 560px;
        min-width: 300px;
        width: 800px;
        background: #FFFFFF;
        border-radius: 12px;
        z-index: 3;
        position: relative;
        display: grid;
        justify-content: center;
        align-content: center;
    }
    .closes_login{
        width: 18px;
        height: 18px;
        border: none;
        background-color: rgb(204, 204, 204);
        mask-image: url('../../assets/img/close.svg');
        -webkit-mask-image: url('../../assets/img/close.svg');
        position: fixed;
        margin: 22px 22px 0px;
        outline: none;
    }
    .close_login{
        position: absolute;
        width: 100%;
        height: 100%;
        background: #0000002c;
        border: none;
        outline: none;
    }
</style>