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
            publications: [],
            name: ""
        }
    },
    mounted() {
        this.name = localStorage.getItem('name')
        this.publications = post
        console.log(this.name);
        console.log(this.publications)
        for (let i = 0; i < post.length; i++) {
            if (post[i].name == this.name) {
                this.publications.push(post[i])
            }

        }
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
    flex-wrap: wrap;
}

img {
    width: 200px;
    height: 200px;
    object-fit: cover;
}
</style>