<template>
    <div id="logins">
        <div id="login">
            <div class="login">
                <button @click="closetimer()" class="closes_login"></button>
                <div class="login_content">
                    <img src="../../assets/img/blessingsoftware-logo.svg" alt="">
                    <h1>使用 Music ID 登录</h1>
                    <p>您将登录 Blessing Software Music</p>
                    <div class="ap">
                        <img id="next" src="../../assets/img/next.svg" alt="">
                        <img @click="email()" id="nexts" src="../../assets/img/next.svg" alt="">
                        <input v-model="account" type="text" name="account" id="account">
                        <input @keyup.enter="email()" v-model="password" type="password" name="password" id="password">
                    </div>
                    <img id="qrimg" :src="qrimg" alt="">
                    <span @click="loginstatus()" class="qrif">使用二维码登录</span>
                    <span>{{cookie}}</span>
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
            account: '',
            password: '',
            qrimg: '',
            cookie: ''
        }
    },
    methods: {
        email () {
            this.$api.music.email(this.account, this.password).then( res => {
                console.log(res)
                if (res.code === 200) {
                    clearInterval(this.timer)
                    $(function () {
                        console.log('您已登录')
                        var _login = $("#logins")
                        var qrif = $('.qrif')
                        var qrh = $('.login_content h1')
                        var qrimg = $('#qrimg')
                        var ap = $('.ap')
                        var next = $('#next')
                        var nexts = $('#nexts')
                        _login.hide()
                        qrimg.hide()
                        ap.show()
                        qrif.text('使用二维码登录')
                        qrh.text('使用 Music ID 登录')
                        $('body').removeAttr('style');
                        $('.ap input').val("").removeAttr('style')
                        next.removeAttr('style')
                        nexts.removeAttr('style')
                    })
                }
            })
        },
        checkstatu () {
            var that = this;
            this.$api.music.checkstatus(this.key).then( res => {
                that.code = res.code;
                console.log(res.cookie)
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
                console.log(res.data)
                if (res.data.account === null) {
                    this.getqr()
                    this.qr()
                } else {
                    console.log('您已登录')
                    $(function () {
                        var _login = $("#logins")
                        var qrif = $('.qrif')
                        var qrh = $('.login_content h1')
                        var qrimg = $('#qrimg')
                        var ap = $('.ap')
                        _login.hide()
                        qrimg.hide()
                        ap.show()
                        qrif.text('使用二维码登录')
                        qrh.text('使用 Music ID 登录')
                        $('body').removeAttr('style');
                    })
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
    var ap = $('.ap')
    var next = $('#next')
    var nexts = $('#nexts')
    close.on('click', function () {
        _login.hide()
        qrimg.hide()
        ap.show()
        qrif.text('使用二维码登录')
        qrh.text('使用 Music ID 登录')
        $('body').removeAttr('style');
        $('.ap input').val("").removeAttr('style')
        next.removeAttr('style')
        nexts.removeAttr('style')
    })
    open_login.on('click', function () {
        _login.show()
        $('body').css({overflow: 'hidden'})
    })
    qrif.on('click', function () {
        if (qrimg.is(':hidden')) {
            setTimeout(() => {
                qrimg.show()
                ap.hide()
                qrif.text('使用 Music ID 登录')
                qrh.text('使用二维码登录')
            }, 300);
        } else {
            qrimg.hide()
            ap.show()
            qrif.text('使用二维码登录')
            qrh.text('使用 Music ID 登录')
        }
    })
    next.on('click', function () {
        $('.ap input[type=password]').css({height: '42px'}).focus()
        next.hide()
        setTimeout(() => {
            nexts.show()
        }, 500)
    })
    $('.ap input[type=text]').keydown(function (event) {
        if (event.keyCode == 13) {
            $('.ap input[type=password]').css({height: '42px'}).focus()
            next.hide()
            setTimeout(() => {
                nexts.show()
            }, 500)
        }
    });
})
</script>
<style>
    .ap{
        margin-top: 35px;
        width: 328px;
        min-width: 300px;
        display: grid;
        position: relative;
        height: 84px;
    }
    #next{
        width: 20px;
        height: 20px;
        position: absolute;
        top: 11px;
        right: 11px;
        margin: 0;
        z-index: 1;
        cursor: pointer;
    }
    #nexts{
        width: 20px;
        height: 20px;
        position: absolute;
        bottom: 11px;
        right: 11px;
        margin: 0;
        z-index: 1;
        display: none;
        cursor: pointer;
    }
    .ap input{
        width: 100%;
        height: 42px;
        border-radius: 6px;
        border: 1px solid #d6d6d6;
        font-size: 17px;
        line-height: 1.29412;
        font-weight: 400;
        color: #494949;
        padding: 0px 15px;
        box-sizing: border-box;
        outline: none;
        transition: all 0.5s;
        background: #FFF;
    }
    .ap input[type=text]:focus{
        border: 1px solid #0070c9;
    }
    .ap input[type=password]:focus{
        border: 1px solid #0070c9;
    }
    .ap input[type=text]{
        border-radius: 6px 6px 0 0;
        border-bottom: none;
    }
    .ap input[type=password]{
        height: 0px;
        position: absolute;
        top: 42px;
        border-top: none;
        border-radius: 0 0 6px 6px;
    }
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
    .login_content p{
        font-size: 17px;
        margin-top: 13.6px;
        color: #333;
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