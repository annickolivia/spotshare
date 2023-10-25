<template>
    <div class="galerie">
        <div class="item"><img src="../../assets/italie.jpg" alt=""></div>
        <div class="item"><img src="../../assets/italie.jpg" alt=""></div>
        <div class="item"><img src="../../assets/italie.jpg" alt=""></div>
        <div class="item"><img src="../../assets/italie.jpg" alt=""></div>
        <div class="item"><img src="../../assets/italie.jpg" alt=""></div>
        <div class="item"><img src="../../assets/italie.jpg" alt=""></div>
        <div class="item"><img src="../../assets/italie.jpg" alt=""></div>
    </div>
</template>
<script>
export default {
    name: 'galerieComponent'
}
</script>
<style scoped>
.galerie {
    margin-top: 30px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 1300px;
}

.item img {
    height: 100px;
    width: 100px;
    overflow: hidden;
    flex-shrink: 0;
    margin: 1px;
}
</style>