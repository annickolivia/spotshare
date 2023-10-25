<template>
    <navbar />
    <div class="head ">
        <img src="../../assets/avatar.jpg" alt="" class="avatar">
        <p>Olivia Manoa</p>
        <div class="icon">
            <img src="../../assets/Grid.svg" alt="" class="grid">
            <img src="../../assets/save.svg" alt="" class="save">
        </div>
        <PostsSaveComponent />
    </div>
    <NavbarGuide />
</template>
<script >
import navbar from '../../components/main/NavbarProfil.vue';
import NavbarGuide from '../../components/navbar/NavbarGuideComponent.vue';
import PostsSaveComponent from '../../components/posts/postsSave.vue';
export default {
    name: 'HomeView',
    components: {
        NavbarGuide,
        navbar,
        PostsSaveComponent
    }
}
</script>
<style scoped>
.head {
    height: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 150px;
    box-shadow: 0px 1px 0px 1px rgb(179, 179, 179);
}

.avatar {
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