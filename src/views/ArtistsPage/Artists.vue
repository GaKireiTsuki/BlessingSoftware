<template>
    <div class="artists">
        <div id="category">
            <div class="category">
                <label v-for="item in category" :key="item.text">
                    <input type="radio" class="radio" v-model="area" :value="item.value">
                    <span>{{item.text}}</span>
                </label>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'artists',
    data() {
        return {
            
        }
    },
}
</script>
<style>
    .artists{
        
    }
</style>