<template>
    <div class="image">
        <img v-for="(p, i) in publications" v-bind:key="i" :src="p.image" alt="" @click="openPost(i)">
    </div>
</template>
        
<script>
import { post } from "./../../data/post"

export default {
    name: 'PostsSaveComponent',
    data() {
        return {
            publications: post,
            name: localStorage.getItem('name')
        }
    },
    mounted() {
        const result = this.publications.filter(item => item.name === this.name);
        this.publications = result
    },
    methods: {

        openPost(i) {
            localStorage.setItem('name', this.publications[i].name)
            localStorage.setItem('content', this.publications[i].content)
            localStorage.setItem('place', this.publications[i].place)
            localStorage.setItem('profilePicture', this.publications[i].profilePicture)
            localStorage.setItem('image', this.publications[i].image)
            localStorage.setItem('isLiked', this.publications[i].isLikedData)
            this.$router.push('/post');

        }
    }
}

</script>
   
<style scoped>
.image {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-bottom: 100px;
}

img {
    width: 45%;
    height: 100%;
    aspect-ratio: 1/1;
    object-fit: cover;
    margin: 4px;
}
</style>