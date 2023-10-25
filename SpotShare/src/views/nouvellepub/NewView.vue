<template>
    <NavbarNew />
    <div class="cover">
        <img src="../../assets/italie.jpg" alt="" class="image">
    </div>
    <galerieComponent />
</template>

<script>
import NavbarNew from '../../components/main/NavbarNew.vue'
import galerieComponent from '../../components/galerie/galerieComponent.vue';
export default {
    components: {
        NavbarNew,
        galerieComponent

    }
}

</script>
<style scoped>
.cover {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.image {
    width: 90%;
    height: 50vh;
    object-fit: cover;
    margin-top: 100px;
}
</style>