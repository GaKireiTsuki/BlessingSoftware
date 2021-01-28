<template>
    <transition name="fade">
        <div class="message" :class="type" v-show="visible" @click="visible = false">
            <div class="message_content">
                <h1>{{content}}</h1>
                <button v-show="hasClose" @click="visible = false" >OK</button>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: "Message",
    data() {
        return {
            content: "",
            time: 3000,
            visible: false,
            type: "info", //'success','warning','error'
            hasClose: true,
        };
    },
    mounted() {
        this.close();
    },
    methods: {
        close() {
            window.setTimeout(() => {
                this.visible = false;
            }, this.time);
        },
    },
};
</script>

<style>
    .message{
        position: fixed;
        width: 100vw;
        height: 100vh;
        background: #00000000;
        border: none;
        outline: none;
        z-index: 999;
        top: 0;
        display: grid;
        align-content: center;
        justify-content: center;
    }
    .message_content{
        box-sizing: border-box;
        padding: 70px 110px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        text-align: center;
        border-radius: 6px;
        box-shadow: 0 2px 20px rgb(0 0 0 / 24%);
        background: #fff;
        max-width: 600px;
        min-width: 200px;
    }
    .message_content h1{
        color: #000000f2;
        font-size: 34px;
        padding: 8px;
        box-sizing: border-box;
        min-height: 50px;
        line-height: 1.17649;
    }
    .message_content button{
        background: #fa233b;
        height: 28px;
        border-radius: 6px;
        cursor: pointer;
        border: none;
        color: #fff;
        padding: 3.5px 12px;
        box-sizing: border-box;
        font-size: 13px;
        outline: none;
    }
</style>