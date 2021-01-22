<template>
    <div class="sign_in">
        <img :src="qrimg" alt="">
    </div>
</template>
<script>
export default {
    data() {
        return {
            qrimg: '',
            code: ''
        }
    },
    async activated() {
        this.loginstatus()
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
                }
            })
        },
        qr () {
            var timer
            timer = setInterval( async() => {
                this.checkstatu()
                var code = this.code
                if (code === 800) {
                    console.log('二维码已过期')
                    this.getqr()
                } if (code === 801) {
                    console.log('等待扫码')
                } if (code === 803) {
                    console.log('授权登录成功')
                    clearInterval(timer)
                    this.loginstatus()
                }
            }, 2000);
        }
    }
}
</script>
<style>
    
</style>