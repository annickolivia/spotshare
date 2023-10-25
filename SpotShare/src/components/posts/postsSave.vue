<template>
    <div class="image">
        <div v-for="(p, i) in publications" v-bind:key="i" class="item">
            <img v-if="p.name == name" :src="p.image" alt="" @click="openPost(i)">
        </div>
    </div>
</template>
        
<script>
import { post } from "./../../data/post"

export default {
    name: 'PostsSaveComponent',
    data() {
        return {
            publications: post,
            name: ""
        }
    },
    mounted() {
        this.name = localStorage.getItem('name')
        this.publications = post
        console.log(this.name);
        console.log(this.publications);
    },
    methods: {

        openPost(i) {
            localStorage.setItem('name', this.publications[i].name)
            localStorage.setItem('content', this.publications[i].content)
            localStorage.setItem('place', this.publications[i].place)
            localStorage.setItem('profilePicture', this.publications[i].profilePicture)
            localStorage.setItem('image', this.publications[i].image)
            localStorage.setItem('isLiked', this.publications[i].isLikedData)
            location.href = '/post'
        }
    }
}

</script>
   
<style scoped>
.image {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin: 1rem 0 5rem 1.2rem;
    max-width: 1300px;
}


.image img {
    height: 100px;
    width: 100px;
    object-fit: cover;
    overflow: hidden;
    flex-shrink: 0;
    padding: .5rem;
}
</style>