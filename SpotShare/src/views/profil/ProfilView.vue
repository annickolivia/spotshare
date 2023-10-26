<template>
    <navbar />
    <div class="head ">
        <img :src="profilPic" alt="" class="avatar">
        <p>{{ name }}</p>
        <PostsSaveComponent />
    </div>
    <NavbarGuide />
</template>
<script >
import navbar from '../../components/main/NavbarProfil.vue';
import NavbarGuide from '../../components/navbar/NavbarGuideComponent.vue';
import PostsSaveComponent from '../../components/posts/postsSave.vue';
import { post } from "./../../data/post"

export default {
    name: 'HomeView',
    components: {
        NavbarGuide,
        navbar,
        PostsSaveComponent
    },
    data() {
        return {
            name: "",
            profilPic: ""
        }
    },
    mounted() {
        this.name = localStorage.getItem('name')
        this.profilPic = post.find(item => item.name === this.name).profilePicture;
    },
}
</script>
<style scoped>
.head {
    height: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
    box-shadow: 0px 1px 0px 1px rgb(179, 179, 179);
}

.avatar {
    object-fit: cover;

    border: solid 4px #49BFC1;
    width: 150px;
    height: 150px;
    border-radius: 50%;
}

p {
    font-weight: bold;
    font-size: 1.5em;
}

.icon img {
    margin-left: 60px;
    margin-right: 60px;
}
</style>