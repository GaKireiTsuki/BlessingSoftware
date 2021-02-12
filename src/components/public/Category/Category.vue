<template>
    <div id="category">
        <div class="category">
            <label v-for="(item, index) in category" :key="index">
                <input type="radio" class="radio" v-model="option" @click="$emit('update', item.value)" :value="item.value" />
                <span>{{ item.text }}</span>
            </label>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'category',
        props: {
            option: null,
            category: {
                text: Object, value: null
            }
        }
    }
</script>