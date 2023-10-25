<template>
    <h1>{{ text }}</h1>
    <input type="text" v-model="text"/>
    <input type="text" v-model="text"/>
    <button @click="generate()">Generate text</button>
</template>
<script>
import {defineComponent} from 'vue'
    export default defineComponent({
        name: "TestComponent",
        data(){
            return {
                text: ''
            }
        },
        mounted(){
            alert('Saluuut')
        },
        
        methods:{
            generate(){
                this.text = 'hello'
            },
            mySub(){
                
            }
        }
    })
</script>
<style scoped></style>