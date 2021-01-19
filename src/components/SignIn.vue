<template>
    <div class="sign_in">
        <h1>Please sign in.</h1>
        <form action="" method="post">
            <input v-model="name" type="text" name="" id="">
            <input v-model="password" type="password" name="" id="">
            <input @click="login()" type="button" value="Sign in">
        </form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            name: '',
            password: ''
        }
    },
    methods: {
        login () {
        this.$serve.logineMail(this.name, this.password).then(res => {
                console.log(res)
            })
        }
    },
}
</script>
<style>
    h1{
        font-size: 40px;
        font-weight: 600;
        color: #1d1d1f;
    }
</style>